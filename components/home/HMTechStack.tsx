// components/home/HMTechStack.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";

const HMTechStack = () => {
  const techCategories = [
    {
      name: "Frontend",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
      color: "teal",
    },
    {
      name: "Backend",
      tech: ["Node.js", ".NET Core", "Express", "ASP.NET", "REST APIs"],
      color: "purple",
    },
    {
      name: "Database",
      tech: [
        "SQL Server",
        "PostgreSQL",
        "MongoDB",
        "Entity Framework",
        "Prisma",
      ],
      color: "gold",
    },
    {
      name: "DevOps & Tools",
      tech: ["Git", "GitHub Actions", "Docker", "Azure", "VS Code"],
      color: "silver",
    },
  ];

  return (
    <section className="py-12 bg-card rounded-lg border border-accent/10">
      <SectionHeading
        title="My Tech Stack"
        subtitle="Technologies and tools I use to bring products to life"
        gradient={false}
      />

      <div className="space-y-8 max-w-4xl mx-auto">
        {techCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-[#131b29] border border-cyan-900/30"
          >
            <h2 className="text-xl font-semibold mb-4 text-silver-light">
              {category.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.tech.map((item) => (
                <Badge
                  key={item}
                  variant={category.color as any}
                  className="px-3 py-1 text-sm"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HMTechStack;
