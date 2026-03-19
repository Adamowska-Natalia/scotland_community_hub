import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Photo Gallery
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Browse and share photos from our community events
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-card-foreground mb-3">
                Gallery Coming Soon!
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We are working on bringing you a beautiful gallery where you can upload and browse photos from past community events. Check back soon!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
