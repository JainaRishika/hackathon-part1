"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomeHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">Student Book Marketplace</h1>
      <Link href="/sell">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Sell a Book
        </Button>
      </Link>
    </div>
  );
}