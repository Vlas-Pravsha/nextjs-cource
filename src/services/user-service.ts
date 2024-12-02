/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type useRouter } from "next/navigation";

export interface UserData {
  id?: string;
  username?: string;
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

type Router = ReturnType<typeof useRouter>;

class UserService {
  private apiBaseUrl: string;
  private router: Router | undefined;

  constructor(baseUrl: string, router?: Router) {
    this.apiBaseUrl = baseUrl;
    this.router = router;
  }

  private async fetchApi<T>(
    endpoint: string,
    method: string,
    body?: unknown,
    requireAuth = false,
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (requireAuth) {
      const token = this.getToken();

      if (!token) {
        return {
          success: false,
          message: "Authentication required",
        };
      }

      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${this.apiBaseUrl}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      const responseData = await response.json();

      return {
        success: response.ok,
        data: responseData,
        message: responseData.message,
      };
    } catch (error) {
      console.error("API Error:", error);

      return {
        success: false,
        message: "Network or server error",
      };
    }
  }

  async register(userData: UserData): Promise<boolean> {
    const credentials = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    };

    const result = await this.fetchApi("/users/register", "POST", credentials);

    const { toast } = await import("react-toastify");

    if (result.success) {
      toast.success("Registration successful!", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          this.router!.push("/");
        },
      });

      return true;
    }

    toast.error(result.message ?? "Registration failed");
    return false;
  }

  async login(credentials: {
    email: string;
    password: string;
  }): Promise<boolean> {
    const result = await this.fetchApi<{ accessToken: string }>(
      "/users/login",
      "POST",
      credentials,
    );

    const { toast } = await import("react-toastify");

    if (result.success && result.data?.accessToken) {
      this.setToken(result.data.accessToken);

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          this.router!.push("/");
        },
      });
      return true;
    }

    toast.error(result.message ?? "Login failed");
    return false;
  }

  async getCurrentUser(): Promise<UserData | null> {
    const result = await this.fetchApi<UserData>(
      "/users/current",
      "GET",
      null,
      true,
    );
    return result.success ? (result.data ?? null) : null;
  }

  logout(): void {
    this.removeToken();
  }

  private setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  private getToken(): string | null {
    return localStorage.getItem("token");
  }

  private removeToken(): void {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default UserService;
