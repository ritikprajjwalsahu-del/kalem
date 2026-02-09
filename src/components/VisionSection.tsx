import { Monitor, Users, Globe, Lightbulb } from "lucide-react";

const pillars = [
  { icon: Monitor, title: "Digital Centers", desc: "Setting up PC labs and interactive learning spaces in rural areas so students can experience technology firsthand." },
  { icon: Users, title: "Mentorship", desc: "Connecting students with mentors from IITs, NITs, and global institutions who guide them toward their potential." },
  { icon: Globe, title: "Global Exposure", desc: "Bringing the world to the village — from AI workshops to career webinars — breaking the information barrier." },
  { icon: Lightbulb, title: "Empowerment", desc: "Nurturing curiosity and ambition so that every child dares to dream beyond their circumstances." },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-semibold tracking-widest uppercase text-sm text-center mb-3">Our Vision</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto mb-6">
          Bridging the gap between knowledge and access
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          We believe every child deserves to see the world beyond their village walls. Kalem Foundation is building
          the bridges that connect rural talent to global opportunity.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
