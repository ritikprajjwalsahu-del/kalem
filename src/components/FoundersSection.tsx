const founders = [
  {
    name: "Prahallad Chandra Sahu",
    credentials: "IIT Bombay · Ex-Civil Servant",
    bio: "With a distinguished career spanning elite education and public service, Prahallad brings strategic vision and deep understanding of governance to bridge systemic gaps in rural education.",
  },
  {
    name: "Ritik Prajjwal Sahu",
    credentials: "NIT Rourkela '21 · ISB '25",
    bio: "An engineer and business leader driven by his roots in Odisha, Ritik channels his tech and management expertise to design scalable solutions that bring digital literacy to the underserved.",
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-semibold tracking-widest uppercase text-sm text-center mb-3">The Founders</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto mb-16">
          Built by those who lived the gap
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f) => (
            <div key={f.name} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-2xl font-bold text-primary">
                {f.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{f.name}</h3>
              <p className="text-secondary font-semibold text-sm mb-4">{f.credentials}</p>
              <p className="text-muted-foreground leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
