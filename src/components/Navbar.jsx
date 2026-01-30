import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = navItems.map(item => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top navbar */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-center relative">
          <a
            className="text-2xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> KDT </span>
            </span>
          </a>

          {/* mobile nav toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 absolute right-4"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* mobile nav menu */}
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Side navigation indicators - desktop only */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6">
        {navItems.map((item, index) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={index}
              href={item.href}
              className="group relative flex items-center"
              aria-label={item.name}
            >
              {/* Dot indicator */}
              <div
                className={cn(
                  "w-3 h-3 rounded-full border-2 transition-all duration-300",
                  isActive
                    ? "bg-primary border-primary scale-125"
                    : "bg-transparent border-foreground/30 hover:border-primary hover:scale-110"
                )}
              />
              
              {/* Tooltip label */}
              <span
                className={cn(
                  "absolute right-6 px-3 py-1 rounded bg-background/90 backdrop-blur-sm border border-border",
                  "text-sm font-medium whitespace-nowrap transition-all duration-300",
                  "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0",
                  isActive ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
};
