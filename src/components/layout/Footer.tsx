import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, GitHub } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600">Rewear</span>
            </Link>
            <p className="text-sm text-gray-600">
              A sustainable clothing exchange community helping reduce fashion waste
              and promote eco-friendly practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <GitHub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-sm text-gray-600 hover:text-primary-600">
                  Browse Items
                </Link>
              </li>
              <li>
                <Link to="/add-item" className="text-sm text-gray-600 hover:text-primary-600">
                  Add Item
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-sm text-gray-600 hover:text-primary-600">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-primary-600">
                  Sustainability Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-600 hover:text-primary-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} Rewear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer