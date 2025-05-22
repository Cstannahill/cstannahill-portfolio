const BadgeImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-[60px] h-[45px] flex items-center justify-center bg-slate-800/50 rounded-md overflow-hidden">
    <img src={src} alt={alt} className="object-contain w-full h-full" />
  </div>
);

const RMTechExplored = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 relative inline-block">
        <span>🛠️ </span>
        {/* Gradient Text */}
        <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
          Tech Explored
        </span>
        <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent"></span>
      </h2>
      <div className="grid grid-cols-6 gap-2 justify-items-center mb-6">
        {/* Row 1 - Languages */}
        <BadgeImage
          src="https://img.shields.io/badge/-3178C6?logo=typescript&logoColor=white&style=plastic"
          alt="TypeScript"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-F7DF1E?logo=javascript&logoColor=black&style=plastic"
          alt="JavaScript"
        />
        <BadgeImage
          src="https://img.shields.io/badge/C%23-239120?logo=csharp&logoColor=white&style=plastic"
          alt="C#"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-3776AB?logo=python&logoColor=FFD43B&style=plastic"
          alt="Python"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-00599C?logo=c%2B%2B&logoColor=white&style=plastic"
          alt="C++"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-2C2D72?logo=lua&logoColor=white&style=plastic"
          alt="Lua"
        />

        {/* Row 2 - Frontend */}
        <BadgeImage
          src="https://img.shields.io/badge/-20232A?logo=react&logoColor=61DAFB&style=plastic"
          alt="React"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-000000?logo=nextdotjs&logoColor=white&style=plastic"
          alt="Next.js"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-06B6D4?logo=tailwindcss&logoColor=white&style=plastic"
          alt="Tailwind CSS"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-000000?logo=stripe&logoColor=white&style=plastic"
          alt="Stripe"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-ffffff?logo=redux&logoColor=764ABC&style=plastic"
          alt="Redux"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-333333?logo=npm&logoColor=white&style=plastic&label=Inquirer"
          alt="Inquirer"
        />

        {/* Row 3 - Backend */}
        <BadgeImage
          src="https://img.shields.io/badge/-512BD4?logo=blazor&logoColor=white&style=plastic"
          alt="Blazor"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-339933?logo=nodedotjs&logoColor=white&style=plastic"
          alt="Node.js"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-000000?logo=express&logoColor=white&style=plastic"
          alt="Express"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-512BD4?logo=dotnet&logoColor=white&style=plastic"
          alt=".NET"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-2D3748?logo=prisma&logoColor=white&style=plastic"
          alt="Prisma"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-336791?logo=postgresql&logoColor=white&style=plastic"
          alt="PostgreSQL"
        />

        {/* Row 4 - AI & Tools */}
        <BadgeImage
          src="https://img.shields.io/badge/-fdfdfd?logo=axios&logoColor=5A29E4&style=plastic"
          alt="Axios"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-6C3483?logo=dotnet&logoColor=white&style=plastic"
          alt="Entity Framework"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-412991?logo=openai&logoColor=white&style=plastic"
          alt="OpenAI"
        />
        <BadgeImage
          src="https://img.shields.io/badge/Ollama-000000?style=plastic&logo=ollama&logoColor=white"
          alt="Ollama"
        />
        <BadgeImage
          src="https://img.shields.io/badge/Anthropic-1A1A1A?style=plastic&logo=anthropic&logoColor=white"
          alt="Anthropic"
        />
        <BadgeImage
          src="https://img.shields.io/badge/LangChain-D4FF00?style=plastic&logo=langchain&logoColor=black"
          alt="LangChain"
        />

        {/* Row 5 - DevOps & Tools */}
        <BadgeImage
          src="https://img.shields.io/badge/LangGraph-000000?style=plastic&logoColor=white"
          alt="LangGraph"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-2496ED?logo=docker&logoColor=white&style=plastic"
          alt="Docker"
        />
        <BadgeImage
          src="https://img.shields.io/badge/Azure-0089D6?logo=azuredevops&logoColor=white&style=plastic"
          alt="Azure"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-2088FF?logo=githubactions&logoColor=white&style=plastic"
          alt="GitHub Actions"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-fefefe?logo=mermaid&logoColor=FF3670&style=plastic"
          alt="Mermaid"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-000000?logo=mdx&logoColor=yellow&style=plastic"
          alt="MDX"
        />

        {/* Row 6 - Additional Tools */}
        <BadgeImage
          src="https://img.shields.io/badge/-F05032?logo=git&logoColor=white&style=plastic"
          alt="Git"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-6E4C13?logo=jsonwebtokens&logoColor=white&style=plastic"
          alt="JWT"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-7B4EA3?logo=nestjs&logoColor=white&style=plastic"
          alt="NestJS"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-FFCB2B?logo=vite&logoColor=white&style=plastic"
          alt="Vite"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-333333?logo=electron&logoColor=white&style=plastic"
          alt="Electron"
        />
        <BadgeImage
          src="https://img.shields.io/badge/-005F69?logo=swagger&logoColor=white&style=plastic"
          alt="Swagger"
        />
      </div>
    </section>
  );
};
export default RMTechExplored;
