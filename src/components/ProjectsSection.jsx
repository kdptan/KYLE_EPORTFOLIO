import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "To-Do List App",
    description: "A task management application with CRUD functionality, featuring local storage persistence and a clean, intuitive interface.",
    image: "/projects/project1.jpg",
    tags: ["React", "JavaScript", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather application that fetches current conditions and forecasts using a weather API with location-based search.",
    image: "/projects/project2.jpg",
    tags: ["JavaScript", "API", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Hangman Game",
    description:
      "Interactive word-guessing game with random word generation, score tracking, and visual feedback for correct and incorrect guesses.",
    image: "/projects/project3.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    // Auto-scroll every 5 seconds
    const autoScroll = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    // Keyboard navigation
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
        clearInterval(autoScroll);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % projects.length);
        clearInterval(autoScroll);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      clearInterval(autoScroll);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const getTransform = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) {
      return "scale-100 rotate-0 opacity-100";
    } else if (diff === -1 || diff === 2) {
      return "scale-75 -rotate-12 opacity-60";
    } else if (diff === 1 || diff === -2) {
      return "scale-75 rotate-12 opacity-60";
    }
    return "scale-50 opacity-0";
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* 3D Carousel with Side Details */}
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Carousel on left */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="relative w-96 aspect-video perspective">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute w-full h-full transition-all duration-500 ease-out cursor-pointer transform ${getTransform(index)}`}
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: index === activeIndex ? 50 : 30 - Math.abs(index - activeIndex),
                    }}
                  >
                    <div className="group relative overflow-hidden rounded-lg shadow-2xl card-hover h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details on right */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Project {String(activeIndex + 1).padStart(2, '0')}
              </div>
              
              <h3 className="text-4xl font-bold">{projects[activeIndex].title}</h3>
              
              <div className="gradient-border p-6 bg-card/50 backdrop-blur">
                <p className="text-muted-foreground text-lg">
                  {projects[activeIndex].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[activeIndex].demoUrl}
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                  aria-label="View Demo"
                >
                  <ExternalLink size={20} className="group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={projects[activeIndex].githubUrl}
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                  aria-label="View Code"
                >
                  <Github size={20} className="group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Dots - Auto scrolling */}
          <div className="flex gap-3 justify-center mt-8">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">Auto-scrolling • Use ← → arrow keys to navigate</p>
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/kdptan"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
