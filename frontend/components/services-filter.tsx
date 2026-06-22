'use client'

import { useState, useCallback } from 'react'
import { Search, Filter, X } from 'lucide-react'

interface ServicesFilterProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string | null) => void
  onPriceChange: (min: number, max: number) => void
  onSortChange: (sort: string) => void
  categories: string[]
}

export function ServicesFilter({
  onSearch,
  onCategoryChange,
  onPriceChange,
  onSortChange,
  categories,
}: ServicesFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [sortBy, setSortBy] = useState('popular')
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = useCallback(
    (value: string) => {
      setSearchQuery(value)
      onSearch(value)
    },
    [onSearch]
  )

  const handleCategory = useCallback(
    (category: string) => {
      const newCategory = selectedCategory === category ? null : category
      setSelectedCategory(newCategory)
      onCategoryChange(newCategory)
    },
    [selectedCategory, onCategoryChange]
  )

  const handlePriceChange = useCallback(
    (min: number, max: number) => {
      setPriceRange([min, max])
      onPriceChange(min, max)
    },
    [onPriceChange]
  )

  const handleSort = useCallback(
    (sort: string) => {
      setSortBy(sort)
      onSortChange(sort)
    },
    [onSortChange]
  )

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory(null)
    setPriceRange([0, 100000])
    setSortBy('popular')
    onSearch('')
    onCategoryChange(null)
    onPriceChange(0, 100000)
    onSortChange('popular')
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Filter Toggle - Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-border rounded-lg hover:bg-rose-light/30 transition-colors"
        >
          <Filter size={20} />
          <span>Filters</span>
        </button>
      </div>

      {/* Filters Container */}
      <div className={`space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
        {/* Sort */}
        <div>
          <h3 className="font-display font-bold text-foreground mb-3">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full p-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-display font-bold text-foreground mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategory === category}
                  onChange={() => handleCategory(category)}
                  className="w-5 h-5 accent-primary rounded"
                />
                <span className="text-foreground group-hover:text-primary transition-colors">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-display font-bold text-foreground mb-3">Price Range</h3>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="100000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        {(searchQuery || selectedCategory || priceRange[0] > 0 || priceRange[1] < 100000 || sortBy !== 'popular') && (
          <button
            onClick={clearFilters}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 text-primary hover:bg-rose-light/50 rounded-lg transition-colors"
          >
            <X size={18} />
            <span>Clear Filters</span>
          </button>
        )}
      </div>
    </div>
  )
}
