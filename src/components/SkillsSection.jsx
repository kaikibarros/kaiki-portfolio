import { useState } from "react";
import { cn } from "@/lib/utils";
import html from "../../public/html.png"
import react from "../../public/react.png"
import js from "../../public/js.png"
import ts from "../../public/ts.png" 
 import next from "../../public/next.png"
import node from "../../public/node.png"
 import postman from "../../public/postman.png"
import git from "../../public/git.png"
import docker from "../../public/docker.png"
import figma from "../../public/figma.png"
import vscode from "../../public/vscode.png"  
import tailwind from "../../public/tailwind.png"
import java from "../../public/java.png"
import css from "../../public/css.png"


const skills = [
  // Frontend
  { name: "HTML", category: "frontend", image: html},
  { name: "CSS", category: "frontend", image: css},
  { name: "JavaScript",  category: "frontend", image: js },
  { name: "React", category: "frontend", image: react },
  { name: "TypeScript",  category: "frontend", image: ts },
  { name: "Tailwind CSS",  category: "frontend", image:  tailwind},
  { name: "Next.js",  category: "frontend", image: next },
  { name: "Java", category: "backend", image:  java},
  // Backend
  { name: "Node.js",  category: "backend", image: node},
  { name: "Postman",  category: "backend", image: postman },
  // Tools
  { name: "Git/GitHub",  category: "tools", image: git },
  { name: "Docker",  category: "tools", image: docker },
  { name: "Figma", category: "tools", image: figma },
  { name: "VS Code",  category: "tools", image: vscode },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tec<span className="text-primary">nologias</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover to-background flex flex-col items-center"
            >
               {skill.image && (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
              )}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
             
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                </span>
                  {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
