import React from "react";
import { CATEGORIES } from "@/contant";

const FilterPanel = ({ selectedCategory, setSelectedCategory }) => (
  <div className="space-y-8">
    {/* Category Filter */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-text-main">Category</h3>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-3 border border-border rounded-lg bg-bg-secondary text-text-main focus:ring-accent focus:border-accent"
      >
        <option value="All">All Categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterPanel;
