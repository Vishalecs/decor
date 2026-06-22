import { Metadata } from 'next'
import { HeaderHero } from '@/components/header-hero'
import { FeaturedServices } from '@/components/featured-services'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { organizationSchema } from '@/lib/schema'
import BalloonAnimation from '@/components/balloon-animation'

export const metadata: Metadata = {
  title: 'DECOR - Premium Event Decoration Services | Book Now',
  description: 'Transform your celebrations with DECOR premium event decoration services. Book luxury wedding, birthday, anniversary, and corporate event decorations across India.',
  keywords: ['event decoration', 'wedding decoration', 'birthday party', 'celebration booking', 'event planner', 'decor services'],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <BalloonAnimation />
      <HeaderHero />
      <div className="bg-background">
        <FeaturedServices />
        <Testimonials />
        <CTASection />
        <FAQSection />
      </div>
      <Footer />
    </>
  )
}
