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
