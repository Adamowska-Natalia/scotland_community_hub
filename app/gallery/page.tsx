import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12">
        <p className="text-muted-foreground text-lg">
          Gallery coming soon!
        </p>
      </main>

      <Footer />
    </div>
  );
}
