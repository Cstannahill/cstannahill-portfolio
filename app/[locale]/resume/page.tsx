import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import BulletIcon from "@/app/assets/lists/24.svg";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons"

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
    company: "None",
    period: "Apr 2024 – Present",
    bullets: [
      "Developing full-stack applications and backend systems, exploring AI integrations, and demonstrating end-to-end delivery of deployable solutions.",
    ],
    projects: [
      {
        name: "TrendDev – AI-powered job market analytics platform",
        links: [
          { label: "Live Site", href: "https://main.d2qk81z2cubp0y.amplifyapp.com/" },
          { label: "GitHub Repository", href: "https://github.com/Cstannahill/job-market-analyzer" },
        ],
        bullets: [
          "Architected a multi-service AWS serverless platform (20+ Lambdas, 5 API Gateways, Cognito auth, 10+ DynamoDB tables + Neon / Postgres) powering daily ingestion and analytics of tech job postings.",
          "Built an event - driven ingestion pipeline with Lambda + EventBridge + S3 + DynamoDB that processes thousands of postings/ day, normalizes skills(~7k unique technologies), and generates trend + salary analytics in near - real time.",
          "Implemented AI resume insights using Bedrock Nova + custom normalizers to produce role-fit scores, salary anchors, and skill ROI; supports multi- resume management, presigned uploads, and async processing.",
          "Designed and shipped a React/TypeScript/Vite dashboard with reusable component architecture, filtering/search across 500 + high signal technologies, responsive layouts, and Vitest unit coverage for critical UI + services.",
          "Achieved 95-100 Lighthouse performance scores across key routes despite data-heavy visualizations."
        ],
      },
      {
        name: "LegisTrack – Legislative tracking app",
        links: [
          { label: "Live Site", href: "https://legistrack.vercel.app/" },
          { label: "GitHub Repository", href: "https://github.com/Cstannahill/legistrack" },
        ],
        bullets: [
          "Built a Next.js 15 + Prisma/Postgres platform that ingests and tracks U.S. bills + executive orders, exposing searchable, categorized legislative timelines",
          "Designed a normalized relational schema (bills, actions, sponsors, votes, companion bills, categories) and optimized indexes / queries for fast filtering on large datasets.",
          "Implemented automated ingestion + summarization workflows (Inngest → AWS Lambda migration) with retries/DLQ patterns and strict rate - limit handling.",
          "Integrated multi-provider LLM summarization (Claude, OpenRouter, OpenAI) with caching + model adapters, producing plain - English summaries at sub - cent cost per bill.",
        ],
      },
    ],
  },
  {
    title: "Programmer",
    company: "AnswerNet - Remote",
    period: "Nov 2022 – Apr 2024",
    bullets: [
      "Built and maintained .NET ETL pipelines processing multi-thousand lead records daily across 46 campaigns, automating SFTP ingestion + validation to cut manual ops by ~70%.",
      "Designed and supported internal + partner-facing APIs, including legacy integration layers, improving delivery reliability and reducing turnaround for new campaigns.",
      "Added record-level safe-fail + alerting and partnered with campaign managers to ship fixes on aggressive timelines, reducing batch downtime by ~40%.",
      "Implemented performance monitoring and optimization strategies to ensure application efficiency.",
      "Collaborated on cross-functional teams to drive project success and implement best practices.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Carte - Remote",
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
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Supabase", "Neon", "SQL Server", "MongoDB", "SQLite", "DynamoDB"],
  },
  {
    title: "AI",
    items: [
      "OpenAI",
      "Anthropic",
      "AWS Bedrock",
      "Hugging Face",
      "Ollama",
      "LangChain",
      "OpenRouter"
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "GitLab",
      "GitLab CI",
      "Bash",
      "Linux (Unbuntu)",
    ]
  }

];

const learningBuckets = [
  { title: "Languages", items: ["Rust", "Go"] }
]
const projectHighlights = [
  {
    name: "TrendDev",
    description:
      "AI job-market analyzer that ingests 500+ postings daily, scores resumes vs. market demand, and surfaces salary + skill gaps.",
    tech: ["Next.js", "AWS Lambda", "Cognito", "API Gateway", "AWS Amplify", "S3", "Bedrock", "DynamoDB", "Recharts"],
    link: "https://main.d2qk81z2cubp0y.amplifyapp.com/",
  },
  {
    name: "LegisTrack",
    description:
      "U.S. legislation tracker with AI summarization, normalized PostgreSQL schema, and companion bill linking.",
    tech: ["Next.js 15", "Prisma", "PostgreSQL", "Supabase", "OpenRouter", "Claude", "Inngest"],
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
              <Link
                href="mailto:christiantannahill2@gmail.com"
                target="_blank"
                className="flex items-center"
              >
                <SiGmail size={16} className="mr-2" /> christiantannahill2@gmail.com
              </Link>
            </span>
            <span className="rounded-full border border-accent/30 hover:bg-accent/10 px-3 py-1">
              <Link
                href="https://linkedin.com/in/christian-tannahill"
                target="_blank"
                className="flex items-center border-accent/40 px-0 py-0 text-sm  rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin mx-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                /in/christian-tannahill
              </Link>

            </span>
            <span className="rounded-full border border-accent/30 hover:bg-accent/10 px-3 py-1">
              <Link
                className="flex items-center"
                href="https://github.com/Cstannahill"
                target="_blank">
                <SiGithub size={16} className="col-span-1 mr-2" /> Cstannahill
              </Link>
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

      {/* <section className="mt-12 space-y-6">
        <SectionHeading
          title="Areas I'm exploring"
          subtitle="Tools I've been learning or working with, but not quite as proficient in yet."
          alignment="left"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {learningBuckets.map((bucket) => (
            <div
              key={bucket.title}
              className="rounded-2xl border border-blue-500/40 bg-blue-500/10 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{bucket.title}</h3>
                <Badge variant="silver">{bucket.items.length}</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {bucket.items.map((item) => (
                  <Badge key={item} variant="outline" className="shadow-stone-700">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

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
