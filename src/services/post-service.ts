export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  author: Author;
  date: string;
  category: string;
}

class PostService {
  private apiBaseUrl: string;

  constructor(baseUrl: string) {
    this.apiBaseUrl = baseUrl;
  }
}

export default PostService;
