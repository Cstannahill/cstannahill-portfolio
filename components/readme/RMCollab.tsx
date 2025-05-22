const RMCollab = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 relative inline-block">
        <span>🤝 </span>
        {/* Gradient Text */}
        <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
          Let's Collaborate
        </span>
        <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent"></span>
      </h2>
      <p className="mb-4 text-accent-light font-medium">I'm always keen to:</p>
      <ul className="space-y-4 text-muted-foreground">
        <li className="flex items-start">
          <div className="mr-2 mt-1 text-primary">▸</div>
          <div>
            <strong className="text-foreground">Pair on open‑source</strong>
            <p className="text-sm mt-1">
              (especially TS/React utilities, AI, DevOps pipelines, or .NET
              APIs)
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="mr-2 mt-1 text-primary">▸</div>
          <div>
            <strong className="text-foreground">
              Tinker with AI workflows
            </strong>
            <p className="text-sm mt-1">
              (prompt engineering, agents, local model hosting)
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="mr-2 mt-1 text-primary">▸</div>
          <div>
            <strong className="text-foreground">Explore Web3 ideas</strong>
            <p className="text-sm mt-1">
              (smart contracts, dApps, Layer‑2 experiments)
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default RMCollab;
