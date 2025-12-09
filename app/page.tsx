import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeatureShowcase } from "@/components/feature-showcase";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />

        <div id="features" className="space-y-0">
          <FeatureShowcase
            title="Overview & Analytics"
            description="Get a complete view of your business performance with our intuitive dashboard. Track key metrics, monitor trends, and make data-driven decisions."
            imageSrc="/platform/dashboard.png"
            imageAlt="Dashboard Interface"
          />

          <div className="bg-blue-50/50">
            <FeatureShowcase
              title="Streamlined Orders"
              description="Manage all your orders in one place. Automated processing, real-time status updates, and seamless integration with suppliers."
              imageSrc="/platform/orders.png"
              imageAlt="Orders Management"
              reversed
            />
          </div>

          <FeatureShowcase
            title="Inventory Management"
            description="Keep track of your stock levels in real-time. Smart alerts prevent stockouts and overstocking, ensuring you always have what you need."
            imageSrc="/platform/products.png"
            imageAlt="Products Inventory"
          />

          <div className="bg-blue-50/50">
            <FeatureShowcase
              title="Smart Scheduling"
              description="Coordinate deliveries and staff schedules effortlessly. Our intelligent calendar helps you optimize time and resources."
              imageSrc="/platform/calendar.png"
              imageAlt="Calendar View"
              reversed
            />
          </div>

          <FeatureShowcase
            title="Direct Communication"
            description="Stay connected with your team and suppliers. Our integrated inbox ensures no message gets lost and collaboration is seamless."
            imageSrc="/platform/inbox.png"
            imageAlt="Inbox Interface"
          />
        </div>

        <CTASection />
        <Footer />
      </main>
    </>
  );
}
