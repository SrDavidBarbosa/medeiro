---
title: Plano Odontológico - Promoção
slug: lp-odonto
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano Odontológico Completo a partir de R$29/mês'
      color: text-dark
      type: TitleBlock
    subtitle: 'Atendimento em todo o Brasil com preços acessíveis'
    text: '###### *Cuide do seu sorriso agora mesmo*'
    actions: []
    media:
      url: /images/main-hero.jpg
      altText: 'Dentista atendendo paciente'
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
      text: 'Por que escolher a Medeiro?'
      type: TitleBlock
      color: text-dark
    items:
      - type: FeaturedItem
        title: 'Cobertura Completa'
        text: 'Consultas, limpezas, tratamentos e emergências odontológicas.'
      - type: FeaturedItem
        title: 'Rede Nacional'
        text: 'Mais de 5.000 dentistas credenciados em todo o Brasil.'
      - type: FeaturedItem
        title: 'Preço Acessível'
        text: 'Planos a partir de apenas R$29/mês.'
    colors: bg-neutral-fg-dark
    styles:
      self:
        textAlign: center
        padding:
          - pt-12
          - pb-12
          - pl-12
          - pr-12

  # FORMULÁRIO
  - type: GenericSection
    title:
      text: 'Faça sua Simulação Agora'
      type: TitleBlock
      color: text-dark
    subtitle: 'Preencha seus dados e receba uma proposta em minutos'
    media:
      type: FormBlock
      elementId: lp-odonto-form
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
          placeholder: Seu WhatsApp
          isRequired: true
          type: TextFormControl
      submitButton:
        type: SubmitButtonFormControl
        label: 'Quero simular agora'
        style: primary
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

seo:
  metaTitle: 'Plano Odontológico - Medeiro'
  metaDescription: 'Planos odontológicos completos a partir de R$29/mês. Rede nacional e preços acessíveis.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
