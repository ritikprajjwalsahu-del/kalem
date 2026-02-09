import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ConnectSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="connect" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-semibold tracking-widest uppercase text-sm text-center mb-3">Get Involved</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto mb-6">
          Be part of the change
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Whether you want to volunteer, donate, or simply connect — every effort counts. Reach out to us.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                <p className="text-muted-foreground text-sm">contact@kalemfoundation.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Odisha, India</p>
              </div>
            </div>
            <div className="rounded-2xl bg-muted p-8 border border-border">
              <h4 className="font-bold text-foreground text-lg mb-3">💡 How you can help</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• <strong className="text-foreground">Donate</strong> — Fund a PC for a rural learning center</li>
                <li>• <strong className="text-foreground">Mentor</strong> — Share your skills with students virtually</li>
                <li>• <strong className="text-foreground">Volunteer</strong> — Join our on-ground initiatives in Odisha</li>
                <li>• <strong className="text-foreground">Spread the word</strong> — Share our story on social media</li>
              </ul>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-muted rounded-2xl p-12 text-center border border-border">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="How would you like to get involved?"
                  />
                </div>
                <button type="submit" className="w-full rounded-xl bg-primary px-6 py-3.5 text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
