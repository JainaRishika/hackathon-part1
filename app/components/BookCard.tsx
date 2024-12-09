"use client";

import Image from 'next/image';
import { Book } from '../types/book';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, IndianRupee } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onContactSeller: (book: Book) => void;
}

export default function BookCard({ book, onContactSeller }: BookCardProps) {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="relative w-full h-48">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <CardTitle className="mt-4 line-clamp-2">{book.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">{book.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4" />
            <span className="text-lg font-semibold">₹{book.price}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">{book.stream}</Badge>
            <Badge variant="secondary">Semester {book.semester}</Badge>
            <Badge variant="outline">{book.condition}</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={() => onContactSeller(book)}
        >
          Contact Seller
        </Button>
      </CardFooter>
    </Card>
  );
}