export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  description: string;
  subject: string;
  stream: string;
  semester: number;
  year: number;
  seller: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface BookFilters {
  stream?: string;
  semester?: number;
  year?: number;
  subject?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
}