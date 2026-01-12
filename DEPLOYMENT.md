# Guia de Deployment - MIDAS Locações & Serviços

Este guia fornece instruções detalhadas para fazer o deploy do projeto em diferentes plataformas.

## 📋 Pré-requisitos

Antes de fazer o deployment, certifique-se de:

1. ✅ Todas as variáveis de ambiente estão configuradas
2. ✅ O build de produção está funcionando localmente
3. ✅ Todos os testes passaram (se houver)
4. ✅ As imagens e assets estão otimizados

## 🔧 Configuração de Variáveis de Ambiente

### Variáveis Obrigatórias

```env
VITE_WHATSAPP_NUMBER=5585988154220
VITE_CONTACT_EMAIL=contato@midas.com.br
```

### Variáveis Opcionais

```env
# Formspree (para formulário de contato)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Google Analytics (opcional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🚀 Deploy na Netlify

### Método 1: Deploy via Git (Recomendado)

1. **Conecte seu repositório**:
   - Acesse [Netlify](https://app.netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Conecte com GitHub/GitLab/Bitbucket
   - Selecione o repositório

2. **Configure o build**:
   ```
   Build command: pnpm build
   Publish directory: dist
   ```

3. **Adicione variáveis de ambiente**:
   - Vá em "Site settings" → "Environment variables"
   - Adicione todas as variáveis do `.env.example`

4. **Deploy**:
   - Clique em "Deploy site"
   - O Netlify fará deploy automático a cada push

### Método 2: Deploy Manual

```bash
# Instalar Netlify CLI
pnpm add -g netlify-cli

# Login
netlify login

# Build do projeto
pnpm build

# Deploy
netlify deploy --prod
```

---

## ▲ Deploy na Vercel

### Método 1: Deploy via Git (Recomendado)

1. **Conecte seu repositório**:
   - Acesse [Vercel](https://vercel.com)
   - Clique em "Add New" → "Project"
   - Importe seu repositório do GitHub

2. **Configure o projeto**:
   ```
   Framework Preset: Vite
   Build Command: pnpm build
   Output Directory: dist
   Install Command: pnpm install
   ```

3. **Adicione variáveis de ambiente**:
   - Em "Environment Variables"
   - Adicione todas as variáveis necessárias

4. **Deploy**:
   - Clique em "Deploy"
   - Deploy automático a cada push na branch principal

### Método 2: Deploy via CLI

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 🔍 Checklist Pré-Deployment

### Build Local

```bash
# Limpar cache
rm -rf node_modules dist

# Reinstalar dependências
pnpm install

# Build de produção
pnpm build

# Testar build localmente
pnpm preview
```

### Verificações

- [ ] Build completa sem erros
- [ ] Todas as rotas funcionam corretamente
- [ ] Imagens carregam corretamente
- [ ] Formulário de contato funciona
- [ ] Links externos abrem em nova aba
- [ ] Botão WhatsApp funciona
- [ ] Meta tags estão corretas
- [ ] Favicon está configurado
- [ ] robots.txt está acessível
- [ ] sitemap.xml está acessível

---

## 🌐 Configuração de Domínio Customizado

### Netlify

1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: `www.midaslocacoes.com.br`)
4. Configure os DNS records conforme instruções
5. Aguarde propagação (pode levar até 48h)

### Vercel

1. Vá em "Settings" → "Domains"
2. Adicione seu domínio
3. Configure os DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 📊 Monitoramento Pós-Deploy

### Verificações Imediatas

1. **Teste todas as páginas**:
   - Home: `/`
   - Sobre: `/sobre`
   - Serviços: `/servicos`
   - Cada serviço individual
   - Emergência: `/emergencia`
   - Contato: `/contato`
   - Blog: `/blog`

2. **Teste funcionalidades**:
   - Formulário de contato
   - Navegação mobile
   - Links de WhatsApp
   - Velocidade de carregamento

3. **SEO**:
   - Verifique `https://seudominio.com/robots.txt`
   - Verifique `https://seudominio.com/sitemap.xml`
   - Teste no [Google Search Console](https://search.google.com/search-console)

### Ferramentas de Análise

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse** (Chrome DevTools)

---

## 🔄 Atualizações Futuras

### Deploy Automático

Com Git conectado, cada push na branch principal fará deploy automático.

### Deploy Manual

```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod
```

---

## 🆘 Troubleshooting

### Build Falha

```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

### Variáveis de Ambiente Não Funcionam

- Certifique-se de que começam com `VITE_`
- Reconstrua o projeto após adicionar variáveis
- Verifique se estão configuradas na plataforma de deploy

### Imagens Não Carregam

- Verifique se as imagens estão em `src/assets/`
- Confirme que os imports estão corretos
- Verifique o build em `dist/assets/`

### Rotas 404

Configure redirects:

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 📞 Suporte

Se encontrar problemas durante o deployment, consulte:

- [Documentação Vite](https://vitejs.dev/guide/static-deploy.html)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
