const RMCoreStrengths = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 relative inline-block">
        <span>🚀 </span>
        <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
          Core Strengths
        </span>
        <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent"></span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-accent/20">
              <th className="text-left p-4 font-bold text-accent">Area</th>
              <th className="text-left p-4 font-bold text-accent">
                Technologies & Tools
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4 font-bold text-primary">Front End</td>
              <td className="p-4">
                React, Next.js (App Router), ShadCN UI, Tailwind CSS,
                HTML5/CSS3, Redux, Zustand, Context
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4 font-bold text-primary">Back End / APIs</td>
              <td className="p-4">
                ASP.NET Core, Node.js/Express, REST & WebSockets, ADO.NET,
                Entity Framework, Prisma
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4 font-bold text-primary">Languages</td>
              <td className="p-4">
                <strong className="text-accent-light">TypeScript</strong>{" "}
                (preferred), JavaScript, C#, Python
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4 font-bold text-primary">Data & DevOps</td>
              <td className="p-4">
                MSSQL, PostgreSQL, Docker, Azure (App Service, Container
                Instances), GitHub Actions
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4 font-bold text-primary">Interests</td>
              <td className="p-4">
                AI/ML (OpenAI, Ollama, Hugging Face), Blockchain
                (Synapse‑Chain), Dev Tools, Game Dev (Unity C#), Crypto & DeFi
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-muted-foreground">
        I build fast, document thoroughly, and prioritize MVP-first releases so
        projects deliver value early and evolve iteratively.
      </p>
    </section>
  );
};

export default RMCoreStrengths;
