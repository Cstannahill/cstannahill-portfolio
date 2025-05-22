const RMIntroduction = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 relative">
        <span>👋 </span>
        <span className="bg-gradient-to-r from-primary via-accent-light to-accent bg-clip-text text-transparent">
          Hi, I'm Christian — Full‑Stack Developer & Relentless Problem‑Solver
        </span>
        <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-accent-light/70 to-transparent"></span>
      </h1>
      <p className="text-lg text-muted-foreground">
        Illinois-based software engineer with a passion for building practical,
        well‑designed solutions that push me to learn something new every day.
        <br />I thrive on <strong>TypeScript</strong>,{" "}
        <strong>React/Next.js</strong>, and <strong>.NET</strong>, but I'm
        equally at home experimenting with <strong>AI</strong>,{" "}
        <strong>DevOps</strong>, and <strong>blockchain</strong>.
        <br />
        My goal: turn ideas into polished products while continuously expanding
        my skill set.
      </p>
    </section>
  );
};

export default RMIntroduction;
