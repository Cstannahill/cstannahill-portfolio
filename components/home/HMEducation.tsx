// components/home/HMEducation.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HMEducation = () => {
  return (
    <section className="py-12">
      <SectionHeading title="Education" />

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>
              Sabio Full Stack Software Development Bootcamp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Completed 530+ hours of intensive training in ReactJS, .NET, SQL,
              and modern web development practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HMEducation;
