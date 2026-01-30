import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 92, category: "frontend" },
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 87, category: "frontend" },
  { name: "Next.js", level: 78, category: "frontend" },

  // Backend
  { name: "Node.js", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 68, category: "backend" },
  { name: "Django", level: 73, category: "backend" },
  { name: "Supabase", level: 71, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 88, category: "tools" },
  { name: "Docker", level: 72, category: "tools" },
  { name: "Figma", level: 81, category: "tools" },
  { name: "VS Code", level: 93, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Group skills by category for the new layout
  const groupedSkills = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    tools: skills.filter(s => s.category === "tools"),
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

        {/* Three-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-8 bg-orange-400 rounded-full"></span>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="space-y-3">
              {groupedSkills.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 border border-orange-400/20 hover:border-orange-400 transition-all duration-300 card-hover"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-400 rounded-full transition-all duration-500"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
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
            <div className="space-y-3">
              {groupedSkills.backend.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 border border-orange-500/20 hover:border-orange-500 transition-all duration-300 card-hover"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full transition-all duration-500"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            <div className="space-y-3">
              {groupedSkills.tools.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 border border-orange-600/20 hover:border-orange-600 transition-all duration-300 card-hover"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-600 rounded-full transition-all duration-500"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
