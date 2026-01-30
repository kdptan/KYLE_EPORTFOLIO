import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium opacity-0 animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in-delay-1">Kyle Daniel</span>
                <br />
                <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                  Tan
                </span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-3">
              I'm learning to build full stack applications and love turning ideas into functional websites. 
              Still figuring things out, but that's what makes it exciting.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative opacity-0 animate-fade-in-delay-2">
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-full border-2 border-primary/20 flex items-center justify-center p-8">
                <div className="text-center space-y-6 w-full">
                  <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                    <img
                      src="/profile.jpg"
                      alt="Kyle Daniel Tan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
