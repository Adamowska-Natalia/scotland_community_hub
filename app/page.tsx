import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventsCalendar } from "@/components/events-calendar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight text-balance mb-4">
                Welcome to the Scotland Community Hub
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your central place to stay connected with our community. Discover upcoming events, share memories from past gatherings, and be part of something special.
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Community Events Calendar
              </h2>
              <p className="text-muted-foreground">
                Stay up to date with all upcoming community gatherings and activities
              </p>
            </div>
            <div className="max-w-xl">
              <EventsCalendar />
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-secondary-foreground mb-8 text-center">
              Explore More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="/gallery"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
                    className="text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Photo Gallery</h3>
                <p className="text-muted-foreground text-sm">
                  Browse and share photos from past community events
                </p>
              </a>
              <a
                href="/admin"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
                    className="text-primary"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Admin Access</h3>
                <p className="text-muted-foreground text-sm">
                  Administrator login for managing events and content
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
