"use client";

import { useState } from 'react';
import BookCard from './BookCard';
import BookFilters from './BookFilters';
import { Book, BookFilters as BookFiltersType } from '../types/book';

const mockBooks = [
  {
    id: '1',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    price: 599,
    condition: 'good',
    description: 'Fourth edition, slight wear on corners but otherwise in great condition',
    subject: 'Algorithms',
    stream: 'Computer Science',
    semester: 3,
    year: 2,
    seller: {
      id: 'user1',
      name: 'John Doe',
      email: 'john@example.com'
    },
    createdAt: '2024-03-20T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z'
  }
];

export default function BookList() {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [filters, setFilters] = useState<BookFiltersType>({});

  const handleFilterChange = (newFilters: BookFiltersType) => {
    setFilters(newFilters);
    // Here you would typically fetch filtered books from the API
    console.log('Filters changed:', newFilters);
  };

  const handleContactSeller = (book: Book) => {
    console.log('Contact seller for book:', book);
    // Here you would typically open a contact dialog or redirect to a chat
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <BookFilters onFilterChange={handleFilterChange} />
      </div>
      
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onContactSeller={handleContactSeller}
            />
          ))}
        </div>
      </div>
    </div>
  );
}