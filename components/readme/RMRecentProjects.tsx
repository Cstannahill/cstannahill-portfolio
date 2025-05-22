const RMRecentProjects = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 relative inline-block">
        <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
          Recent / Current Projects
        </span>
        <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent"></span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-accent/20">
              <th className="text-left p-4 font-bold text-accent">Project</th>
              <th className="text-left p-4 font-bold text-accent">
                Tech Highlights
              </th>
              <th className="text-left p-4 font-bold text-accent">
                What It Does
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4">
                <a
                  href="https://github.com/Cstannahill/portfolio-nextjs"
                  className="text-primary hover:text-accent-light hover:underline font-bold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portfolio-nextjs
                </a>
              </td>
              <td className="p-4">
                <span className="text-accent-light">Next.js 15</span>,
                TypeScript, Tailwind, ShadCN
              </td>
              <td className="p-4">
                Personal site & blog, built for speed and easy content updates.
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4">
                <a
                  href="https://github.com/Cstannahill/image-transformation-api"
                  className="text-primary hover:text-accent-light hover:underline font-bold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  image-transformation-api
                </a>
              </td>
              <td className="p-4">
                <span className="text-accent-light">Docker</span>, .NET Minimal
                API
              </td>
              <td className="p-4">
                REST API that performs on‑the‑fly image edits (resize, crop,
                filters, convert).
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4">
                <a
                  href="https://github.com/Cstannahill/ai-campfire-chat"
                  className="text-primary hover:text-accent-light hover:underline font-bold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ai-campfire-chat
                </a>
              </td>
              <td className="p-4">
                <span className="text-accent-light">Next.js</span>, OpenAI,
                Prisma
              </td>
              <td className="p-4">
                Cozy GPT-powered chat app for storytelling with friends.
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4">
                <a
                  href="https://github.com/Cstannahill/ctgen"
                  className="text-primary hover:text-accent-light hover:underline font-bold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ctgen
                </a>
              </td>
              <td className="p-4">
                Node CLI, <span className="text-accent-light">TypeScript</span>,
                Inquirer
              </td>
              <td className="p-4">
                CLI that generates and visualizes project folder structures.
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4">
                <a
                  href="https://github.com/Cstannahill/project-flow"
                  className="text-primary hover:text-accent-light hover:underline font-bold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  project-flow
                </a>
              </td>
              <td className="p-4">
                <span className="text-accent-light">React</span>, .NET API,
                Drag‑and‑Drop
              </td>
              <td className="p-4">
                Visual project planner with real-time task and feature mapping.
              </td>
            </tr>
            <tr className="border-b border-muted hover:bg-secondary/30 transition-colors">
              <td className="p-4">
                <a
                  href="https://github.com/Cstannahill/synapse-blockchain"
                  className="text-primary hover:text-accent-light hover:underline font-bold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  synapse-blockchain
                </a>
              </td>
              <td className="p-4">
                <span className="text-accent-light">Python</span>, PoS prototype
              </td>
              <td className="p-4">
                Early-stage blockchain for decentralized AI model marketplaces.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default RMRecentProjects;
