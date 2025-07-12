import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, X } from 'lucide-react'

const Browse = () => {
  // State for filters
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    condition: '',
    gender: '',
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Mock data for items
  const items = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      category: 'Outerwear',
      size: 'M',
      condition: 'Good',
      gender: 'Unisex',
      owner: 'Alex Chen',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Floral Summer Dress',
      category: 'Dresses',
      size: 'S',
      condition: 'Like New',
      gender: 'Women',
      owner: 'Priya Sharma',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
    },
    {
      id: 3,
      title: 'Wool Sweater',
      category: 'Knitwear',
      size: 'L',
      condition: 'Excellent',
      gender: 'Men',
      owner: 'Michael Johnson',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: 'Leather Boots',
      category: 'Footwear',
      size: '42',
      condition: 'Good',
      gender: 'Men',
      owner: 'Emma Wilson',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
    {
      id: 5,
      title: 'Cotton T-Shirt',
      category: 'Tops',
      size: 'M',
      condition: 'Like New',
      gender: 'Unisex',
      owner: 'Raj Patel',
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      title: 'Silk Scarf',
      category: 'Accessories',
      size: 'One Size',
      condition: 'Excellent',
      gender: 'Women',
      owner: 'Sophia Lee',
      location: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 7,
      title: 'Linen Pants',
      category: 'Bottoms',
      size: '32',
      condition: 'Good',
      gender: 'Men',
      owner: 'David Kim',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 8,
      title: 'Knit Beanie',
      category: 'Accessories',
      size: 'One Size',
      condition: 'Like New',
      gender: 'Unisex',
      owner: 'Aisha Khan',
      location: 'Ahmedabad',
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
  ]

  // Filter options
  const filterOptions = {
    category: [
      'All',
      'Tops',
      'Bottoms',
      'Dresses',
      'Outerwear',
      'Knitwear',
      'Footwear',
      'Accessories',
    ],
    size: ['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'],
    condition: ['All', 'Like New', 'Excellent', 'Good', 'Fair'],
    gender: ['All', 'Women', 'Men', 'Unisex'],
  }

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value === 'All' ? '' : value,
    })
  }

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: '',
      size: '',
      condition: '',
      gender: '',
    })
    setSearchQuery('')
  }

  // Filter items based on filters and search query
  const filteredItems = items.filter((item) => {
    // Check if item matches all active filters
    const matchesCategory = !filters.category || item.category === filters.category
    const matchesSize = !filters.size || item.size === filters.size
    const matchesCondition = !filters.condition || item.condition === filters.condition
    const matchesGender = !filters.gender || item.gender === filters.gender

    // Check if item matches search query
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSize && matchesCondition && matchesGender && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">Browse Items</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover clothing items available for exchange in our community.
        </p>

        {/* Search and Filter Bar */}
        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="relative w-full md:max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, category, location..."
              className="input pl-10 w-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
              {(filters.category || filters.size || filters.condition || filters.gender) && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-white">
                  {Object.values(filters).filter(Boolean).length}
                </span>
              )}
            </button>

            {(filters.category || filters.size || filters.condition || filters.gender || searchQuery) && (
              <button
                onClick={resetFilters}
                className="btn btn-outline flex items-center gap-2 border-red-300 text-red-600 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  className="input mt-1"
                  value={filters.category || 'All'}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  {filterOptions.category.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size Filter */}
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                  Size
                </label>
                <select
                  id="size"
                  className="input mt-1"
                  value={filters.size || 'All'}
                  onChange={(e) => handleFilterChange('size', e.target.value)}
                >
                  {filterOptions.size.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition Filter */}
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
                  Condition
                </label>
                <select
                  id="condition"
                  className="input mt-1"
                  value={filters.condition || 'All'}
                  onChange={(e) => handleFilterChange('condition', e.target.value)}
                >
                  {filterOptions.condition.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender Filter */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  className="input mt-1"
                  value={filters.gender || 'All'}
                  onChange={(e) => handleFilterChange('gender', e.target.value)}
                >
                  {filterOptions.gender.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredItems.length}</span> items
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="input py-1 text-sm">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="condition">Best Condition</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/items/${item.id}`}
                className="card group overflow-hidden transition-all hover:shadow-md"
              >
                <div className="aspect-h-1 aspect-w-1 relative h-64 w-full overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      Size: {item.size}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      {item.gender}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{item.condition} condition</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.location}</span>
                    <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white py-12">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">No items found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your filters or search query.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 btn btn-primary inline-flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Browse