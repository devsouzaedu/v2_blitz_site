import Link from "next/link";
import { Shirt, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t py-16">
      <div className="container grid gap-12 md:grid-cols-3 px-4">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo_blitz.png" 
              alt="Blitz Lavanderia" 
              width={160}
              height={50}
              className="object-contain bg-white p-3 rounded-xl shadow-md"
            />
          </div>
          <p className="text-white/90 max-w-xs text-center md:text-left">
            Serviços de lavanderia profissional com qualidade e rapidez. Atendemos roupas, uniformes, edredons e muito mais.
          </p>
          <div className="flex gap-5">
            <Link href="https://instagram.com" className="text-white hover:text-accent transition-colors bg-white/10 p-2 rounded-full">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://facebook.com" className="text-white hover:text-accent transition-colors bg-white/10 p-2 rounded-full">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
        
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-xl">Contato</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3 text-base text-white/90">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Rua Exemplo, 123 - Centro, Cidade - Estado</span>
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span>(11) 9999-9999</span>
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span>contato@blitzlavanderia.com.br</span>
            </li>
            <li className="flex items-start gap-3 text-base text-white/90">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Segunda a Sexta: 08h às 19h<br />Sábado: 08h às 13h</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-xl">Links Rápidos</h4>
          <nav className="grid gap-3">
            <Link href="/" className="text-base text-white/90 hover:text-white transition-colors">Home</Link>
            <Link href="/servicos" className="text-base text-white/90 hover:text-white transition-colors">Serviços</Link>
            <Link href="/sobre" className="text-base text-white/90 hover:text-white transition-colors">Sobre Nós</Link>
            <Link href="/contato" className="text-base text-white/90 hover:text-white transition-colors">Contato</Link>
          </nav>
        </div>
      </div>
      
      <div className="container mt-12 pt-8 border-t border-white/20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-white/90">
            &copy; {new Date().getFullYear()} Blitz Lavanderia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-sm text-white/90 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-sm text-white/90 hover:text-white transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 