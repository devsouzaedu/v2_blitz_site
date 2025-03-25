"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Previne o scroll quando o menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <Image 
              src="/logo_blitz.png" 
              alt="Blitz Lavanderia" 
              width={150} 
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-all duration-300 hover:text-primary font-funnel-sans relative group",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 origin-left",
                pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}/>
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/contato">Agendar Serviço</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary-dark text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/contato">Contato</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary p-2 z-50 transition-all duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col h-full min-h-screen w-full">
          <div className="container py-10 space-y-8 flex flex-col items-center pt-20 flex-grow">
            <nav className="flex flex-col gap-6 w-full">
              {navItems.map((item, _) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-all duration-300 hover:text-primary font-funnel-sans py-3 border-b border-stone-100 text-center",
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 pt-6 w-full">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-medium py-6 h-auto transition-all duration-300">
                <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>Agendar Serviço</Link>
              </Button>
              <Button asChild className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-6 h-auto transition-all duration-300">
                <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
              </Button>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">
                Serviços de lavanderia profissional<br />com qualidade e rapidez
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 