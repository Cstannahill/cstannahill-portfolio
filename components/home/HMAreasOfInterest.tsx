// components/home/HMAreasOfInterest.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HMAreasOfInterest = () => {
  const interests = [
    {
      area: "AI & Machine Learning",
      description:
        "Building intelligent applications with practical AI integrations using tools like OpenAI, LangChain, and local LLMs (Ollama).",
      topics: [
        "Large Language Models",
        "AI Agents",
        "Prompt Engineering",
        "Vector Databases",
        "Fine-tuning Models",
      ],
      color: "purple",
    },
    {
      area: "Modern Web Architecture",
      description:
        "Exploring scalable, high-performance web application patterns with focus on React Server Components and Edge Computing.",
      topics: [
        "Next.js App Router",
        "React Server Components",
        "Edge Functions",
        "Streaming UI Patterns",
        "Micro-Frontends",
      ],
      color: "teal",
    },
    {
      area: "Developer Experience",
      description:
        "Building custom tools and workflows that enhance productivity, quality, and reliability throughout the development lifecycle.",
      topics: [
        "CLI Tools",
        "Code Generation",
        "Automation",
        "Developer Portals",
        "Custom Abstractions",
      ],
      color: "gold",
    },
    {
      area: "Web3 & Blockchain",
      description:
        "Exploring the intersection of traditional web development and decentralized applications.",
      topics: [
        "Smart Contracts",
        "dApps",
        "Tokenization",
        "Layer 2 Solutions",
        "DeFi",
      ],
      color: "silver",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container max-w-5xl mx-auto">
        <SectionHeading
          title="Areas of Interest"
          subtitle="Technologies and concepts I'm currently exploring and building with"
          gradient={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className="border-accent/10 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-${interest.color}`}></div>
              <CardContent className="">
                <h3 className="text-xl font-bold mb-2">{interest.area}</h3>
                <p className="text-foreground mb-4 text-sm">
                  {interest.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {interest.topics.map((topic, idx) => (
                    <Badge
                      key={idx}
                      variant={interest.color as any}
                      className="text-xs"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HMAreasOfInterest;
