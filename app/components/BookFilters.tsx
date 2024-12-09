"use client";

import { useState } from 'react';
import { BookFilters } from '../types/book';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BookFiltersProps {
  onFilterChange: (filters: BookFilters) => void;
}

export default function BookFilters({ onFilterChange }: BookFiltersProps) {
  const [filters, setFilters] = useState<BookFilters>({});

  const streams = ["Computer Science", "Engineering", "Medicine", "Arts", "Commerce"];
  const conditions = ["new", "like-new", "good", "fair"];

  const handleFilterChange = (key: keyof BookFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Stream</Label>
          <Select
            onValueChange={(value) => handleFilterChange('stream', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select stream" />
            </SelectTrigger>
            <SelectContent>
              {streams.map((stream) => (
                <SelectItem key={stream} value={stream.toLowerCase()}>
                  {stream}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Semester</Label>
          <Select
            onValueChange={(value) => handleFilterChange('semester', parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <SelectItem key={sem} value={sem.toString()}>
                  Semester {sem}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Condition</Label>
          <Select
            onValueChange={(value) => handleFilterChange('condition', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              {conditions.map((condition) => (
                <SelectItem key={condition} value={condition}>
                  {condition.charAt(0).toUpperCase() + condition.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Price Range</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value))}
            />
            <Input
              type="number"
              placeholder="Max"
              onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
            />
          </div>
        </div>

        <Button 
          className="w-full"
          variant="outline"
          onClick={() => {
            setFilters({});
            onFilterChange({});
          }}
        >
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
}