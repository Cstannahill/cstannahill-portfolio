// components/home/HMEducationSkills.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const HMEducationSkills = () => {
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
      status: "In progress",
    },
    // Add more certifications as they become available
  ];

  return (
    <section className="py-12  rounded-md">
      <div className="container max-w-5xl mx-auto">
        <SectionHeading title="Education & Skills" gradient={false} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-accent mb-6">
              Education & Certification
            </h2>

            {/* Sabio Bootcamp */}
            <Card className="border-accent/10">
              <CardHeader>
                <CardTitle>
                  Sabio Full Stack Software Development Bootcamp
                </CardTitle>
                <Badge variant="teal" className="w-fit">
                  Certified Program
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Completed 530+ hours of intensive training in ReactJS, .NET,
                  SQL, and modern web development practices.
                </p>
                <ul className="list-disc list-inside mt-4 text-foreground space-y-1">
                  <li>
                    Frontend development with React, Redux, and JavaScript
                  </li>
                  <li>Backend API development with C# and ASP.NET Core</li>
                  <li>Database design and SQL server implementation</li>
                  <li>Authentication, security, and deployment workflows</li>
                </ul>
              </CardContent>
            </Card>

            {/* Microsoft Certification */}
            {certifications.length > 0 && (
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-accent/10">
                    <CardContent className="p-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        {cert.name}
                        <Badge variant="purple" className="text-xs">
                          {cert.status}
                        </Badge>
                      </h3>
                      <p className="text-sm text-foreground">
                        {cert.issuer} · {cert.year}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Skills Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-accent mb-6">
              Core Skills
            </h2>
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
            <Card className="border-accent/10">
              <div className="bg-secondary/30 rounded-lg px-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="text-gradient bg-gradient-to-r from-teal via-accent to-purple rounded-lg p-1">
                    Ongoing Learning
                  </span>
                </h3>
                <p className="text-foreground text-sm">
                  Currently focused on expanding my expertise in cloud
                  architecture, serverless applications, and integrating AI
                  functionalities into web applications.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="teal">Azure</Badge>
                  <Badge variant="gold">OpenAI Integration</Badge>
                  <Badge variant="purple">Serverless</Badge>
                  <Badge variant="silver">CI/CD Pipelines</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMEducationSkills;
