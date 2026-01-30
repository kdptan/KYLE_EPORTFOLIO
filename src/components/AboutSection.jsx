import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Vertical layout with content on top */}
        <div className="space-y-12">
          {/* Text content - centered */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Striving Computer Science Student
            </h3>

            <p className="text-muted-foreground text-lg">
              Currently diving deep into full stack development, learning everything from building responsive frontends 
              with React to creating backend APIs and databases. Every project is a new challenge that pushes me to grow.
            </p>

            <p className="text-muted-foreground text-lg">
              I dream of becoming a full stack developer and I'm eager to learn whatever it takes to get there. 
              Whether it's debugging at 2 AM or exploring new frameworks, I'm all in on this journey.
            </p>
          </div>

          {/* Cards - horizontal row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-border p-8 card-hover text-center">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-xl mb-3">Web Development</h4>
              <p className="text-muted-foreground">
                Creating responsive websites and web applications with
                modern frameworks.
              </p>
            </div>

            <div className="gradient-border p-8 card-hover text-center">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-xl mb-3">UI/UX Design</h4>
              <p className="text-muted-foreground">
                Designing intuitive user interfaces and seamless user
                experiences.
              </p>
            </div>

            <div className="gradient-border p-8 card-hover text-center">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-xl mb-3">Project Management</h4>
              <p className="text-muted-foreground">
                Leading projects from conception to completion with agile
                methodologies.
              </p>
            </div>
          </div>

          {/* CTA Buttons - centered below */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href=""
              className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
