import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Browse', path: '/browse' },
    { name: 'Add Item', path: '/add-item' },
    { name: 'About', path: '/about' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600">Rewear</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search items..."
                className="input pl-10 w-64"
              />
            </div>
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-700" />
            </Link>
            <Link to="/favorites" className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center px-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search items..."
                  className="input pl-10 w-full"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-around px-3">
              <Link 
                to="/profile" 
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5 mr-2" />
                Profile
              </Link>
              <Link 
                to="/favorites" 
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Favorites
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar