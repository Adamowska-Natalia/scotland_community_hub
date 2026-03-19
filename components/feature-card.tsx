interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "coming-soon" | "available";
}

export function FeatureCard({ title, description, icon, status }: FeatureCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-card-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <span
        className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
          status === "coming-soon"
            ? "bg-accent/20 text-accent-foreground"
            : "bg-primary/20 text-primary"
        }`}
      >
        {status === "coming-soon" ? "Coming Soon" : "Available"}
      </span>
    </div>
  );
}
