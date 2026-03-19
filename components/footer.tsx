import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-semibold text-lg text-secondary-foreground">Scotland Community Hub</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing our community together through events, shared memories, and local connections.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-secondary-foreground transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-secondary-foreground transition-colors text-sm">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-secondary-foreground transition-colors text-sm">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Contact</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have questions or want to get involved?
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Reach out to us at the community center.
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Scotland Community Hub. Built with care for our community.
          </p>
        </div>
      </div>
    </footer>
  );
}
