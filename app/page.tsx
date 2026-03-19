import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventsCalendar } from "@/components/events-calendar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-xl">
            <EventsCalendar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
