import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
const RMHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-4xl font-bold text-center flex-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        GitHub README
      </h1>
      <Button
        variant="outline"
        asChild
        className="border-accent/30 hover:border-accent-light hover:text-accent-light"
      >
        <a
          href="https://github.com/cstannahill"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </Button>
    </div>
  );
};
export default RMHeader;
