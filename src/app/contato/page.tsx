"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  servico: string;
};

export default function ContatoPage() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      servico: "",
    },
  });

  function onSubmit(data: FormValues) {
    setEnviando(true);
    
    // Simulando envio
    setTimeout(() => {
      console.log("Dados enviados:", data);
      setEnviando(false);
      setEnviado(true);
      form.reset();
      
      // Resetar a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setEnviado(false);
      }, 5000);
    }, 1500);
  }

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos à disposição para atender suas necessidades. Entre em contato conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
            
            {enviado ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                <p className="font-medium">Mensagem enviada com sucesso!</p>
                <p className="text-sm">Entraremos em contato em breve.</p>
              </div>
            ) : null}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="servico"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serviço desejado</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        >
                          <option value="">Selecione um serviço</option>
                          <option value="lavagem-roupas">Lavagem de Roupas</option>
                          <option value="lavagem-uniformes">Lavagem de Uniformes</option>
                          <option value="lavagem-edredons">Lavagem de Edredons</option>
                          <option value="lavagem-seco">Lavagem a Seco</option>
                          <option value="express">Serviço Express</option>
                          <option value="outro">Outro</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva sua necessidade ou dúvida" 
                          rows={5}
                          {...field} 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={enviando}>
                  {enviando ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-muted-foreground">Rua Exemplo, 123 - Centro<br />Cidade - Estado, CEP 00000-000</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-muted-foreground">(11) 9999-9999</p>
                    <p className="text-muted-foreground">(11) 9999-8888 (WhatsApp)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p className="text-muted-foreground">contato@blitzlavanderia.com.br</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 19h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 13h</p>
                    <p className="text-muted-foreground">Domingo e Feriados: Fechado</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Agendamento de Coleta e Entrega</h3>
              <p className="text-muted-foreground mb-4">
                Oferecemos serviço de coleta e entrega para sua comodidade. Agende pelo telefone ou WhatsApp, ou preencha o formulário ao lado informando o serviço desejado.
              </p>
              <p className="text-sm text-muted-foreground">
                * Coleta e entrega grátis para pedidos acima de R$ 100,00 dentro da área de cobertura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 