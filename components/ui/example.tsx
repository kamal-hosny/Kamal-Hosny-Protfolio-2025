
export function ColorExample() {
  return (
    <div className="space-y-4 p-4">
      {/* Primary Colors */}
      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-4 rounded-lg">
        Primary Color Example
      </div>

      {/* Secondary Colors */}
      <div className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] p-4 rounded-lg">
        Secondary Color Example
      </div>

      {/* Accent Colors */}
      <div className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] p-4 rounded-lg">
        Accent Color Example
      </div>

      {/* Muted Colors */}
      <div className="bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] p-4 rounded-lg">
        Muted Color Example
      </div>

      {/* Background and Foreground */}
      <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-4 rounded-lg border border-[hsl(var(--border))]">
        Background and Foreground Example
      </div>
    </div>
  );
} 