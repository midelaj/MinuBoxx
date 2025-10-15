"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES } from "@/contant";
import ProductCard from "@/components/furniture/ProductCard";
import FilterPanel from "@/components/furniture/FilterPanel";
import Link from "next/link";
import FurnitureLayout from "./layout";

const ITEMS_PER_PAGE = 8;

const CategoryPage = () => {
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [priceRange, setPriceRange] = useState(5000);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = PRODUCTS;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Default sort by popularity
    return [...filtered].sort((a, b) => b.popularity - a.popularity);
  }, [selectedCategory]);

  const loadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };

  const currentCategoryName =
    selectedCategory === "All" ? "All Products" : selectedCategory;
  return (
    <FurnitureLayout>
      <div className="bg-bg-main pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header and Breadcrumb */}
          <div className="text-center mb-12">
            <nav className="text-sm mb-2 text-text-secondary">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <Link href="/category" className="hover:text-accent">
                Categories
              </Link>
              {currentCategoryName !== "All Products" && (
                <>
                  <span className="mx-2">&gt;</span>
                  <span>{currentCategoryName}</span>
                </>
              )}
            </nav>
            <h1 className="text-5xl font-serif font-bold text-text-main">
              {currentCategoryName}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Sidebar for Desktop */}
            <aside className="hidden lg:block w-1/4 xl:w-1/5 sticky top-24 self-start">
              <FilterPanel
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </aside>

            {/* Product Grid and Sorting */}
            <main className="w-full lg:w-3/4 xl:w-4/5">
              {/* Mobile Filter Toggle & Product Count */}
              <div className="flex justify-between items-center mb-6 p-4 bg-bg-secondary rounded-xl">
                <span className="text-sm text-text-secondary">
                  Showing{" "}
                  {Math.min(visibleItems, filteredAndSortedProducts.length)} of{" "}
                  {filteredAndSortedProducts.length} products
                </span>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden flex items-center gap-2 text-text-main font-medium"
                >
                  {/* <Icon name="menu" className="w-5 h-5" /> */}
                  <span>Filters</span>
                </button>
              </div>

              {/* Mobile Filter Panel */}
              {isFilterOpen && (
                <div className="lg:hidden bg-bg-secondary p-6 rounded-2xl mb-6">
                  <FilterPanel
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>
              )}

              {/* Product Grid */}
              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredAndSortedProducts
                    .slice(0, visibleItems)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-bg-secondary rounded-2xl">
                  <h3 className="text-2xl font-semibold text-text-main">
                    No products found
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              )}

              {/* Load More Button */}
              {visibleItems < filteredAndSortedProducts.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    className="bg-primary-btn-bg text-primary-btn-text px-8 py-3 rounded-xl hover:bg-primary-btn-bg-hover transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </FurnitureLayout>
  );
};

export default CategoryPage;
