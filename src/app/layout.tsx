import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const funnelSans = localFont({
  src: [
    {
      path: '../../public/fonts/Funnel_Sans/static/FunnelSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Funnel_Sans/static/FunnelSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Funnel_Sans/static/FunnelSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Funnel_Sans/static/FunnelSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Funnel_Sans/static/FunnelSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-funnel-sans',
})

export const metadata: Metadata = {
  title: "Blitz Lavanderia - Serviços de Lavanderia Profissional",
  description: "Serviços de lavanderia profissional com qualidade e rapidez. Atendemos roupas, uniformes, edredons e muito mais.",
  keywords: "lavanderia, serviços de lavanderia, lavagem de roupas, lavagem a seco, passar roupas",
  icons: {
    icon: [
      {
        url: '/logo_blitz_square.png',
        href: '/logo_blitz_square.png',
      }
    ],
    apple: '/logo_blitz_square.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${funnelSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-funnel-sans`}
      >
        {children}
      </body>
    </html>
  );
}
