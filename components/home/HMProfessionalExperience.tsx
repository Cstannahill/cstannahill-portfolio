// components/home/HMProfessionalExperience.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HMProfessionalExperience = () => {
  const experiences = [
    {
      title: "Director of Maintenance",
      company: "Evergreen Village - Heritage Operations",
      period: "June 2024 - March 2025",
      responsibilities: [
        "Designed and created a custom housekeeping management application to replace written records",
        "Manage scheduling, budgeting, and daily operations for maintenance and housekeeping departments",
      ],
    },
    {
      title: "Programmer",
      company: "AnswerNet",
      period: "2022 - 2024",
      responsibilities: [
        "Developed and implemented .NET APIs for OPID status callback registration and updates",
        "Created automated data import pipelines for Excel, CSV, and tab-delimited files",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Carte",
      period: "2022",
      responsibilities: [
        "Architected database tables, APIs, and responsive views for analytics and menu customization",
        "Integrated Stripe for secure payment processing",
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
          <Card
            key={index}
            className="hover:border-accent/20 transition-colors"
          >
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
              <ul className="space-y-2 text-sm text-foreground">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>• {resp}</li>
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
