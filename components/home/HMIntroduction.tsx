// components/home/HMIntroduction.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";

const HMIntroduction = () => {
  return (
    <section className="py-12">
      <SectionHeading title="Introduction" />
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-foreground leading-relaxed">
          I am a software developer who thrives on solving complex challenges
          through clean, efficient code and innovative solutions. With expertise
          in full-stack web development, database design, API development, API
          consumption, crafting dynamic user interfaces, I bring a unique blend
          of technical precision and creativity to every project, delivering
          tools that are both functional and impactful.
        </p>
      </div>
    </section>
  );
};

export default HMIntroduction;
