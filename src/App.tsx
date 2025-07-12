import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Browse = lazy(() => import('./pages/Browse'))
const ItemDetails = lazy(() => import('./pages/ItemDetails'))
const Profile = lazy(() => import('./pages/Profile'))
const AddItem = lazy(() => import('./pages/AddItem'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback
const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primary-600"></div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="items/:id" element={<ItemDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App