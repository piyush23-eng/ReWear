import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, MessageCircle, Share2, Flag } from 'lucide-react'

const ItemDetails = () => {
  const { id } = useParams<{ id: string }>()
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  // Mock data for a single item
  const item = {
    id: parseInt(id || '1'),
    title: 'Vintage Denim Jacket',
    description:
      'A classic vintage denim jacket in excellent condition. Medium wash with minimal fading. Great for layering in all seasons. Has two front pockets and button closures.',
    category: 'Outerwear',
    size: 'M',
    brand: 'Levi\'s',
    condition: 'Good',
    gender: 'Unisex',
    owner: {
      id: 101,
      name: 'Alex Chen',
      location: 'Mumbai',
      rating: 4.8,
      memberSince: 'January 2023',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
    ],
    listedDate: 'May 15, 2023',
    preferredExchange: 'Looking for winter wear or accessories',
    additionalNotes: 'Can meet in person for exchange in Mumbai area.',
  }

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(item.images[0])

  // Handle message submission
  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the message to the backend
    console.log('Message sent:', message)
    setMessage('')
    setIsMessageModalOpen(false)
    // Show success notification
    alert('Message sent successfully!')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link
        to="/browse"
        className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary-600"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Browse
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200">
            <img
              src={selectedImage}
              alt={item.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {item.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 ${selectedImage === image ? 'ring-2 ring-primary-600' : ''}`}
              >
                <img
                  src={image}
                  alt={`${item.title} - View ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Item Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
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
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                {item.condition} condition
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-medium text-gray-900">Details</h2>
            <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Brand</dt>
                <dd className="text-sm text-gray-900">{item.brand}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Listed Date</dt>
                <dd className="text-sm text-gray-900">{item.listedDate}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-sm font-medium text-gray-500">Preferred Exchange</dt>
                <dd className="text-sm text-gray-900">{item.preferredExchange}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-sm font-medium text-gray-500">Additional Notes</dt>
                <dd className="text-sm text-gray-900">{item.additionalNotes}</dd>
              </div>
            </dl>
          </div>

          {/* Owner Information */}
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-medium text-gray-900">Owner</h2>
            <div className="mt-2 flex items-center space-x-4">
              <img
                src={item.owner.avatar}
                alt={item.owner.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-sm font-medium text-gray-900">{item.owner.name}</h3>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">{item.owner.location}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    {item.owner.rating} ★ rating
                  </span>
                </div>
                <p className="text-xs text-gray-500">Member since {item.owner.memberSince}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3 border-t border-gray-200 pt-6">
            <button
              onClick={() => setIsMessageModalOpen(true)}
              className="btn btn-primary w-full"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Owner
            </button>
            <div className="grid grid-cols-3 gap-3">
              <button className="btn btn-outline flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" />
                Save
              </button>
              <button className="btn btn-outline flex items-center justify-center">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </button>
              <button className="btn btn-outline flex items-center justify-center text-red-600 hover:bg-red-50">
                <Flag className="mr-2 h-5 w-5" />
                Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900">Contact {item.owner.name}</h2>
            <p className="mt-2 text-sm text-gray-600">
              Send a message about {item.title} to arrange an exchange.
            </p>

            <form onSubmit={handleMessageSubmit} className="mt-4">
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input mt-1 w-full"
                  placeholder={`Hi ${item.owner.name}, I'm interested in your ${item.title}...`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsMessageModalOpen(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Similar Items Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Similar Items</h2>
        <p className="mt-2 text-gray-600">You might also be interested in these items.</p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Similar items would be dynamically generated here */}
          {Array.from({ length: 4 }).map((_, index) => (
            <Link
              key={index}
              to={`/items/${index + 10}`}
              className="card group overflow-hidden transition-all hover:shadow-md"
            >
              <div className="aspect-h-1 aspect-w-1 relative h-64 w-full overflow-hidden bg-gray-200">
                <img
                  src={`https://images.unsplash.com/photo-${1550000000000 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80`}
                  alt="Similar item"
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Similar Item {index + 1}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                    Category
                  </span>
                  <span className="text-sm text-gray-500">Size: M</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemDetails