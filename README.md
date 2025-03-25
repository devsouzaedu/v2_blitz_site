# Blitz Lavanderia - Site Institucional

Site moderno desenvolvido com Next.js 15 e App Router para a Blitz Lavanderia, oferecendo uma experiência rápida e responsiva para os clientes.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router para renderização de páginas
- **TypeScript**: Tipagem estática para código mais seguro
- **Tailwind CSS**: Estilização rápida e responsiva
- **Shadcn/UI**: Componentes UI reutilizáveis e customizáveis
- **Lucide Icons**: Conjunto de ícones modernos e elegantes

## Estrutura do Projeto

```
/src
  /app
    /(site)       # Grupo de rotas do site principal
      /servicos   # Página de serviços
      /sobre      # Página institucional
      /contato    # Página de contato
      /page.tsx   # Página inicial
      /layout.tsx # Layout compartilhado do site
  /components
    /layout       # Componentes de layout (header, footer)
    /ui           # Componentes UI reutilizáveis
  /lib
    /utils.ts     # Funções utilitárias
```

## Páginas

- **Página Inicial**: Apresentação da empresa, serviços em destaque, diferenciais e depoimentos
- **Serviços**: Detalhamento dos serviços oferecidos com preços
- **Sobre**: História e valores da empresa
- **Contato**: Formulário de contato e informações para agendamento

## Como executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:3000](http://localhost:3000) no navegador

## Produção

Para gerar uma build de produção:

```bash
npm run build
npm start
```

## Imagens

Adicione as imagens do site no diretório `/public/images/` seguindo a nomenclatura:

- `/public/images/hero-laundry.jpg` - Imagem principal da página inicial
- `/public/images/laundry-workers.jpg` - Imagem da equipe na seção de diferenciais

## Licença

Este projeto está sob a licença MIT.
