import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Diogo Defante",
    description: "O Porfolio do Diogo Defante apresenta sua trajetória no humor, destacando seus projetos, vídeos e conquistas.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://projeto-diogo-defante.vercel.app/",
    githubUrl: "https://github.com/kaikibarros/Projeto-Diogo-Defante",
  },
  {
    id: 2,
    title: "Safex - SQL Injection ",
    description:
      "Projeto de segurança cibernética focado em detecção e mitigação de vulnerabilidades de SQL Injection",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Python", "Docker"],
    demoUrl: "https://safex-eight.vercel.app/",
    githubUrl: "#https://github.com/BidWeb-Residence/FrontEnd-Residence", //Mudar depois para projeto pessoal
  },
  {
    id: 3,
    title: "Plataforma Catalixo",
    description:
      "Aplicação que utiliza IA e Visão Computacional para identificar resíduos recicláveis a partir de imagens.",
    image: "/projects/project3.png",
    tags: ["Python", "JavaScript", "Docker"],
    demoUrl: "https://catalixo.vercel.app/",
    githubUrl: "https://github.com/kaikibarros/Catalixo",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
         Projetos em <span className="text-primary"> Destaque</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Aqui estão alguns dos meus projetos recentes. Cada projeto foi cuidadosamente elaborado com atenção aos detalhes, desempenho e experiência do usuário.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/kaikibarros"
          >
            Veja mais <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
