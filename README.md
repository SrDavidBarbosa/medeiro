# 🏥 Medeiro - Site de Planos de Saúde e Odontológicos

## 📋 Visão Geral

Site institucional para venda de planos de saúde e odontológicos, desenvolvido com Next.js 15.5.0, totalmente responsivo e otimizado para conversão.

## 🚀 Tecnologias

- **Framework**: Next.js 15.5.0
- **Styling**: Tailwind CSS
- **Linguagem**: JavaScript/TypeScript
- **Deploy**: Netlify
- **Testes**: Jest + Testing Library

## 📁 Estrutura

```
medeiro-1/
├── src/
│   ├── components/          # Componentes React
│   ├── pages/              # Páginas Next.js
│   ├── utils/              # Utilitários
│   ├── hooks/              # Hooks customizados
│   └── css/                # Estilos
├── content/                # Conteúdo estático (Markdown)
├── public/                 # Assets públicos
└── __tests__/              # Testes automatizados
```

## 🎯 Funcionalidades Implementadas

### ✅ **Core Features**

- [x] Site responsivo (mobile-first)
- [x] SEO otimizado (meta tags completas)
- [x] Performance otimizada (ISR)
- [x] PWA ready (manifest, service worker)
- [x] Acessibilidade WCAG 2.1

### ✅ **Business Features**

- [x] **Simulador de Planos Inteligente** - Formulário conversacional que gera leads
- [x] **Integração WhatsApp** - Contratação direta via WhatsApp Business
- [x] **Sistema de Temas** - Claro/escuro automático
- [x] **Multi-idioma** - PT/EN/ES (i18n)

### ✅ **DevOps**

- [x] **CI/CD Pipeline** - GitHub Actions
- [x] **Testes Automatizados** - Jest + Coverage
- [x] **Monitoramento** - Sentry (error tracking)
- [x] **Qualidade de Código** - ESLint + Prettier

## 🎮 Como Usar

### **Desenvolvimento**

```bash
npm install          # Instalar dependências
npm run dev          # Rodar em desenvolvimento
```

### **Produção**

```bash
npm run build        # Build de produção
npm start           # Iniciar servidor
```

### **Qualidade**

```bash
npm run lint        # Verificar código
npm test            # Executar testes
npm run format      # Formatar código
```

## 🎯 Simulador de Planos

### **Como Acessar:**

1. Página inicial: http://localhost:3000
2. Clique em "Simular meu plano"
3. Ou acesse diretamente: http://localhost:3000/simulador

### **Funcionalidades:**

- ✅ Formulário inteligente em etapas
- ✅ Cálculo automático de preços
- ✅ Integração WhatsApp para contratação
- ✅ Interface responsiva e moderna
- ✅ UX otimizada para conversão

## 📊 Métricas e Analytics

### **Performance**

- ISR implementado (revalidação a cada 60s)
- Otimização de imagens (Next.js Image)
- Lazy loading automático
- Service Worker para cache

### **SEO**

- Meta tags completas (Open Graph, Twitter Cards)
- Schema.org estruturado
- Canonical URLs
- Sitemap automático

### **Monitoramento**

- Sentry para error tracking
- Jest para testes automatizados
- ESLint para qualidade de código

## 🚀 Deploy

O projeto está configurado para deploy automático no Netlify via GitHub Actions.

### **Variáveis de Ambiente Necessárias:**

```
NEXT_PUBLIC_SENTRY_DSN=seu_dsn
SENTRY_DSN=seu_dsn
NETLIFY_AUTH_TOKEN=seu_token
NETLIFY_SITE_ID=seu_site_id
```

## 📈 Próximos Passos

1. **Personalizar conteúdo** - Edite os arquivos em `content/`
2. **Configurar WhatsApp** - Altere número no simulador
3. **Customizar preços** - Modifique dados dos planos
4. **Analytics** - Configure Google Analytics
5. **Deploy** - Publique em produção

## 🏆 Benefícios

### **Para o Negócio**

- 🚀 **Conversão otimizada** com simulador inteligente
- 📱 **Mobile-first** para máxima acessibilidade
- 🔄 **Integração direta** com WhatsApp Business
- 📊 **Leads qualificados** automaticamente

### **Para o Desenvolvimento**

- 🧪 **Testes automatizados** para qualidade
- 🔧 **CI/CD** para deploy confiável
- 📈 **Monitoramento** em tempo real
- 🎯 **Code quality** garantida

## 📞 Suporte

Para dúvidas técnicas ou customizações, consulte a documentação do Next.js ou entre em contato.

---

**🎉 Site Medeiro: Profissional, moderno e otimizado para vendas! 🎉**
