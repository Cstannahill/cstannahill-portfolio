const RMTechnologiesILove = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 relative inline-block">
        <span>💻 </span>
        {/* Gradient Text */}
        <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
          Technologies I Love Working With
        </span>
        <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent"></span>
      </h2>
      <div className="p-4 rounded-lg bg-secondary/20 border border-accent/10 shadow-inner">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=white"
              height="25"
              alt="TypeScript"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black"
              height="25"
              alt="JavaScript"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=FFD43B&style=plastic"
              height="25"
              alt="Python"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/React-222222?style=plastic&logo=react&logoColor=62d9fb"
              alt="React"
              height="25"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Next.js-000000?style=plastic&logo=nextdotjs&logoColor=white"
              height="25"
              alt="Next.js"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Dotnet-512BD4?style=plastic&logo=dotnet&logoColor=white"
              height="25"
              alt=".NET"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/SQL-336791?style=plastic&logo=postgresql&logoColor=white"
              height="25"
              alt="SQL"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Prisma-2D3748?style=plastic&logo=prisma&logoColor=white"
              height="25"
              alt="Prisma"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/OpenAI-412991?style=plastic&logo=openai&logoColor=white"
              height="25"
              alt="OpenAI"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=plastic&logo=tailwindcss&logoColor=white"
              height="25"
              alt="Tailwind CSS"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Redux-ffffff?style=plastic&logo=redux&logoColor=764ABC"
              height="25"
              alt="Redux"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default RMTechnologiesILove;
