import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import BulletIcon from "@/app/assets/lists/24.svg";

const summary =
  "Full-stack engineer blending TypeScript, .NET, and Python to ship AI-powered analytics, legislative tooling, and operational dashboards. Comfortable owning the stack end-to-end—from React/Next.js frontends to AWS serverless backends and AI integrations.";

type ExperienceProject = {
  name: string;
  links?: { label: string; href: string }[];
  bullets: string[];
};

type Experience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  projects?: ExperienceProject[];
};

const experience: Experience[] = [
  {
    title: "Independent Software Engineer",
    company: "Self-Employed — Remote",
    period: "Apr 2024 – Present",
    bullets: [
      "Developing full-stack applications and backend systems to expand technical depth, explore AI integrations, and demonstrate end-to-end delivery of deployable solutions.",
    ],
    projects: [
      {
        name: "TrendDev – AI-powered job market analytics platform",
        links: [
          { label: "Live Site", href: "https://main.d2qk81z2cubp0y.amplifyapp.com/" },
          { label: "GitHub Repository", href: "https://github.com/Cstannahill/job-market-analyzer" },
        ],
        bullets: [
          "AI-powered job market analytics platform analyzing 500+ tech job postings daily to provide salary insights, skill gap analysis, and career path recommendations.",
          "Architected a serverless data pipeline processing 1,000+ job postings daily using AWS Lambda, EventBridge, DynamoDB, and S3, extracting 4,000+ unique technologies and calculating real-time market demand and salary insights.",
          "Built an AI-powered resume analysis system using Amazon Bedrock (Nova Pro) that generates personalized insights including current market value, skill ROI calculations, and career progression recommendations with 85–90% role fit scores.",
          "Developed a React + TypeScript dashboard with authentication (AWS Cognito), allowing users to upload/manage 20 resumes, visualize skill stack completeness scores, and view job recommendations filtered by 900+ technologies.",
        ],
      },
      {
        name: "LegisTrack – Legislative tracking app",
        links: [
          { label: "Live Site", href: "https://legistrack.vercel.app/" },
          { label: "GitHub Repository", href: "https://github.com/Cstannahill/legistrack" },
        ],
        bullets: [
          "Legislative tracking app that simplifies U.S. federal bills and executive orders using AI summarization.",
          "Created a Next.js 15 (App Router) and Inngest/AWS Lambda web application to accurately parse and summarize dense legalese in U.S. legislation and executive orders.",
          "Designed a normalized schema to handle bills, sponsors, votes, and amendments efficiently using PostgreSQL (Prisma ORM), allowing for linking of companion bills, categories, members, and statuses.",
          "Integrated Claude AI, OpenRouter (DeepSeek v3.1), and OpenAI models via an API/adapter to generate plain-English legislative summaries efficiently, enabling ~10 bills to be processed with accurate summary generation and key points identified for less than $0.01.",
        ],
      },
    ],
  },
  {
    title: "Programmer",
    company: "AnswerNet — Remote",
    period: "Nov 2022 – Apr 2024",
    bullets: [
      "Designed and maintained end-to-end ETL pipelines in .NET, processing large lead files and automating SFTP transfers, reducing manual intervention by 70%.",
      "Architected and supported .NET APIs, improving integration capabilities with OnPage callback handling and legacy VB APIs.",
      "Enhanced campaign operations through dynamic CallScripter scripts, SSRS reports, and REST API troubleshooting.",
      "Implemented performance monitoring and optimization strategies to ensure application efficiency.",
      "Collaborated on cross-functional teams to drive project success and implement best practices.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Carte — Remote",
    period: "Aug 2022 – Nov 2022",
    bullets: [
      "Architected and developed a comprehensive .NET analytics API, creating all controllers, service layers, and data-access logic to power a real-time admin dashboard.",
      "Engineered the mobile-first React ordering pipeline, from item customization to Stripe-powered checkout.",
      "Built a complex customization modal orchestrating multi-step APIs to ensure transactional integrity across cart item mutations.",
      "Authored high-performance T-SQL stored procedures that aggregate metrics and return JSON payloads to minimize API processing time.",
    ],
  },
];

const skillBuckets = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "T-SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js 15", "Tailwind CSS", "shadcn/ui", "Redux", "Vite"],
  },
  {
    title: "Backend & Infra",
    items: [
      ".NET (ASP.NET Core)",
      "FastAPI",
      "Node.js",
      "AWS Lambda/API Gateway/S3",
      "Inngest",
      "Docker",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite", "DynamoDB"],
  },
  {
    title: "AI & Tooling",
    items: [
      "OpenAI",
      "Anthropic",
      "AWS Bedrock",
      "Hugging Face",
      "Ollama",
      "LangChain",
      "GitHub Actions",
    ],
  },
];

