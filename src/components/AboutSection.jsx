import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          So<span className="text-primary">bre </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Desenvolvedor Full-Stack & Apaixonado por Tecnologias
            </h3>

            <p className="text-muted-foreground">
              Especializado
              na criação de aplicações web responsivas, acessíveis e de alto desempenho,
              utilizando tecnologias modernas.
            </p>

            <p className="text-muted-foreground">
            Sou apaixonado por criar soluções elegantes para problemas complexos e estou constantemente aprendendo novas tecnologias e técnicas para me manter na vanguarda do cenário da web, que está em constante evolução!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
               Entre em contato
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">
                   Criação de sites e aplicativos web responsivos com frameworks modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Projeto de interfaces de usuário intuitivas e experiências de usuário perfeitas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-End & Inteligência Artificial</h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de APIs e sistemas robustos com Java + Spring Boot, além de aplicações de Machine Learning com Python para automação, análise de dados e soluções inteligentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
