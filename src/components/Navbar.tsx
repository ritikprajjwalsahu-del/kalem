import { useState } from "react";
import { Menu, X } from "lucide-react";
import kalemLogo from "@/assets/kalem-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Our Story", href: "#story" },
    { label: "Vision", href: "#vision" },
    { label: "Impact", href: "#impact" },
    { label: "Founders", href: "#founders" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={kalemLogo} alt="Kalem Foundation" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-lg font-bold text-foreground">Kalem Foundation</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#connect" className="rounded-lg bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition-opacity">
            Support Us
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="#connect" onClick={() => setOpen(false)} className="block rounded-lg bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground text-center">
            Support Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
