const SectionDivider = () => {
  return (
    <div className="relative py-1">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-2 text-accent">•</span>
      </div>
    </div>
  );
};
export default SectionDivider;
