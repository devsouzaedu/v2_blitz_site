import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shirt, Badge, Clock, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const servicosDestaque = [
  {
    icon: <Shirt className="h-8 w-8 text-primary" />,
    title: "Lavagem de Roupas",
    description: "Lavagem cuidadosa para suas roupas do dia a dia, com produtos de alta qualidade.",
    image: "/images/service-1.jpg"
  },
  {
    icon: <Badge className="h-8 w-8 text-primary" />,
    title: "Lavagem de Uniformes",
    description: "Uniformes impecáveis, limpos e bem passados para seu ambiente de trabalho.",
    image: "/images/service-2.jpg"
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Serviço Express",
    description: "Entrega no mesmo dia para pedidos realizados até às 10h da manhã.",
    image: "/images/service-3.jpg"
  },
];

const depoimentos = [
  {
    nome: "Maria Silva",
    texto: "Serviço de excelente qualidade! Sempre entregam no prazo e as roupas voltam impecáveis.",
    profissao: "Médica",
  },
  {
    nome: "João Oliveira",
    texto: "Uso há mais de 5 anos e nunca tive problemas. Preço justo e atendimento sensacional!",
    profissao: "Empresário",
  },
  {
    nome: "Ana Costa",
    texto: "A melhor lavanderia da cidade! Cuidam das minhas roupas como se fossem deles.",
    profissao: "Advogada",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-28 md:py-40 px-4 sm:px-6 overflow-hidden">
        {/* Imagem de fundo com opacidade muito reduzida */}
        <div className="absolute inset-0 z-[1]">
          <Image 
            src="/blitz_lavanderia_imagens_avulsas (9).jpg" 
            alt="Fundo Blitz Lavanderia" 
            fill 
            className="object-cover opacity-15"
            priority
          />
        </div>
        
        {/* Base azul escura sólida */}
        <div className="absolute inset-0 bg-[#005d93] z-[2]"></div>
        
        {/* Overlay azul forte adicional */}
        <div className="absolute inset-0 bg-primary/90 z-[3]"></div>
        
        {/* Gradiente adicional para mais profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#004a75] to-[#006daf] opacity-80 z-[4]"></div>
        
        {/* Conteúdo */}
        <div className="container grid gap-12 md:gap-16 md:grid-cols-2 items-center relative z-[10]">
          <div className="space-y-8 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Sua roupa limpa e cuidada com <span className="text-accent">rapidez</span> e <span className="text-accent">qualidade</span>
            </h1>
            <p className="text-xl text-white/90 max-w-md mx-auto md:mx-0 md:pr-8">
              Deixe a Blitz Lavanderia cuidar das suas roupas enquanto você aproveita o seu tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-6">
              <Button asChild size="lg" className="bg-accent hover:bg-amber-400 text-black font-semibold shadow-lg animate-scale-in animate-delay-200 transition-all duration-300 transform hover:scale-105">
                <Link href="/contato">Agendar Serviço</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white border-2 text-white bg-transparent hover:bg-white/20 animate-scale-in animate-delay-300 transition-all duration-300 transform hover:scale-105">
                <Link href="/servicos">Ver Serviços</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-slide-right mx-auto w-full max-w-[550px] border-4 border-white/20">
            {/* Overlay azul para a imagem lateral - mais escuro */}
            <div className="absolute inset-0 bg-[#005d93]/70 z-10"></div>
            <Image
              src="/blitz_lavanderia_imagens_avulsas (9).jpg"
              alt="Blitz Lavanderia"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="container space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Conheça os serviços mais populares da Blitz Lavanderia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {servicosDestaque.map((servico, index) => (
              <Card key={index} className={`border border-stone-100 shadow-md hover:shadow-xl transition-all duration-300 card-hover overflow-hidden animate-fade-in animate-delay-${(index + 1) * 100} rounded-2xl transform hover:-translate-y-2`}>
                <div className="relative h-56 md:h-64 w-full">
                  <Image
                    src={servico.image}
                    alt={servico.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <CardHeader className="bg-white border-t border-stone-100 pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">{servico.icon}</div>
                    <CardTitle className="text-primary">{servico.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">{servico.description}</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center py-5 bg-stone-50">
                  <Button asChild variant="default" className="bg-primary text-white hover:bg-primary-dark gap-2 transition-all duration-300 transform hover:scale-105">
                    <Link href="/servicos">
                      Saiba mais
                      <span aria-hidden="true">→</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center animate-fade-in animate-delay-500 mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 h-auto transition-all duration-300 transform hover:scale-105">
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-primary/90 px-4 sm:px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95 z-[-1]"></div>
        <div className="container">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Por que escolher a Blitz?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto px-4">
              Conheça nossos diferenciais e por que somos a escolha certa para cuidar das suas roupas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="flex gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-left transform hover:translate-x-2">
                <CheckCircle className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Profissionais Experientes</h3>
                  <p className="text-white/80">Equipe treinada para cuidar das suas peças com atenção especial.</p>
                </div>
              </div>
              
              <div className="flex gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-left animate-delay-100 transform hover:translate-x-2">
                <CheckCircle className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Produtos Premium</h3>
                  <p className="text-white/80">Utilizamos produtos de alta qualidade que preservam as fibras e as cores das roupas.</p>
                </div>
              </div>
              
              <div className="flex gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-left animate-delay-200 transform hover:translate-x-2">
                <CheckCircle className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Prazo de Entrega</h3>
                  <p className="text-white/80">Cumprimos rigorosamente os prazos estabelecidos, com opção de serviço express.</p>
                </div>
              </div>
              
              <div className="flex gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-left animate-delay-300 transform hover:translate-x-2">
                <CheckCircle className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Entrega em Domicílio</h3>
                  <p className="text-white/80">Comodidade de receber suas roupas limpas e passadas no conforto da sua casa.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2 animate-slide-right mx-auto w-full max-w-[550px] border-4 border-white/20">
              <Image
                src="/images/workers.jpg"
                alt="Profissionais da Blitz Lavanderia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="container space-y-14">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">O que nossos clientes dizem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Veja os depoimentos de quem confia na Blitz Lavanderia
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {depoimentos.map((depoimento, index) => (
                <CarouselItem key={index}>
                  <Card className="border border-stone-100 shadow-lg bg-stone-50/50 backdrop-blur-sm h-full py-6 rounded-2xl transform transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-8">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl italic text-gray-700">&quot;{depoimento.texto}&quot;</p>
                        <footer className="mt-6">
                          <p className="font-semibold text-primary text-lg">{depoimento.nome}</p>
                          <p className="text-sm text-muted-foreground">{depoimento.profissao}</p>
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:left-0 bg-white text-primary border-primary shadow-md focus:ring-primary transition-transform duration-300 hover:scale-110" />
            <CarouselNext className="-right-4 sm:right-0 bg-white text-primary border-primary shadow-md focus:ring-primary transition-transform duration-300 hover:scale-110" />
          </Carousel>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/blitz_lavanderia_imagens_avulsas (3).jpg')] bg-cover bg-center opacity-15"></div>
        <div className="container relative z-10 text-center space-y-8 animate-fade-in px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para experimentar nossos serviços?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Entre em contato hoje mesmo e descubra como podemos facilitar sua vida com nossos serviços de lavanderia.
          </p>
          <div className="flex gap-6 flex-col sm:flex-row justify-center mt-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-md text-base px-8 py-6 h-auto animate-scale-in animate-delay-100 transition-all duration-300 transform hover:scale-105">
              <Link href="/contato">Agendar Coleta</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white border-2 text-white bg-transparent hover:bg-white/20 font-medium text-base px-8 py-6 h-auto animate-scale-in animate-delay-200 transition-all duration-300 transform hover:scale-105">
              <Link href="/servicos">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 