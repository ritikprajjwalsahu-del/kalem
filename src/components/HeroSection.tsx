import ruralClassroom from "@/assets/rural-classroom.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={ruralClassroom} alt="Rural classroom in Odisha" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
          Kalinga Empowerment & Mentorship
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6">
          The world is racing ahead.{" "}
          <span className="text-secondary">They haven't even seen a laptop.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          While AI, finance, and technology reshape civilization, millions of children in rural Odisha
          remain cut off from the digital world. We're here to change that.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#story" className="rounded-xl bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground hover:opacity-90 transition-opacity shadow-lg">
            Read Our Story
          </a>
          <a href="#connect" className="rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            Join the Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
