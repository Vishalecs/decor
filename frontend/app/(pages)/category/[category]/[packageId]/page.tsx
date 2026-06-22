import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Sparkles,
  Users,
  Calendar,
} from 'lucide-react'
import { Footer } from '@/components/footer'
import { decorCategories, getCategoryPackage, getDecorCategory } from '@/lib/category-packages'

type PackageRouteProps = {
  params: Promise<{ category: string; packageId: string }>
}

export function generateStaticParams() {
  return decorCategories.flatMap((category) =>
    category.packages.map((item) => ({
      category: category.slug,
      packageId: item.slug,
    }))
  )
}

export async function generateMetadata({ params }: PackageRouteProps): Promise<Metadata> {
  const { category: categorySlug, packageId } = await params
  const category = getDecorCategory(categorySlug)
  const item = getCategoryPackage(categorySlug, packageId)

  if (!category || !item) {
    return {
      title: 'Package Not Found | DECOR',
    }
  }

  return {
    title: `${item.name} | ${category.name} | DECOR`,
    description: `${item.name} starts at ₹${item.price.toLocaleString('en-IN')}. View features, details, and book this ${category.name.toLowerCase()} package.`,
  }
}

export default async function PackageDetailPage({ params }: PackageRouteProps) {
  const { category: categorySlug, packageId } = await params
  const category = getDecorCategory(categorySlug)
  const item = getCategoryPackage(categorySlug, packageId)

  if (!category || !item) {
    notFound()
  }

  const relatedPackages = category.packages.filter((pkg) => pkg.slug !== item.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white text-[#1a0a0e]">
      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Back Link */}
          <Link
            href={`/category/${category.slug}`}
            className="inline-flex items-center gap-2 text-[#c9386b] font-semibold text-sm mb-6 hover:underline"
          >
            <ChevronLeft size={18} />
            Back to {category.name}
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            {/* Left: Image Section */}
            <div>
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
                {/* Best Seller Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <span>🔥</span> Best Seller
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {[item.image, item.image, item.image, item.image, item.image].map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200 cursor-pointer hover:border-[#c9386b]">
                    <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details Section */}
            <div>
              {/* Title & Rating */}
              <div className="mb-4">
                <p className="text-[#c9386b] font-bold text-sm">🔥 Best Seller</p>
                <h1 className="text-3xl font-black text-[#1a0a0e] mt-2">{item.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.8 (124 Reviews)</span>
                </div>

                <p className="text-sm text-gray-600 mt-3">
                  {item.description}
                </p>
              </div>

              {/* Info Boxes */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                  <Clock size={20} className="text-[#c9386b]" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Setup Time</p>
                    <p className="text-sm font-bold">{item.duration}</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                  <Users size={20} className="text-[#c9386b]" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Guest Count</p>
                    <p className="text-sm font-bold">Up to 50</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                  <Calendar size={20} className="text-[#c9386b]" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Schedule For</p>
                    <p className="text-sm font-bold">Available</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                  <Sparkles size={20} className="text-[#c9386b]" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Customization</p>
                    <p className="text-sm font-bold">Available</p>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-pink-50 rounded-xl p-4 mb-6">
                <p className="text-xs text-gray-600 font-semibold">Price</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-black text-[#c9386b]">₹{item.price.toLocaleString('en-IN')}</span>
                  <span className="text-sm line-through text-gray-500">+18,000</span>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">7% OFF</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">Inclusive of all taxes</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mb-6">
                <Link
                  href={`/booking?category=${category.slug}&package=${item.slug}`}
                  className="flex-1 bg-[#c9386b] text-white font-bold py-3 rounded-full hover:bg-[#a8284f] transition flex items-center justify-center gap-2"
                >
                  Order Now
                  <ArrowRight size={18} />
                </Link>
                <button className="flex-1 border-2 border-[#c9386b] text-[#c9386b] font-bold py-3 rounded-full hover:bg-pink-50 transition flex items-center justify-center gap-2">
                  <Heart size={18} />
                  Add to Cart
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" /> Free Cancellation
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" /> Secure Booking
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" /> On-time Delivery
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" /> 24/7 Support
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12 border-t pt-8">
            <div className="flex gap-6 mb-8 border-b overflow-x-auto pb-4">
              {['Package Includes', 'Gallery', 'Details', 'Reviews (124)', 'FAQ'].map((tab) => (
                <button key={tab} className="font-bold text-sm text-gray-600 hover:text-[#c9386b] pb-2 border-b-2 border-transparent hover:border-[#c9386b] whitespace-nowrap transition">
                  {tab}
                </button>
              ))}
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-black text-[#1a0a0e] mb-6">What's Included</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: '🎂', label: 'Cake Table Decoration' },
                  { icon: '🎈', label: 'Balloon Decor' },
                  { icon: '📸', label: 'Photo Backdrop' },
                  { icon: '💡', label: 'LED/Neon Lighting' },
                  { icon: '🎊', label: 'Confetti & Streamers' },
                  { icon: '🪑', label: 'Furniture Setup' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="font-semibold text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Customization Options */}
            <div className="mt-12">
              <h2 className="text-2xl font-black text-[#1a0a0e] mb-6">Customization Options</h2>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: 'Elegant Setup', colors: 'bg-gradient-to-br from-purple-200 to-pink-200' },
                  { name: 'Colorful Decor', colors: 'bg-gradient-to-br from-yellow-200 to-pink-200' },
                  { name: 'Floral Theme', colors: 'bg-gradient-to-br from-red-200 to-pink-200' },
                  { name: 'Festive Vibe', colors: 'bg-gradient-to-br from-orange-200 to-yellow-200' },
                ].map((opt, i) => (
                  <div key={i} className="text-center">
                    <div className={`h-24 rounded-lg mb-2 ${opt.colors}`}></div>
                    <p className="text-sm font-semibold">{opt.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Custom Package */}
            <div className="mt-12 bg-pink-50 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-[#c9386b] font-bold text-sm">💡 Need a custom package?</p>
                <h3 className="text-lg font-black mt-1">Tell us your venue, theme, and guest count.</h3>
              </div>
              <Link
                href={`/booking?category=${category.slug}`}
                className="bg-[#c9386b] text-white px-6 py-3 rounded-full font-bold hover:bg-[#a8284f] transition"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>

          {/* Related Packages */}
          {relatedPackages.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-black mb-6">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {relatedPackages.map((pkg) => (
                  <Link
                    key={pkg.slug}
                    href={`/category/${category.slug}/${pkg.slug}`}
                    className="group"
                  >
                    <div className="relative rounded-lg overflow-hidden aspect-square mb-3">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition" />
                      <button className="absolute top-2 right-2 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                        <Heart size={18} className="text-[#c9386b]" />
                      </button>
                    </div>
                    <h3 className="font-bold text-sm">{pkg.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">₹{pkg.price.toLocaleString('en-IN')}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        * {
          font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  )
}
