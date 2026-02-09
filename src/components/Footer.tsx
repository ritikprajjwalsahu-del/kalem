import kalemLogo from "@/assets/kalem-logo.jpeg";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={kalemLogo} alt="Kalem Foundation" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-bold text-background">Kalem Foundation</p>
            <p className="text-xs text-background/60">Kalinga Empowerment & Mentorship</p>
          </div>
        </div>
        <p className="text-background/50 text-sm">© 2026 Kalem Foundation. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
