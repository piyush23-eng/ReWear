import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-primary-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <Home className="mr-2 h-4 w-4" />
                Go back home
              </Link>
              <Link
                to="/browse"
                className="inline-flex items-center rounded-md border border-transparent bg-secondary-100 px-4 py-2 text-sm font-medium text-secondary-700 hover:bg-secondary-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
              >
                <Search className="mr-2 h-4 w-4" />
                Browse items
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default NotFound