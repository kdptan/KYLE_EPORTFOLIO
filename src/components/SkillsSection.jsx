import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaNode,
} from "react-icons/fa";
import { SiDart, SiTailwindcss, SiDjango } from "react-icons/si";

const skillIcons = {
  JavaScript: FaJs,
  Dart: SiDart,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  Python: FaPython,
  Java: FaJava,
  "Node.js": FaNode,
  Django: SiDjango,
};

const skills = [
  // Frontend Languages
  { name: "JavaScript", category: "frontend" },
  { name: "Dart", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },

  // Frontend Frameworks
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend Languages
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },

  // Backend Frameworks
  { name: "Node.js", category: "backend" },
  { name: "Django", category: "backend" },
];

export const SkillsSection = () => {
  // Group skills by category for the new layout
  const groupedSkills = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
  };

  const renderSkillIcon = (skillName) => {
    const IconComponent = skillIcons[skillName];
    return IconComponent ? <IconComponent className="w-12 h-12" /> : null;
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>

        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-8 bg-orange-400 rounded-full"></span>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {groupedSkills.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-orange-400/20 hover:border-orange-400 transition-all duration-300 card-hover flex flex-col items-center justify-center gap-3"
                >
                  <div className="text-orange-400">
                    {renderSkillIcon(skill.name)}
                  </div>
                  <span className="font-medium text-center text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {groupedSkills.backend.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-orange-500/20 hover:border-orange-500 transition-all duration-300 card-hover flex flex-col items-center justify-center gap-3"
                >
                  <div className="text-orange-500">
                    {renderSkillIcon(skill.name)}
                  </div>
                  <span className="font-medium text-center text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
