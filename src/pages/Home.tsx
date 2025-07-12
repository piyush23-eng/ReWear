import { Link } from 'react-router-dom'
import { ArrowRight, Recycle, Users, Heart } from 'lucide-react'

const Home = () => {
  // Mock data for featured items
  const featuredItems = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      category: 'Outerwear',
      size: 'M',
      condition: 'Good',
      owner: 'Alex Chen',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Floral Summer Dress',
      category: 'Dresses',
      size: 'S',
      condition: 'Like New',
      owner: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
    },
    {
      id: 3,
      title: 'Wool Sweater',
      category: 'Knitwear',
      size: 'L',
      condition: 'Excellent',
      owner: 'Michael Johnson',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: 'Leather Boots',
      category: 'Footwear',
      size: '42',
      condition: 'Good',
      owner: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
  ]

  // How it works steps
  const steps = [
    {
      id: 1,
      title: 'List Your Items',
      description: 'Take photos and create listings for clothes you no longer wear.',
      icon: <Recycle className="h-10 w-10 text-primary-600" />,
    },
    {
      id: 2,
      title: 'Connect with Others',
      description: 'Find community members with similar style and size preferences.',
      icon: <Users className="h-10 w-10 text-primary-600" />,
    },
    {
      id: 3,
      title: 'Exchange & Enjoy',
      description: 'Arrange exchanges and give your clothes a second life.',
      icon: <Heart className="h-10 w-10 text-primary-600" />,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Give Your Clothes a Second Life
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/90">
                Join our sustainable clothing exchange community. Reduce waste, refresh your
                wardrobe, and connect with like-minded individuals.
              </p>
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link to="/browse" className="btn bg-white text-primary-700 hover:bg-gray-100">
                  Browse Items
                </Link>
                <Link
                  to="/add-item"
                  className="btn border border-white bg-transparent hover:bg-white/10"
                >
                  Add Your Item
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Sustainable fashion"
                className="rounded-lg object-cover shadow-xl"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Items
            </h2>
            <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
              Discover unique pieces from our community members ready for exchange.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item) => (
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
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                        {item.category}
                      </span>
                      <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        Size: {item.size}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{item.condition} condition</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {item.owner}</span>
                    <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/browse"
              className="btn btn-outline inline-flex items-center gap-2 font-medium"
            >
              View All Items
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
              Join our community in three simple steps and start exchanging clothes today.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-50">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-primary-600 p-8 md:grid-cols-3 md:p-12">
            <div className="flex flex-col items-center text-center text-white">
              <span className="text-4xl font-bold">1,200+</span>
              <span className="mt-2 text-lg">Active Members</span>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <span className="text-4xl font-bold">5,000+</span>
              <span className="mt-2 text-lg">Items Exchanged</span>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <span className="text-4xl font-bold">2,500kg</span>
              <span className="mt-2 text-lg">Textile Waste Saved</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-secondary-600 to-primary-600 p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-2xl text-white">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Ready to refresh your wardrobe sustainably?
                </h2>
                <p className="mt-4 text-lg text-white/90">
                  Join our community today and start exchanging clothes with like-minded
                  individuals.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link
                  to="/signup"
                  className="btn bg-white text-primary-700 hover:bg-gray-100"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home