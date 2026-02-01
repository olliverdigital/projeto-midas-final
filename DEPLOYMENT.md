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

## 🌐 Deploy na Hostinger

### Pré-requisitos

Este projeto usa **history-based routing** (roteamento baseado em histórico) ao invés de hash routing (URLs com `#`). Isso melhora:
- **SEO**: URLs limpas são indexadas corretamente pelos buscadores
- **Experiência do usuário**: URLs mais profissionais e amigáveis
- **Compartilhamento**: Links diretos funcionam corretamente

### Passos para Deploy

1. **Build do projeto localmente**:
   ```bash
   pnpm build
   ```
   Isso cria a pasta `dist/` com os arquivos otimizados.

2. **Upload via FTP/SFTP**:
   - Acesse o painel Hostinger
   - Vá em "Arquivos" → "Gerenciador de Arquivos" ou use um cliente FTP
   - Navegue até a pasta `public_html` (ou pasta do seu domínio)
   - Faça upload de **todo o conteúdo** da pasta `dist/`
   - **Importante**: Faça upload dos arquivos *dentro* de dist/, não a pasta dist/ em si

3. **Configure o .htaccess para History-Based Routing**:
   
   Crie ou edite o arquivo `.htaccess` na raiz do seu domínio (`public_html/`) com o seguinte conteúdo:

   ```apache
   <IfModule mod_rewrite.c>
     # Habilita o módulo de rewrite
     RewriteEngine On
     
     # Se o arquivo ou diretório solicitado não existir
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     
     # Redireciona todas as requisições para index.html
     RewriteRule ^(.*)$ /index.html [L,QSA]
   </IfModule>

   # Habilitar compressão Gzip
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
   </IfModule>

   # Cache de arquivos estáticos
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/svg+xml "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
     ExpiresByType application/font-woff "access plus 1 year"
     ExpiresByType application/font-woff2 "access plus 1 year"
   </IfModule>
   ```

4. **Configurar HTTPS**:
   - No painel Hostinger, vá em "Avançado" → "SSL"
   - Habilite o certificado SSL gratuito (Let's Encrypt)
   - Force o redirecionamento HTTPS (recomendado)

5. **Verificar Compressão e Cache**:
   - O `.htaccess` acima já configura compressão Gzip e cache
   - Para Brotli (mais eficiente), verifique se está habilitado no painel
   - Teste com [GTmetrix](https://gtmetrix.com/) ou [PageSpeed Insights](https://pagespeed.web.dev/)

### Teste Pós-Deploy

Após o deploy, teste as seguintes URLs diretamente no navegador:
- `https://seudominio.com/`
- `https://seudominio.com/servicos` (sem `#`)
- `https://seudominio.com/sobre`
- `https://seudominio.com/contato`

Se alguma rota retornar 404, verifique se o `.htaccess` está configurado corretamente.

### Atualizações Futuras

Para atualizar o site:
1. Faça as alterações no código
2. Execute `pnpm build`
3. Faça upload dos novos arquivos da pasta `dist/` substituindo os antigos
4. Limpe o cache do navegador ou use modo anônimo para testar

### Troubleshooting

**Rotas retornam 404:**
- Verifique se o `.htaccess` está na pasta correta (`public_html/`)
- Confirme que o módulo `mod_rewrite` está habilitado (geralmente está por padrão na Hostinger)
- Verifique se não há outros arquivos `.htaccess` conflitantes em subpastas

**Site não carrega CSS/JS:**
- Verifique se todos os arquivos da pasta `dist/assets/` foram enviados
- Confirme que as permissões dos arquivos estão corretas (644 para arquivos, 755 para pastas)

**Certificado SSL não funciona:**
- Aguarde até 24h para propagação do certificado
- Force o redirecionamento HTTPS no painel Hostinger
- Limpe o cache do navegador

---

## 📞 Suporte

Se encontrar problemas durante o deployment, consulte:

- [Documentação Vite](https://vitejs.dev/guide/static-deploy.html)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
