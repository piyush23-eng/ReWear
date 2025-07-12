import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Edit, Trash2, MessageCircle, Settings, LogOut, User, Package, Heart } from 'lucide-react'

const Profile = () => {
  // Mock user data
  const user = {
    id: 101,
    name: 'Alex Chen',
    email: 'alex.chen@example.com',
    location: 'Mumbai',
    bio: 'Fashion enthusiast and sustainability advocate. Love vintage clothing and unique styles.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    memberSince: 'January 2023',
    exchangesCompleted: 15,
    rating: 4.8,
  }

  // Mock listed items
  const listedItems = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      category: 'Outerwear',
      size: 'M',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      listedDate: 'May 15, 2023',
      views: 45,
      inquiries: 3,
    },
    {
      id: 2,
      title: 'Cotton T-Shirt',
      category: 'Tops',
      size: 'M',
      condition: 'Like New',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      listedDate: 'June 2, 2023',
      views: 28,
      inquiries: 1,
    },
    {
      id: 3,
      title: 'Leather Boots',
      category: 'Footwear',
      size: '42',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      listedDate: 'April 10, 2023',
      views: 62,
      inquiries: 5,
    },
  ]

  // Mock saved items
  const savedItems = [
    {
      id: 101,
      title: 'Wool Sweater',
      category: 'Knitwear',
      size: 'L',
      condition: 'Excellent',
      owner: 'Michael Johnson',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 102,
      title: 'Floral Summer Dress',
      category: 'Dresses',
      size: 'S',
      condition: 'Like New',
      owner: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
    },
  ]

  // Mock messages
  const messages = [
    {
      id: 1,
      sender: {
        id: 201,
        name: 'Priya Sharma',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      item: {
        id: 1,
        title: 'Vintage Denim Jacket',
      },
      lastMessage: 'Hi, is this still available for exchange?',
      timestamp: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      sender: {
        id: 202,
        name: 'Raj Patel',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      item: {
        id: 3,
        title: 'Leather Boots',
      },
      lastMessage: 'Would you be interested in exchanging for a winter coat?',
      timestamp: '1 day ago',
      unread: false,
    },
  ]

  // State for active tab
  const [activeTab, setActiveTab] = useState('listed')

  // Delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<number | null>(null)

  // Handle delete item
  const handleDeleteItem = (itemId: number) => {
    setItemToDelete(itemId)
    setShowDeleteModal(true)
  }

  // Confirm delete item
  const confirmDeleteItem = () => {
    // In a real app, this would send a delete request to the backend
    console.log('Deleting item:', itemToDelete)
    setShowDeleteModal(false)
    setItemToDelete(null)
    // Show success notification
    alert('Item deleted successfully!')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* User Profile Card */}
            <div className="card overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-6 text-center text-white">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="mx-auto h-24 w-24 rounded-full border-4 border-white"
                />
                <h2 className="mt-2 text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-white/80">{user.location}</p>
              </div>

              <div className="p-4">
                <div className="flex justify-around border-b border-gray-200 pb-4">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-gray-900">
                      {user.exchangesCompleted}
                    </span>
                    <span className="text-sm text-gray-500">Exchanges</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-gray-900">
                      {user.rating}
                    </span>
                    <span className="text-sm text-gray-500">Rating</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-gray-900">
                      {listedItems.length}
                    </span>
                    <span className="text-sm text-gray-500">Listed</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">{user.bio}</p>
                  <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
                </div>

                <div className="mt-4">
                  <Link to="/profile/edit" className="btn btn-outline w-full">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="card overflow-hidden">
              <nav className="space-y-1 p-2">
                <button
                  onClick={() => setActiveTab('listed')}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${activeTab === 'listed' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Package className="mr-3 h-5 w-5" />
                  My Listed Items
                </button>
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${activeTab === 'saved' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Heart className="mr-3 h-5 w-5" />
                  Saved Items
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${activeTab === 'messages' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Messages
                  {messages.some((msg) => msg.unread) && (
                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-white">
                      {messages.filter((msg) => msg.unread).length}
                    </span>
                  )}
                </button>
                <Link
                  to="/profile/settings"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="mr-3 h-5 w-5" />
                  Settings
                </Link>
                <button className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {/* Listed Items Tab */}
          {activeTab === 'listed' && (
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">My Listed Items</h2>
                <Link to="/add-item" className="btn btn-primary">
                  Add New Item
                </Link>
              </div>

              {listedItems.length > 0 ? (
                <div className="mt-6 space-y-6">
                  {listedItems.map((item) => (
                    <div key={item.id} className="card overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="aspect-h-1 aspect-w-1 h-48 w-full md:h-auto md:w-48">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h3 className="text-lg font-medium text-gray-900">
                                <Link to={`/items/${item.id}`} className="hover:text-primary-600">
                                  {item.title}
                                </Link>
                              </h3>
                              <div className="flex space-x-2">
                                <Link
                                  to={`/edit-item/${item.id}`}
                                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                >
                                  <Edit className="h-5 w-5" />
                                </Link>
                                <button
                                  onClick={() => handleDeleteItem(item.id)}
                                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </div>
                            <div className="mt-1 flex flex-wrap gap-2">
                              <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                                {item.category}
                              </span>
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                Size: {item.size}
                              </span>
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                {item.condition}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                              Listed on {item.listedDate}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                            <div className="flex space-x-4 text-sm text-gray-500">
                              <span>{item.views} views</span>
                              <span>{item.inquiries} inquiries</span>
                            </div>
                            <Link
                              to={`/items/${item.id}`}
                              className="text-sm font-medium text-primary-600 hover:text-primary-700"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white py-12">
                  <Package className="h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No items listed yet
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Start by adding your first item for exchange.
                  </p>
                  <Link to="/add-item" className="mt-4 btn btn-primary">
                    Add New Item
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Saved Items Tab */}
          {activeTab === 'saved' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>

              {savedItems.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {savedItems.map((item) => (
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
              ) : (
                <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white py-12">
                  <Heart className="h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No saved items yet
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Browse items and save the ones you're interested in.
                  </p>
                  <Link to="/browse" className="mt-4 btn btn-primary">
                    Browse Items
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Messages</h2>

              {messages.length > 0 ? (
                <div className="mt-6 space-y-4">
                  {messages.map((message) => (
                    <Link
                      key={message.id}
                      to={`/messages/${message.id}`}
                      className={`card block overflow-hidden transition-all hover:shadow-md ${message.unread ? 'border-l-4 border-l-primary-600' : ''}`}
                    >
                      <div className="flex items-start p-4">
                        <img
                          src={message.sender.avatar}
                          alt={message.sender.name}
                          className="h-10 w-10 rounded-full"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              {message.sender.name}
                            </h3>
                            <span className="text-xs text-gray-500">{message.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Re: {message.item.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                            {message.lastMessage}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white py-12">
                  <MessageCircle className="h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No messages yet
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    When you receive messages about your items, they'll appear here.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900">Delete Item</h2>
            <p className="mt-2 text-sm text-gray-600">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteItem}
                className="btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile