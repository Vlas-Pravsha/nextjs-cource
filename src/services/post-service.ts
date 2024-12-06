/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export interface Author {
  avatar?: string;
  id: string;
  name: string;
}

export interface Post {
  _id?: string;
  title: string;
  description: string;
  image: string;
  author: Author;
  createdAt?: string;
  updatedAt?: string;
  category: string;
  user_id: string;
  isFavorite?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

class PostService {
  private apiBaseUrl: string;
  private token: string | null;

  constructor(baseUrl: string, token: string | null = null) {
    this.apiBaseUrl = baseUrl;
    this.token = token;
  }

  setToken(token: string | null) {
    this.token = token;
  }

  private async fetchApi<T>(
    endpoint: string,
    method: string,
    body?: unknown,
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
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

  async getPosts(): Promise<Post[]> {
    const result = await this.fetchApi<Post[]>("/posts", "GET");
    return result.success ? (result.data ?? []) : [];
  }

  async getUserPosts(): Promise<Post[]> {
    const result = await this.fetchApi<Post[]>("/posts/user", "GET");
    return result.success ? (result.data ?? []) : [];
  }

  async createPost(post: Post): Promise<boolean> {
    const result = await this.fetchApi<Post>("/posts", "POST", post);
    return result.success;
  }

  async getPost(id: string): Promise<Post | null> {
    const result = await this.fetchApi<Post>(`/posts/${id}`, "GET");
    return result.success ? (result.data ?? null) : null;
  }

  async updatePost(post: Post): Promise<boolean> {
    const result = await this.fetchApi<Post>(`/posts/${post._id}`, "PUT", post);
    return result.success;
  }

  async deletePost(id: string): Promise<boolean> {
    const result = await this.fetchApi<Post>(`/posts/${id}`, "DELETE");
    return result.success;
  }

  sortPostsByDate(posts: Post[]): Post[] {
    return posts
      .filter(
        (post) => post.createdAt && !isNaN(new Date(post.createdAt).getTime()),
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime(),
      );
  }
}

export default PostService;
