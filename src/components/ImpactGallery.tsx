import sessionClassroom from "@/assets/session-classroom.jpeg";
import communityEvent from "@/assets/community-event.jpeg";
import seminar from "@/assets/seminar.jpeg";
import christmasEvent from "@/assets/christmas-event.jpeg";
import girlsWorkshop from "@/assets/girls-workshop.jpeg";

const images = [
  { src: sessionClassroom, alt: "Interactive classroom session", caption: "Mentorship sessions at partner institutions" },
  { src: girlsWorkshop, alt: "Girls workshop", caption: "Empowering girls through creative workshops" },
  { src: communityEvent, alt: "Community engagement", caption: "Community events that inspire dreams" },
  { src: seminar, alt: "Seminar session", caption: "College seminars sparking dialogue on change" },
  { src: christmasEvent, alt: "Christmas celebration", caption: "Festive learning events for rural children" },
];

const ImpactGallery = () => {
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-bold tracking-widest uppercase text-base md:text-lg text-center mb-3">Our Impact</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto mb-16">
          Every photo tells a story of hope
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
              <img src={img.src} alt={img.alt} className={`w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? "object-top" : ""}`} />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-end">
                <p className="text-primary-foreground font-medium p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGallery;