const projectHighlights = [
  {
    name: "TrendDev",
    description:
      "AI job-market analyzer that ingests 500+ postings daily, scores resumes vs. market demand, and surfaces salary + skill gaps.",
    tech: ["Next.js", "AWS Amplify", "Bedrock", "DynamoDB", "React Charts"],
    link: "https://main.d2qk81z2cubp0y.amplifyapp.com/",
  },
  {
    name: "LegisTrack",
    description:
      "U.S. legislation tracker with AI summarization, normalized PostgreSQL schema, and companion bill linking.",
    tech: ["Next.js 15", "Prisma", "PostgreSQL", "Claude", "Inngest"],
    link: "https://legistrack.vercel.app/",
  },
];

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="bullet-list mt-4 text-sm text-foreground/80">
    {items.map((item) => (
      <li key={item}>
        <span className="bullet">
          <Image src={BulletIcon} alt="" width={20} height={20} />
        </span>
        <span className="text">{item}</span>
      </li>
    ))}
  </ul>
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseURL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://cstannahill-software-dev.vercel.app";

  return {
    metadataBase: new URL(baseURL),
    title: "Resume | Christian Tannahill",
    description:
      "Résumé-style overview of Christian Tannahill's experience, skills, and featured projects.",
    openGraph: {
      title: "Resume | Christian Tannahill",
      description:
        "Résumé-style overview of Christian Tannahill's experience, skills, and featured projects.",
      type: "profile",
      url: `${baseURL}/${locale}/resume`,
      images: [
        {
          url: `${baseURL}/og-readme.png`,
          width: 1200,
          height: 630,
          alt: "Christian Tannahill Resume",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Resume | Christian Tannahill",
      description:
        "Résumé-style overview of Christian Tannahill's experience, skills, and featured projects.",
      images: [`${baseURL}/og-readme.png`],
    },
  };
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="py-12">
      <section className="relative overflow-hidden rounded-3xl border border-accent/10 bg-gradient-to-br from-[#081226] to-[#050a17] px-6 py-10 text-center shadow-xl md:px-12">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-purple/10 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
            Resume Snapshot
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Christian Tannahill
          </h1>
          <p className="mt-2 text-lg text-accent">
            Full-Stack Software Engineer · Illinois (Remote)
          </p>
          <p className="mt-4 max-w-3xl text-foreground/80">{summary}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/70">
            <span className="rounded-full border border-accent/30 px-3 py-1">
              christiantannahill2@gmail.com
            </span>
            <span className="rounded-full border border-accent/30 px-3 py-1">
              linkedin.com/in/christian-tannahill
            </span>
            <span className="rounded-full border border-accent/30 px-3 py-1">
              github.com/cstannahill
            </span>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/projects`}
              className="rounded-full border border-accent/40 px-4 py-2 text-sm text-accent hover:bg-accent/10"
            >
              View Full Portfolio
            </Link>
            <Link
              href="https://calendar.app.google/JepYNPUuk6d9eLoDA"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/40 px-4 py-2 text-sm text-accent hover:bg-accent/10"
            >
              Schedule a conversation
            </Link>
            <Link
              href="/christian-tannahill-full-stack-software-engineer.pdf"
              className="rounded-full border border-accent/40 px-4 py-2 text-sm text-accent hover:bg-accent/10"
            >
              Download PDF
            </Link>
            <Link
              href="/christian-tannahill-full-stack-software-engineer.docx"
              className="rounded-full border border-accent/40 px-4 py-2 text-sm text-accent hover:bg-accent/10"
            >
              Download DOCX
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          title="Core Skills"
          subtitle="Tools I reach for when building data-intensive, AI-assisted products."
          alignment="left"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillBuckets.map((bucket) => (
            <div
              key={bucket.title}
              className="rounded-2xl border border-accent/10 bg-secondary/40 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{bucket.title}</h3>
                <Badge variant="secondary">{bucket.items.length}</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {bucket.items.map((item) => (
                  <Badge key={item} variant="teal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          title="Experience"
          subtitle="Product work, automations, and AI integrations from the past few years."
          alignment="left"
        />
        <div className="space-y-6">
          {experience.map((role) => (
            <div
              key={role.title}
              className="rounded-3xl border border-accent/10 bg-card/80 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{role.title}</h3>
                  <p className="text-accent">{role.company}</p>
                </div>
                <Badge variant="outline">{role.period}</Badge>
              </div>
              <BulletList items={role.bullets} />
              {role.projects && (
                <div className="mt-6 space-y-6 rounded-2xl border border-accent/10 bg-background/40 p-5">
                  {role.projects.map((project) => (
                    <div key={project.name}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-lg font-semibold">{project.name}</h4>
                        {project.links && (
                          <div className="flex flex-wrap gap-3 text-sm text-accent">
                            {project.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                className="hover:underline"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      <BulletList items={project.bullets} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          title="Highlighted Projects"
          subtitle="Recent platforms that demonstrate how I blend AI, data modeling, and UI craft."
          alignment="left"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectHighlights.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-accent/10 bg-secondary/30 p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <Link
                  className="text-sm text-accent hover:underline"
                  href={project.link}
                  target="_blank"
                >
                  View
                </Link>
              </div>
              <p className="mt-3 text-sm text-foreground/80">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="gold">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
