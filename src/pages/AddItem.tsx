import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, X, Plus, Camera } from 'lucide-react'

const AddItem = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    size: '',
    brand: '',
    condition: '',
    gender: '',
    preferredExchange: '',
    additionalNotes: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})  

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    // Validate file type and size
    const newImages: string[] = [...images]
    
    Array.from(files).forEach((file) => {
      // Check if it's an image
      if (!file.type.match('image.*')) {
        alert('Please upload only image files')
        return
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should not exceed 5MB')
        return
      }

      // Create a preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === 'string') {
          newImages.push(e.target.result)
          setImages([...newImages])
        }
      }
      reader.readAsDataURL(file)
    })
  }

  // Remove an image
  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    // Required fields
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.size) newErrors.size = 'Size is required'
    if (!formData.condition) newErrors.condition = 'Condition is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    
    // At least one image is required
    if (images.length === 0) newErrors.images = 'At least one image is required'
    
    // Title length
    if (formData.title.length > 100) newErrors.title = 'Title should be less than 100 characters'
    
    // Description length
    if (formData.description.length > 1000) {
      newErrors.description = 'Description should be less than 1000 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // In a real app, this would send the data to the backend
      console.log('Form submitted:', { ...formData, images })
      
      // Show success message and redirect
      alert('Item added successfully!')
      navigate('/browse')
    } else {
      // Scroll to the first error
      const firstError = document.querySelector('.error-message')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Item</h1>
          <p className="mt-2 text-lg text-gray-600">
            List your clothing item for exchange in our community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload Section */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-900">Item Images</label>
            <p className="text-sm text-gray-600">
              Add up to 5 images of your item. The first image will be the cover image.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {/* Existing Images */}
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={image}
                    alt={`Item preview ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-1 top-1 rounded-full bg-white p-1 shadow-md hover:bg-gray-100"
                  >
                    <X className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              ))}

              {/* Add Image Button (only show if less than 5 images) */}
              {images.length < 5 && (
                <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Camera className="mb-2 h-8 w-8 text-gray-400" />
                    <p className="text-xs text-gray-500">Click to upload</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {errors.images && (
              <p className="error-message text-sm text-red-600">{errors.images}</p>
            )}
          </div>

          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Title */}
              <div className="col-span-full">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Vintage Denim Jacket"
                  className={`input mt-1 w-full ${errors.title ? 'border-red-300 focus:ring-red-500' : ''}`}
                  maxLength={100}
                />
                {errors.title && (
                  <p className="error-message mt-1 text-sm text-red-600">{errors.title}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  {formData.title.length}/100 characters
                </p>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`input mt-1 w-full ${errors.category ? 'border-red-300 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select a category</option>
                  <option value="Tops">Tops</option>
                  <option value="Bottoms">Bottoms</option>
                  <option value="Dresses">Dresses</option>
                  <option value="Outerwear">Outerwear</option>
                  <option value="Knitwear">Knitwear</option>
                  <option value="Activewear">Activewear</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Accessories">Accessories</option>
                </select>
                {errors.category && (
                  <p className="error-message mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              {/* Size */}
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                  Size *
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className={`input mt-1 w-full ${errors.size ? 'border-red-300 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select a size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="One Size">One Size</option>
                </select>
                {errors.size && (
                  <p className="error-message mt-1 text-sm text-red-600">{errors.size}</p>
                )}
              </div>

              {/* Brand */}
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="e.g., Levi's"
                  className="input mt-1 w-full"
                />
              </div>

              {/* Condition */}
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
                  Condition *
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className={`input mt-1 w-full ${errors.condition ? 'border-red-300 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select condition</option>
                  <option value="Like New">Like New</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
                {errors.condition && (
                  <p className="error-message mt-1 text-sm text-red-600">{errors.condition}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={`input mt-1 w-full ${errors.gender ? 'border-red-300 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select gender</option>
                  <option value="Women">Women</option>
                  <option value="Men">Men</option>
                  <option value="Unisex">Unisex</option>
                </select>
                {errors.gender && (
                  <p className="error-message mt-1 text-sm text-red-600">{errors.gender}</p>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your item in detail. Include information about material, fit, any flaws, etc."
              className={`input mt-1 w-full ${errors.description ? 'border-red-300 focus:ring-red-500' : ''}`}
              maxLength={1000}
            />
            {errors.description && (
              <p className="error-message mt-1 text-sm text-red-600">{errors.description}</p>
            )}
            <p className="text-xs text-gray-500">{formData.description.length}/1000 characters</p>
          </div>

          {/* Exchange Preferences */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Exchange Preferences</h2>

            <div className="space-y-4">
              {/* Preferred Exchange */}
              <div>
                <label htmlFor="preferredExchange" className="block text-sm font-medium text-gray-700">
                  What are you looking for in exchange?
                </label>
                <input
                  type="text"
                  id="preferredExchange"
                  name="preferredExchange"
                  value={formData.preferredExchange}
                  onChange={handleInputChange}
                  placeholder="e.g., Winter wear, accessories, or open to offers"
                  className="input mt-1 w-full"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="Any additional information about exchange preferences, meetup locations, etc."
                  className="input mt-1 w-full"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <Upload className="mr-2 h-5 w-5" />
                List Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItem