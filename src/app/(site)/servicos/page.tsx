import { Shirt, Tally5, Clock, MapPin, BadgeAlert, Sofa, Stethoscope } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Serviços | Blitz Lavanderia",
  description: "Conheça todos os serviços oferecidos pela Blitz Lavanderia.",
};

const servicos = [
  {
    icon: <Shirt className="h-8 w-8 text-primary" />,
    title: "Lavagem de Roupas",
    description: "Lavagem cuidadosa para suas roupas do dia a dia, com produtos de alta qualidade.",
    preco: "A partir de R$ 20,00/kg",
  },
  {
    icon: <Shirt className="h-8 w-8 text-primary rotate-45" />,
    title: "Lavagem de Uniformes",
    description: "Uniformes impecáveis, limpos e bem passados para seu ambiente de trabalho.",
    preco: "A partir de R$ 25,00/kg",
  },
  {
    icon: <Sofa className="h-8 w-8 text-primary" />,
    title: "Lavagem de Edredons",
    description: "Limpeza profunda de edredons, cobertores e mantas com técnicas apropriadas.",
    preco: "A partir de R$ 60,00/unidade",
  },
  {
    icon: <BadgeAlert className="h-8 w-8 text-primary" />,
    title: "Lavagem a Seco",
    description: "Serviço especializado para peças delicadas que não podem ser lavadas com água.",
    preco: "A partir de R$ 30,00/peça",
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "Roupas Hospitalares",
    description: "Lavagem com produtos sanitizantes para uniformes e jalecos médicos.",
    preco: "A partir de R$ 35,00/kg",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Serviço Express",
    description: "Entrega no mesmo dia para pedidos realizados até às 10h da manhã.",
    preco: "Adicional de R$ 15,00",
  },
  {
    icon: <Tally5 className="h-8 w-8 text-primary" />,
    title: "Pacote Semanal",
    description: "Plano semanal para lavagem de roupas com preço especial para grandes volumes.",
    preco: "A partir de R$ 150,00/semana",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Coleta e Entrega",
    description: "Retirada e entrega das suas roupas diretamente em sua casa ou escritório.",
    preco: "Grátis (acima de R$ 100,00)",
  },
];

export default function ServicosPage() {
  return (
    <div className="py-12">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todos os serviços oferecidos pela Blitz Lavanderia para cuidar das suas roupas com qualidade e atenção aos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <Card key={index} className="border-none shadow-md h-full">
              <CardHeader>
                <div className="mb-2">{servico.icon}</div>
                <CardTitle>{servico.title}</CardTitle>
                <CardDescription>{servico.preco}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{servico.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-stone-50 p-8 rounded-xl mt-12">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Informações Adicionais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Para entender melhor nosso processo de trabalho e garantir a melhor experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Horários de Funcionamento</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Segunda a Sexta: 8h às 19h</li>
                <li>Sábados: 8h às 13h</li>
                <li>Domingos e Feriados: Fechado</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Prazos de Entrega</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Serviço Normal: 48 horas</li>
                <li>Serviço Express: No mesmo dia (para pedidos até 10h)</li>
                <li>Edredons e Cobertores: 72 horas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 