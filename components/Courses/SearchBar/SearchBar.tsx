'use client';
import React from 'react';
import Image from 'next/image';

interface Props {
  search: string;
  setSearch: (val: string) => void;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="search-form-ajax">
      <input
        type="text"
        name="search-keyword"
        className="type-check"
        placeholder="Search Courses"
        id="search-key"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button id="search-form-ajax-submit" type="submit">
        <Image src="/images/search.png" width={20} height={20} alt="search" />
      </button>
    </div>
  );
}
