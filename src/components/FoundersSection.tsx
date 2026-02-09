const founders = [
  {
    name: "Prahallad Chandra Sahu",
    credentials: "IIT Bombay · IRTS (Indian Railway Traffic Service)",
    bio: "Hailing from a very small village in Sundargarh district, Prahallad's journey is a testament to the power of exposure and education. Despite being illiterate, his father ensured Prahallad received the best opportunities. He went on to graduate from IIT Bombay and cracked the UPSC Civil Services Examination in both 1992 and 1993, joining the prestigious IRTS. His lived experience drives Kalem's mission to bring the same transformative exposure to rural children.",
  },
  {
    name: "Ritik Prajjwal Sahu",
    credentials: "NIT Rourkela '21 · ISB '25 · Founder, WhySchool",
    bio: "Growing up, Ritik attended top schools and tier-1 institutes, but he observed a stark distortion between formal education and the skills truly needed in the real world. This realization led him to found WhySchool, bridging that gap. He firmly believes that access to quality education is essential for our nation to build value and for all of us to create a beautiful world together.",
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-bold tracking-widest uppercase text-base md:text-lg text-center mb-3">The Founders</p>
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
