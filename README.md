# MIDAS Locações & Serviços Ltda - Website Institucional

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

Site institucional moderno e otimizado para a MIDAS Locações & Serviços Ltda, especializada em manutenção industrial e serviços elétricos.

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+ ou superior
- pnpm (recomendado) ou npm

### Instalação

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd projeto-frontend-react-ANYGEN
   ```

2. **Instale as dependências**:
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` e configure as variáveis necessárias.

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

5. **Acesse no navegador**:
   O terminal mostrará o link local (geralmente `http://localhost:5173`).

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Obrigatórias
VITE_WHATSAPP_NUMBER=5585988154220
VITE_CONTACT_EMAIL=contato@midas.com.br

# Opcionais
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Nota**: Todas as variáveis de ambiente devem começar com `VITE_` para serem acessíveis no código.

---

## 🛠 Tecnologias Utilizadas

### Core
- **React 19** - Biblioteca UI
- **TypeScript 5.3** - Tipagem estática
- **Vite 5.1** - Build tool e dev server

### Estilização
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **Shadcn/ui** - Componentes UI acessíveis
- **Lucide React** - Ícones

### Roteamento & Forms
- **React Router Dom v6** - Navegação SPA
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### HTTP & Utilities
- **Axios** - Cliente HTTP
- **Framer Motion** - Animações
- **clsx + tailwind-merge** - Utilitários CSS

---

## 📂 Estrutura do Projeto

```
projeto-frontend-react-ANYGEN/
├── public/              # Arquivos estáticos
│   ├── robots.txt       # SEO - instruções para crawlers
│   └── sitemap.xml      # SEO - mapa do site
├── src/
│   ├── assets/          # Imagens e recursos
│   ├── components/      # Componentes reutilizáveis
│   │   ├── ui/          # Componentes base (Shadcn)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Servicos.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── Emergencia.tsx
│   │   ├── Contato.tsx
│   │   ├── Blog.tsx
│   │   └── NotFound.tsx
│   ├── data/            # Dados estruturados
│   │   └── services.ts
│   ├── lib/             # Configurações e utilitários
│   │   ├── axios.ts     # Cliente HTTP configurado
│   │   └── utils.ts     # Funções auxiliares
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
├── .env.example         # Exemplo de variáveis de ambiente
├── DEPLOYMENT.md        # Guia de deployment
└── README.md            # Este arquivo
```

---

## 🎨 Personalização

### Cores

As cores da marca estão configuradas em `tailwind.config.js` e `src/index.css`:

- **Primary (Azul Industrial)**: `#003366`
- **Secondary (Dourado)**: `#D97706`
- **Dark**: `#1E293B`

### Tipografia

- **Headings**: Barlow (Google Fonts)
- **Body**: Inter (Google Fonts)

### Dados dos Serviços

Edite o arquivo `src/data/services.ts` para modificar os serviços oferecidos.

---

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Build
pnpm build        # Cria build de produção em /dist
pnpm preview      # Preview do build de produção

# Qualidade de Código
pnpm lint         # Executa ESLint
```

---

## 🚀 Deploy

### Build de Produção

```bash
pnpm build
```

O build será gerado na pasta `dist/`.

### Plataformas Recomendadas

- **Netlify** (Recomendado)
- **Vercel**
- **GitHub Pages**

Para instruções detalhadas, consulte [DEPLOYMENT.md](./DEPLOYMENT.md).

### Configuração Importante

Para que as rotas funcionem corretamente em produção, adicione:

**Netlify** - Criar `public/_redirects`:
```
/*    /index.html   200
```

**Vercel** - Criar `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## ✨ Funcionalidades

- ✅ **Responsivo** - Mobile-first design
- ✅ **SEO Otimizado** - Meta tags, sitemap, robots.txt
- ✅ **Acessível** - ARIA labels, navegação por teclado
- ✅ **Performance** - Lazy loading de rotas, otimização de imagens
- ✅ **Formulário Validado** - React Hook Form + Zod
- ✅ **Integração WhatsApp** - Botão flutuante e links diretos
- ✅ **Dark Mode Ready** - Suporte a tema escuro (configurável)

---

## 🔍 Melhorias Implementadas

### Versão Atual

- ✅ Correção de caminhos de imagens para produção
- ✅ Validação completa de formulários com Zod
- ✅ Integração com Formspree para envio de emails
- ✅ Lazy loading de todas as rotas
- ✅ Configuração de variáveis de ambiente
- ✅ Axios configurado com interceptors
- ✅ ESLint atualizado para flat config
- ✅ SEO: robots.txt e sitemap.xml
- ✅ Documentação de deployment

---

## 🐛 Troubleshooting

### Imagens não carregam

Certifique-se de que as imagens estão sendo importadas corretamente:

```tsx
import imagemExemplo from '@/assets/imagem.jpg'
<img src={imagemExemplo} alt="Descrição" />
```

### Formulário não envia

1. Verifique se `VITE_FORMSPREE_ENDPOINT` está configurado no `.env`
2. Certifique-se de que o endpoint do Formspree está ativo
3. Verifique o console do navegador para erros

### Build falha

```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

---

## 📄 Licença

Este projeto é propriedade da MIDAS Locações & Serviços Ltda.

---

## 📞 Contato

- **Website**: [Em breve]
- **WhatsApp**: (85) 98815-4220
- **Email**: contato@midas.com.br
- **Localização**: Rio Paranaíba - MG

---

Desenvolvido com foco em **performance**, **acessibilidade** e **conversão B2B**.
