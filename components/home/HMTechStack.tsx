// components/home/HMTechStack.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";

const HMTechStack = () => {
  const techCategories = [
    {
      name: "Frontend",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Vite", "Redux", "Zustand"],
      color: "teal",
    },
    {
      name: "Backend",
      tech: ["Node.js", "Next.js", "FastAPI", ".NET Core", "Express", "ASP.NET", "REST APIs"],
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
      tech: ["Git", "GitHub Actions", "Docker", "Azure", "VS Code", "Cursor", "Claude", "Copilot", "Postman"],
      color: "silver",
    },
    {
      name: "AI & ML",
      tech: ["TensorFlow", "PyTorch", "OpenAI", "Anthropic", "Ollama", "Langchain", "Hugging Face / Transformers", "Scikit-learn", "Chromadb"],
      color: "outline",
    },
  ];

  return (
    <section className="py-12 bg-card rounded-lg border border-silver/50">
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
