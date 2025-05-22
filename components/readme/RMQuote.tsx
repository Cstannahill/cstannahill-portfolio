const RMQuote = () => {
  return (
    <div className="text-center py-8">
      <blockquote className="relative px-10">
        <div className="absolute top-0 left-0 text-4xl text-primary opacity-30">
          "
        </div>
        <em className="text-xl italic text-accent-light">
          Code boldly, refactor often, and never stop learning.
        </em>
        <div className="absolute bottom-0 right-0 text-4xl text-primary opacity-30">
          "
        </div>
      </blockquote>
    </div>
  );
};

export default RMQuote;
