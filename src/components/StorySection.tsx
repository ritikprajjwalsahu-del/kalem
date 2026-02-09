import ruralSchool from "@/assets/rural-school.jpeg";
import kidsOutdoor from "@/assets/kids-outdoor.jpeg";

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-bold tracking-widest uppercase text-base md:text-lg text-center mb-3">The Problem</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto mb-16">
          A tale of two worlds — separated by access, not ability
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src={ruralSchool} alt="Children in rural government school" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-foreground">No desks. No screens. No exposure.</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the villages of Odisha, children sit on floors in crumbling classrooms. They study from worn textbooks
              under flickering fans. Most have never touched a computer, never browsed the internet, never imagined
              that the world beyond their village could also be theirs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These aren't children who lack intelligence — they lack opportunity. The gap isn't in their potential,
              it's in their exposure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-5">
            <h3 className="text-2xl font-bold text-foreground">Meanwhile, the world doesn't wait.</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI is writing code. Finance is going global. Technology is reshaping every industry.
              Urban students learn Python at 12, attend international webinars, and dream of startups.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But in rural India, students don't even know these worlds exist. The information barrier
              is the cruelest inequality — you can't aspire to what you've never seen.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={kidsOutdoor} alt="Rural school children" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
