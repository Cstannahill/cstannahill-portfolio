import Image from "next/image";
const RMGithubMetrics = () => {
  return (
    <section className="text-center">
      <div className="rounded-lg overflow-hidden inline-block border border-accent/20 p-4 bg-secondary/20 shadow-lg shadow-accent/5">
        <h2 className="text-2xl font-bold text-center mb-4 relative inline-block">
          <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
            GitHub Activity
          </span>
          <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent"></span>
        </h2>
        <Image
          src="/images/metrics/github-metrics.svg"
          alt="GitHub Metrics"
          width={800}
          height={230}
          className="mx-auto rounded-md"
        />
      </div>
    </section>
  );
};

export default RMGithubMetrics;
