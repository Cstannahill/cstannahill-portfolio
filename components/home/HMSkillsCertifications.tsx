// components/home/HMSkillsCertifications.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const HMSkillsCertifications = () => {
  const skillsData = [
    { name: "Frontend Development", proficiency: 90 },
    { name: "Backend Development", proficiency: 85 },
    { name: "Database Design", proficiency: 80 },
    { name: "UI/UX Implementation", proficiency: 75 },
    { name: "DevOps & Deployment", proficiency: 70 },
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      year: "2024",
    },
    // Add more certifications as they become available
  ];

  return (
    <section className="py-12 container max-w-5xl mx-auto">
      <SectionHeading title="Skills & Certifications" gradient={true} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skills Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-accent mb-4">
            Core Skills
          </h3>
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-foreground">{skill.proficiency}%</span>
              </div>
              <Progress
                value={skill.proficiency}
                className="h-2"
                aria-label={`${skill.name} skill proficiency: ${skill.proficiency}%`}
              />
            </div>
          ))}
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="text-xl font-semibold text-accent mb-4">
            Certifications
          </h3>

          {certifications.length > 0 ? (
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-accent/10">
                  <CardContent className="p-4">
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-foreground">
                      {cert.issuer} · {cert.year}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-accent/10 bg-secondary/30">
              <CardContent className="p-4 text-center">
                <p className="text-foreground">
                  Currently pursuing Azure Developer certification
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default HMSkillsCertifications;
