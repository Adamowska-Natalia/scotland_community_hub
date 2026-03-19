export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Scotland Community Hub
        </h1>
        <p className="text-lg text-foreground/70 mb-8">
          A community platform for Scotland residents to stay connected through events, shared memories, and local updates.
        </p>
        <div className="flex flex-col gap-4 text-left bg-foreground/5 rounded-lg p-6">
          <h2 className="text-xl font-semibold">Coming Soon</h2>
          <ul className="space-y-2 text-foreground/80">
            <li>Events Calendar - View and discover community events</li>
            <li>Admin Dashboard - Manage events and updates</li>
            <li>Photo Gallery - Share memories from past events</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
