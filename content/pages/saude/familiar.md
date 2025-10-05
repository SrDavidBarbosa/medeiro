---
title: Plano de Saúde Familiar
slug: saude/familiar
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano de Saúde Familiar com Cobertura Nacional'
      color: text-dark
      type: TitleBlock
    subtitle: 'Proteção completa para quem você ama, com preço justo'
    text: '###### Segurança e economia para toda a família.'
    actions:
      - label: 'Fale no WhatsApp'
        altText: 'Atendimento imediato pelo WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20de%20sa%C3%BAde%20familiar.'
        style: primary
        type: Button
      - label: 'Simular Agora'
        altText: 'Simular cotação online'
        url: '/forms/'
        style: secondary
        type: Link
    media:
      url: /images/main-hero.jpg
      altText: 'Família protegida com plano de saúde'
      type: ImageBlock
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

  # BENEFÍCIOS
  - type: FeaturedItemsSection
    title:
      text: 'Benefícios do Plano Familiar'
      type: TitleBlock
      color: text-dark
    subtitle: 'Coberturas para diferentes fases da vida, no Brasil inteiro'
    items:
      - type: FeaturedItem
        title: 'Rede Nacional'
        text: 'Hospitais, clínicas e laboratórios credenciados em todo o Brasil.'
        image:
          url: /images/icon2.svg
          altText: 'Cobertura nacional'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Atendimento Humanizado'
        text: 'Suporte para escolher e contratar o melhor plano para sua família.'
        image:
          url: /images/icon1.svg
          altText: 'Atendimento humanizado'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Custo-Benefício'
        text: 'Opções com excelente relação preço x cobertura para famílias.'
        image:
          url: /images/icon3.svg
          altText: 'Preço acessível'
          type: ImageBlock
    actions:
      - label: 'Quero simular agora'
        url: '/forms/'
        style: primary
        type: Button
    colors: bg-neutral-fg-dark
    styles:
      self:
        textAlign: center
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

  # COMO FUNCIONA
  - type: FeaturedItemsSection
    title:
      text: 'Como funciona'
      type: TitleBlock
      color: text-dark
    items:
      - type: FeaturedItem
        title: '1. Fale com a nossa equipe'
        text: 'Explique a composição da família e necessidades pelo WhatsApp ou formulário.'
      - type: FeaturedItem
        title: '2. Receba sua cotação'
        text: 'Comparamos opções para o melhor custo-benefício e enviamos a proposta.'
      - type: FeaturedItem
        title: '3. Contrate sem burocracia'
        text: 'Apoiamos o processo do início ao fim, com transparência.'
    colors: bg-light-fg-dark
    styles:
      self:
        textAlign: left
        padding:
          - pt-12
          - pb-12
          - pl-16
          - pr-16

  # FAQ
  - type: FeaturedItemsSection
    title:
      text: 'Perguntas Frequentes'
      type: TitleBlock
      color: text-dark
    items:
      - type: FeaturedItem
        title: 'Dependentes e idades'
        text: 'É possível incluir cônjuge e filhos como dependentes, conforme regras da operadora.'
      - type: FeaturedItem
        title: 'Carências'
        text: 'Variam por plano e operadora, seguindo as regras da ANS. Informe-se com nosso time.'
      - type: FeaturedItem
        title: 'Reajustes'
        text: 'Seguem a regulamentação e variam conforme o tipo de plano e faixa etária.'
      - type: FeaturedItem
        title: 'Urgência e emergência'
        text: 'Cobertura conforme contrato e rede credenciada, em todo o território nacional.'
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

  # CTA FINAL COM FORMULÁRIO
  - type: GenericSection
    title:
      text: 'Pronto para simular o plano da família?'
      type: TitleBlock
      color: text-dark
    subtitle: 'Fale agora com nossa equipe ou preencha o formulário'
    actions:
      - label: 'Falar no WhatsApp'
        altText: 'Abrir conversa no WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20de%20sa%C3%BAde%20familiar.'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: saude-familiar-form
      fields:
        - name: nome
          label: Nome
          placeholder: Seu nome
          isRequired: true
          type: TextFormControl
        - name: email
          label: Email
          placeholder: Seu email
          isRequired: true
          type: EmailFormControl
        - name: whatsapp
          label: WhatsApp
          placeholder: Seu WhatsApp (apenas números)
          isRequired: true
          type: TextFormControl
        - name: interesse
          label: Interesse
          placeholder: Plano de Saúde Familiar
          isRequired: false
          type: TextFormControl
        - name: mensagem
          label: Mensagem
          placeholder: Conte rapidamente seu caso
          type: TextareaFormControl
      submitButton:
        type: SubmitButtonFormControl
        label: Enviar
        style: primary
    colors: bg-neutral-fg-dark
    styles:
      self:
        flexDirection: col
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

seo:
  metaTitle: 'Plano de Saúde Familiar - Medeiro'
  metaDescription: 'Plano de saúde familiar com cobertura nacional e excelente custo-benefício. Simule agora com atendimento humanizado.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
