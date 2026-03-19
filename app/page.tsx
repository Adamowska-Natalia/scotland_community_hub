import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeatureCard } from "@/components/feature-card";

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight text-balance mb-6">
                Welcome to the Scotland Community Hub
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Your central place to stay connected with our community. Discover upcoming events, share memories from past gatherings, and be part of something special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/events"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  View Events
                </a>
                <a
                  href="/gallery"
                  className="inline-flex items-center justify-center bg-card text-card-foreground border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
                >
                  Browse Gallery
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Everything you need to stay connected with your community, all in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                title="Events Calendar"
                description="View all upcoming community events in one place. Never miss a gathering, celebration, or meeting again."
                icon={<CalendarIcon />}
                status="coming-soon"
              />
              <FeatureCard
                title="Admin Dashboard"
                description="Secure area for community administrators to manage events, post updates, and keep everyone informed."
                icon={<ShieldIcon />}
                status="coming-soon"
              />
              <FeatureCard
                title="Photo Gallery"
                description="Share and browse photos from past community events. Relive memories and celebrate our shared experiences."
                icon={<ImageIcon />}
                status="coming-soon"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Stay Connected
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Our community hub is growing. Check back soon for new features and ways to connect with your neighbors.
            </p>
            <a
              href="/events"
              className="inline-flex items-center justify-center bg-card text-card-foreground px-6 py-3 rounded-md font-medium hover:bg-card/90 transition-colors"
            >
              Explore Events
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
