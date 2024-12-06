"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type CategoriesType =
  | "Food"
  | "Animal"
  | "Car"
  | "Sport"
  | "Music"
  | "Technology"
  | "Abstract"
  | "All"
  | "";

interface CategoryContextValue {
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoriesType>>;
  selectedCategory: CategoriesType;
}

const CategoryContext = createContext<CategoryContextValue | undefined>(
  undefined,
);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoriesType>("All");

  const value = useMemo(
    () => ({ selectedCategory, setSelectedCategory }),
    [selectedCategory],
  );

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory(): CategoryContextValue {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
