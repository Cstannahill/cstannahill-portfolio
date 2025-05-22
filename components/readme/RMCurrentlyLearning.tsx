const RMCurrentlyLearning = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 relative inline-block">
        <span>🧠 </span>
        {/* Gradient Text */}
        <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
          Currently Learning / Exploring
        </span>
        <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent"></span>
      </h2>
      <div className="p-4 rounded-lg bg-secondary/20 border border-accent/10 shadow-inner">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=docker&logoColor=white"
              height="25"
              alt="Docker"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Blazor-512BD4?style=plastic&logo=blazor&logoColor=white"
              height="25"
              alt="Blazor"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/C++-00599C?style=plastic&logo=c%2B%2B&logoColor=white"
              height="25"
              alt="C++"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Blockchain-121212?style=plastic&logo=bitcoin&logoColor=orange"
              height="25"
              alt="Blockchain"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Ollama-ffffff?style=plastic&logo=ollama&logoColor=000000"
              height="25"
              alt="Ollama"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/Anthropic-1A1A1A?style=plastic&logo=anthropic&logoColor=white"
              height="25"
              alt="Anthropic"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/LangChain-D4FF00?style=plastic&logo=langchain&logoColor=black"
              height="25"
              alt="LangChain"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform">
            <img
              src="https://img.shields.io/badge/LangGraph-000000?style=plastic&logo=langgraph&logoColor=white"
              height="25"
              alt="LangGraph"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RMCurrentlyLearning;
