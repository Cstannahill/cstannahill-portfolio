import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const highlightCards = [
  {
    title: "Frontend Delivery",
    summary:
      "React + Next.js dashboards, streaming UI, and mobile-ready flows using TypeScript, Tailwind CSS, and state libraries (Redux/Zustand).",
  },
  {
    title: "Backend & APIs",
    summary:
      "C#/.NET, FastAPI, and Node services powering analytics, ETL jobs, and AI pipelines with pragmatic REST design.",
  },
  {
    title: "AI & Automation",
    summary:
      "Hands-on with OpenAI, Anthropic, Bedrock, and Ollama to build resume intelligence, legislative summarization, and RAG tooling.",
  },
];

const techCategories = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "T‑SQL"],
  },
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js 15",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux",
    ],
  },
  {
    name: "Backend",
    items: [".NET (ASP.NET Core)", "FastAPI", "Node.js", "REST APIs", "Inngest"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite", "DynamoDB"],
  },
  {
    name: "Cloud & Infra",
    items: [
      "AWS (Lambda, API Gateway, S3, Cognito)",
      "Vercel",
      "Docker",
      "GitHub Actions",
      "IaC (SAM/CDK)",
    ],
  },
  {
    name: "AI & Tooling",
    items: [
      "OpenAI",
      "Anthropic",
      "AWS Bedrock",
      "Hugging Face",
      "Ollama",
      "LangChain",
      "Postman",
      "Vite",
    ],
  },
];

const HMTechCapabilities = () => {
  return (
    <section className="py-12">
      <SectionHeading
        title="Tech Stack & Core Skills"
        subtitle="Practical experience building full-stack products, AI workflows, and data pipelines."
        alignment="left"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {highlightCards.map((card) => (
          <Card key={card.title} className="border-accent/10 bg-card/70">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-foreground leading-relaxed">
                {card.summary}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {techCategories.map((category) => (
          <Card
            key={category.name}
            className="border-accent/10 bg-gradient-to-b from-[#0f172a] to-transparent"
          >
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {category.items.length} tools
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} variant="teal">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HMTechCapabilities;
