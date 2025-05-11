'use client';
import React from 'react';
import { CatalogItem } from './types'; // assuming shared type

interface Props {
  items: CatalogItem[];
  currentPage: number;
  itemsPerPage: number;
  renderItem: (item: CatalogItem) => React.ReactNode; // ✅ ADD THIS
}

export default function CatalogList({ items, currentPage, itemsPerPage, renderItem }: Props) {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return (
    <>
      {items.slice(start, end).map((item) => (
        <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment> // ✅ Renders generic component
      ))}
    </>
  );
}
