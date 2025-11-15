// components/home/HMProfessionalExperience.tsx
import Image from "next/image";
import BulletIcon from "@/app/assets/lists/24.svg";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HMProfessionalExperience = () => {
  const experiences = [
    {
      title: "Independent Software Engineer",
      company: "Self-Employed - Remote",
      period: "Apr 2024 - Present",
      responsibilities: [
        "Ship TrendDev and LegisTrack from concept to production, delivering AI job analytics, resume intelligence, and legislative summarization that process 500+ postings and bills per day.",
        "Design AWS-first serverless architectures (Lambda, EventBridge, DynamoDB, S3) paired with Next.js 15, Prisma, and Inngest for resilient scheduling, automation, and background work.",
        "Integrate AI workflows with OpenAI, Anthropic, and Bedrock to provide resume scoring, salary insights, and policy summaries at cents-per-request scale.",
      ],
    },
    {
      title: "Programmer",
      company: "AnswerNet - Remote",
      period: "Nov 2022 - Apr 2024",
      responsibilities: [
        "Maintained .NET APIs that handled OPID status callbacks and legacy VB integrations, reducing manual interventions across support teams.",
        "Automated ETL flows ingesting Excel/CSV/tab-delimited data, orchestrating SFTP transfers, and surfacing results via SSRS dashboards.",
        "Created dynamic CallScripter workflows and REST client tooling that accelerated campaign configuration and troubleshooting.",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Carte - Remote",
      period: "Aug 2022 - Nov 2022",
      responsibilities: [
        "Built the analytics API layer end to end: controllers, services, and data-access logic aggregating revenue, orders, and menu telemetry.",
        "Developed mobile-first React ordering flows plus Stripe checkout, ensuring data parity between customer, kitchen, and admin views.",
        "Authored optimized T-SQL stored procedures (FOR JSON) to ship pre-shaped analytics payloads and keep API responses sub-second.",
      ],
    },
  ];

  return (
    <section className="py-12">
      <SectionHeading
        title="Professional Experience"
        subtitle="Key roles where I've applied my development skills"
      />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:border-accent/20 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <Badge variant="secondary">{exp.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="bullet-list text-sm text-foreground">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>
                    <span className="bullet">
                      <Image
                        src={BulletIcon}
                        alt="List bullet"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="text">{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HMProfessionalExperience;
