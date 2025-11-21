// components/home/HMTicker.tsx
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ProjectTicker } from "@/components/project";

const HMTicker = () => {
    const skillsData = [
        { name: "Frontend Development", proficiency: 90 },
        { name: "UI/UX Implementation", proficiency: 85 },
        { name: "Backend Development", proficiency: 85 },
        { name: "Database Design", proficiency: 80 },
        { name: "DevOps & Deployment", proficiency: 75 },
    ];

    const certifications = [
        //   {
        //     name: "Microsoft Certified: Azure Developer Associate",
        //     issuer: "Microsoft",
        //     year: "2024",
        //     status: "In progress",
        //   },
        //   // Add more certifications as they become available
    ];

    return (
        <section className="py-12 mb-48 rounded-md">
            <div className="container">
                <ProjectTicker
                    className="w-screen overflow-x-clip absolute left-0"
                    pauseOnHover
                    variant="outline"
                    size="xl"
                    items={[
                        {
                            id: "trenddev-1",
                            label: "TrendDev",
                            imageSrc: "/images/projects/trenddev/landing.avif",
                            imageAlt: "TrendDev landing page",
                        },
                        {
                            id: "project-flow",
                            label: "ProjectFlow",
                            imageSrc: "/images/projects/project-flow/pf-sidebar.webp",
                            imageAlt: "Project sidebar",
                        },
                        {
                            id: "pyimage",
                            label: "PyImageConvrt",
                            imageSrc: "/images/projects/personal/pyimage.png",
                            imageAlt: "Pyimage frontend",
                        },
                        {
                            id: "legistrack-4",
                            label: "LegisTrack",
                            imageSrc: "/images/projects/legistrack/ltlanding.png",
                            imageAlt: "LegisTrack landing",
                        },
                        {
                            id: "evo-5",
                            label: "Code-Evo",
                            imageSrc: "/images/projects/code-evolution/analysis.png",
                            imageAlt: "Nutritional modal detail",
                        },
                        {
                            id: "carte-6",
                            label: "Carte",
                            imageSrc: "/images/projects/carte/6.png",
                            imageAlt: "Organization switcher",
                        },
                        // {
                        //     id: "hsk-7",
                        //     label: "Housekeeping Tracker",
                        //     imageSrc: "/images/projects/hsk/1.avif",
                        //     imageAlt: "Dietary cards carousel",
                        // },
                        // {
                        //     id: "hsk-8",
                        //     label: "Housekeeping Tracker",
                        //     imageSrc: "/images/projects/hsk/3.avif",
                        //     imageAlt: "Operations summary dashboard",
                        // },
                        // {
                        //     id: "evo-9",
                        //     label: "Code-Evo",
                        //     imageSrc: "/images/projects/code-evolution/techevo.png",
                        //     imageAlt: "KPI cards layout",
                        // },
                    ]}
                />
                {/* <SectionHeading title="Education & Skills" gradient={false} /> */}
            </div>
        </section>
    );
};

export default HMTicker;
