// components/home/HMTechnicalSkills.tsx
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HMTechnicalSkills = () => {
  return (
    <section className="py-12">
      <SectionHeading
        title="Technical Skills"
        subtitle="Core technologies I use to build robust, scalable applications"
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* ReactJS Skill */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">⚛️</span>
              ReactJS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground mb-4">
              Extensive experience building dynamic and responsive front-end
              applications, including advanced state management, reusable
              components, and custom hooks. From interactive dashboards to
              real-time data-driven tools.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-video bg-muted rounded overflow-hidden">
                <Image
                  src="/images/projects/carte/1.png"
                  alt="Carte Analytics Dashboard"
                  width={200}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-muted rounded overflow-hidden">
                <Image
                  src="/images/projects/carte/3.png"
                  alt="Carte Dashboard"
                  width={200}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* .NET Skill */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🔷</span>
              .NET
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground">
              Strong expertise in developing robust back-end systems, crafting
              APIs with ASP.NET, integrating Entity Framework for efficient
              database management, and implementing modular and scalable
              architectures.
            </p>
          </CardContent>
        </Card>

        {/* SQL Skill */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🗃️</span>
              SQL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground mb-4">
              Skilled in writing efficient SQL queries and stored procedures for
              data analysis, reporting, and application integration. Designed
              normalized databases and optimized performance for large datasets.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-video bg-muted rounded overflow-hidden">
                <Image
                  src="/images/projects/carte/5.png"
                  alt="Database Tables"
                  width={200}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-muted rounded overflow-hidden">
                <Image
                  src="/images/projects/carte/7.png"
                  alt="SQL Query"
                  width={200}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HMTechnicalSkills;
