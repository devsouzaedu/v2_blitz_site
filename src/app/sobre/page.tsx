import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Sobre | Blitz Lavanderia",
  description: "Conheça a história, missão e valores da Blitz Lavanderia.",
};

export default function SobrePage() {
  return (
    <div className="py-12">
      <div className="container space-y-16">
        {/* Seção Principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Sobre a Blitz Lavanderia</h1>
            <p className="text-lg text-muted-foreground">
              Fundada em 2010, a Blitz Lavanderia surgiu com o objetivo de oferecer serviços de alta qualidade no segmento de lavanderia, atendendo tanto o público residencial quanto empresarial.
            </p>
            <p className="text-lg text-muted-foreground">
              Com mais de uma década de experiência, nos tornamos referência no mercado, sempre investindo em tecnologia, treinamento de equipe e processos que garantem a satisfação total dos nossos clientes.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/laundry-workers.jpg"
              alt="Equipe Blitz Lavanderia"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 py-12 bg-stone-50 rounded-xl p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Missão</h2>
            <p className="text-muted-foreground">
              Proporcionar soluções em lavanderia que tragam praticidade e economia de tempo para nossos clientes, garantindo qualidade e cuidado com cada peça.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Visão</h2>
            <p className="text-muted-foreground">
              Ser reconhecida como a melhor lavanderia da região, expandindo nossa operação e mantendo a excelência no atendimento e nos serviços prestados.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Valores</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Compromisso com a qualidade</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Respeito ao cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Responsabilidade ambiental</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Inovação constante</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Desenvolvimento profissional</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nossa História */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Nossa História</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Uma trajetória de crescimento e evolução constante
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2010 - O início</h3>
                <p className="text-muted-foreground">
                  A Blitz Lavanderia começou como um pequeno empreendimento familiar, com apenas 2 máquinas e um compromisso com a qualidade. Nosso foco era atender o público residencial do bairro.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2013 - Expansão</h3>
                <p className="text-muted-foreground">
                  Com o aumento da demanda, ampliamos nossas instalações e adquirimos equipamentos mais modernos, permitindo atender empresas e ampliar nossa capacidade operacional.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2017 - Modernização</h3>
                <p className="text-muted-foreground">
                  Implementamos um sistema de gestão digital e iniciamos o serviço de coleta e entrega, aumentando nossa eficiência e melhorando ainda mais a experiência do cliente.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2020 até hoje</h3>
                <p className="text-muted-foreground">
                  Modernizamos completamente nossa operação, adotando práticas sustentáveis e expandindo nossos serviços para atender diferentes segmentos, como hotelaria e saúde.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipe */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Profissionais treinados e dedicados a oferecer o melhor serviço
            </p>
          </div>
          
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Contamos com uma equipe de 15 profissionais especializados, que passam por treinamentos constantes para garantir a excelência no tratamento de todos os tipos de tecidos e peças. Nosso compromisso é com a satisfação do cliente e a qualidade do serviço prestado.
          </p>
        </div>
      </div>
    </div>
  );
} 