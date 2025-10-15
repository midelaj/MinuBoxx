"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "@/contant";
import Button from "@/components/furniture/Button";
import ProductCard from "@/components/furniture/ProductCard";
import Link from "next/link";

const ProductDetailPage = ({ product }) => {
  const { productId } = useParams();
  const [activeImage, setActiveImage] = useState(
    product?.images?.[0] || product.image
  );

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-serif">Product not found.</h1>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="bg-bg-main pt-24 text-text-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        {/* <nav className="text-sm mb-8 text-text-secondary">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/category" className="hover:text-accent">
            Categories
          </Link>
          <span className="mx-2">&gt;</span>
          <Link
            href={`/category?category=${product.category}`}
            className="hover:text-accent"
          >
            {product.category}
          </Link>
          <span className="mx-2">&gt;</span>
          <span>{product.name}</span>
        </nav> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden mb-4 shadow-lg">
              <img
                src={`${activeImage}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === img ? "border-accent" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-text-secondary">
              {product.tagline}
            </p>
            <p className="mt-6 text-4xl font-semibold text-accent">
              ${product.price.toLocaleString()}
            </p>

            <div className="mt-8 prose max-w-none text-text-secondary leading-relaxed">
              <p>{product.description}</p>
            </div>

            <div className="mt-8 p-6 bg-bg-secondary rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-text-main">
                Specifications
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <strong>Dimensions:</strong> {product.specs.dimensions}
                </li>
                <li>
                  <strong>Material:</strong> {product.material}
                </li>
                <li>
                  <strong>Finish:</strong> {product.specs.finish}
                </li>
                <li>
                  <strong>Warranty:</strong> {product.specs.warranty}
                </li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" className="w-full sm:w-auto">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {/* {relatedProducts.length > 0 && (
        <div className="mt-24">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
