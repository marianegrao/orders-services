// components/stats-bar.tsx
const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects Done" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Positive Feedback" },
];

export default function StatsBar() {
  return (
    <div id="stats" className="container mx-auto px-4 my-12">
      <div className="glass-effect glass-effect-hover rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h4 className="text-4xl font-bold text-primary mb-1">
                {stat.value}
              </h4>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
