import { Link } from 'react-router-dom'
import { Recycle, Users, Heart, Leaf, ShieldCheck, MessageCircle } from 'lucide-react'

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      bio: 'Fashion industry veteran with a passion for sustainable clothing and circular economy.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Raj Patel',
      role: 'CTO',
      bio: 'Tech enthusiast focused on creating seamless digital experiences for community-driven platforms.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Ananya Desai',
      role: 'Community Manager',
      bio: 'Former fashion blogger with expertise in building engaged communities around shared values.',
      image: 'https://randomuser.me/api/portraits/women/67.jpg',
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: 'How does Rewear work?',
      answer:
        'Rewear is a platform where you can list clothing items you no longer wear and exchange them with other users. Simply create an account, list your items with photos and details, browse other items, and connect with users to arrange exchanges.',
    },
    {
      question: 'Is Rewear free to use?',
      answer:
        'Yes, Rewear is completely free to use. We believe in making sustainable fashion accessible to everyone. There are no listing fees or commission charges.',
    },
    {
      question: 'How do I ensure the quality of items I receive?',
      answer:
        'All users are required to accurately describe the condition of their items and provide clear photos. We also have a rating system that helps maintain trust within the community. If you receive an item that doesn\'t match its description, you can report it to our support team.',
    },
    {
      question: 'Can I sell items instead of exchanging them?',
      answer:
        'Currently, Rewear is focused on exchanges only. This aligns with our mission of promoting a circular economy and reducing consumption. However, we may introduce selling options in the future based on community feedback.',
    },
    {
      question: 'How are exchanges physically completed?',
      answer:
        'Users arrange exchanges through our messaging system. You can choose to meet in person (in a safe, public location) or ship items to each other. The specific logistics are decided between the exchanging parties.',
    },
    {
      question: 'What if I can\'t find anyone to exchange with in my area?',
      answer:
        'Rewear connects users across India, so you can arrange shipping for exchanges with users in different cities. We recommend using tracked shipping methods for security.',
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          About <span className="text-primary-600">Rewear</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
          Building a sustainable future for fashion, one exchange at a time.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white shadow-xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-lg leading-relaxed">
            At Rewear, we're on a mission to transform how we think about clothing. Fast fashion
            has created a cycle of overconsumption and waste that's harmful to our planet. We
            believe in extending the lifecycle of clothing through community exchanges,
            reducing waste while helping people refresh their wardrobes sustainably and
            affordably.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            By creating a platform where quality clothing finds new homes instead of landfills,
            we're building a community that values sustainability, creativity, and connection
            over constant consumption.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Our Values</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <Recycle className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Sustainability</h3>
            <p className="mt-2 text-gray-500">
              We're committed to reducing fashion waste by extending the lifecycle of clothing
              through community exchanges.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Community</h3>
            <p className="mt-2 text-gray-500">
              We foster meaningful connections between people who share values of
              sustainability and creative expression.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Accessibility</h3>
            <p className="mt-2 text-gray-500">
              We believe sustainable fashion should be accessible to everyone, regardless of
              budget or location.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-16 rounded-xl bg-gray-50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Our Impact</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">5,000+</div>
            <p className="mt-2 text-lg text-gray-600">Clothing items exchanged</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">2,500+</div>
            <p className="mt-2 text-lg text-gray-600">Active community members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">10,000kg+</div>
            <p className="mt-2 text-lg text-gray-600">Textile waste diverted from landfills</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">How Rewear Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="card p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">List Your Items</h3>
            <p className="mt-2 text-sm text-gray-500">
              Photograph and describe clothing you no longer wear but is still in good
              condition.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Browse & Connect</h3>
            <p className="mt-2 text-sm text-gray-500">
              Find items you like and connect with their owners through our messaging system.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Arrange Exchange</h3>
            <p className="mt-2 text-sm text-gray-500">
              Agree on the items to exchange and decide how to complete the exchange (in-person
              or shipping).
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Rate & Review</h3>
            <p className="mt-2 text-sm text-gray-500">
              After completing the exchange, rate your experience to help build trust in our
              community.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/browse" className="btn btn-primary">
            Start Browsing
          </Link>
          <Link to="/add-item" className="btn btn-outline ml-4">
            List Your First Item
          </Link>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="card overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-primary-600">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16 rounded-xl bg-gray-50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Why Choose Rewear?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary-600 text-white">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Eco-Friendly</h3>
              <p className="mt-2 text-gray-500">
                Every exchange prevents textiles from ending up in landfills and reduces the
                demand for new production.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary-600 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Safe & Secure</h3>
              <p className="mt-2 text-gray-500">
                Our platform includes verification processes, secure messaging, and a community
                rating system to ensure safe exchanges.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary-600 text-white">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Community-Driven</h3>
              <p className="mt-2 text-gray-500">
                Connect with like-minded individuals who share your values of sustainability
                and conscious consumption.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-2xl bg-primary-600 p-8 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold">Join Our Community Today</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Be part of the sustainable fashion movement. Start exchanging, start rewearing.
        </p>
        <div className="mt-6">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Sign Up Now
          </Link>
          <Link
            to="/browse"
            className="ml-4 inline-flex items-center justify-center rounded-md border border-white px-5 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Browse Items
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About