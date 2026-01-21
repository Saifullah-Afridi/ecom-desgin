import NavbarSection from '@/components/homepage/navbar-section';
import HeroSectionNew from '@/components/homepage/hero-section';
import BrandsSection from '@/components/homepage/brands-section';
import NewArrivalsSection from '@/components/homepage/new-arrivals-section';
import { Separator } from '@/components/ui/separator';
import TopSellingSection from '@/components/homepage/top-selling-section';
import BrowseStyleSection from '@/components/homepage/browse-style-section';
import ReviewsSection from '@/components/homepage/reviews-section';
import NewsletterSection from '@/components/homepage/newsletter-section';
import FooterSection from '@/components/homepage/footer-section';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavbarSection />
      <HeroSectionNew />
      <BrandsSection />
      <NewArrivalsSection />
      <Separator className="mx-auto max-w-7xl bg-black/10" />
      <TopSellingSection />
      <BrowseStyleSection />
      <ReviewsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}
