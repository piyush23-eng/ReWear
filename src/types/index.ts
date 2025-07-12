// User related types
export interface User {
  id: number
  name: string
  email: string
  location: string
  bio?: string
  avatar?: string
  memberSince: string
  exchangesCompleted: number
  rating: number
}

// Item related types
export type ItemCondition = 'New with tags' | 'Like New' | 'Good' | 'Fair' | 'Worn'
export type ItemSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' | 'One Size' | string
export type ItemCategory =
  | 'Tops'
  | 'Bottoms'
  | 'Dresses'
  | 'Outerwear'
  | 'Activewear'
  | 'Formal'
  | 'Accessories'
  | 'Footwear'
  | 'Other'
export type ItemGender = 'Men' | 'Women' | 'Unisex' | 'Kids'

export interface ClothingItem {
  id: number
  title: string
  description: string
  category: ItemCategory
  size: ItemSize
  brand?: string
  condition: ItemCondition
  gender: ItemGender
  images: string[]
  preferredExchange?: string
  additionalNotes?: string
  ownerId: number
  owner?: User
  createdAt: string
  updatedAt: string
  views?: number
  saves?: number
  inquiries?: number
}

// For item listings in browse/search results
export interface ItemListing {
  id: number
  title: string
  category: ItemCategory
  size: ItemSize
  condition: ItemCondition
  gender: ItemGender
  image: string // Primary/first image
  owner: {
    id: number
    name: string
    location: string
    rating: number
  }
  createdAt: string
}

// For messages/chat
export interface Message {
  id: number
  senderId: number
  receiverId: number
  itemId: number
  content: string
  createdAt: string
  read: boolean
}

export interface Conversation {
  id: number
  participants: {
    id: number
    name: string
    avatar?: string
  }[]
  item: {
    id: number
    title: string
    image: string
  }
  lastMessage: {
    content: string
    createdAt: string
    senderId: number
  }
  unreadCount: number
}

// For filters in browse page
export interface FilterOptions {
  categories: ItemCategory[]
  sizes: ItemSize[]
  conditions: ItemCondition[]
  genders: ItemGender[]
}

export interface Filters {
  category?: ItemCategory
  size?: ItemSize
  condition?: ItemCondition
  gender?: ItemGender
  searchQuery?: string
}

// For notifications
export type NotificationType = 'message' | 'exchange_request' | 'exchange_accepted' | 'system'

export interface Notification {
  id: number
  userId: number
  type: NotificationType
  content: string
  relatedItemId?: number
  relatedUserId?: number
  createdAt: string
  read: boolean
}