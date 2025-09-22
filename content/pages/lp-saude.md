---
title: Plano de Saúde - Promoção
slug: lp-saude
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano de Saúde em {{CITY}} com até 30% OFF'
      color: text-dark
      type: TitleBlock
    subtitle: 'Atendimento rápido, rede nacional e preços acessíveis'
    text: '###### *Simule agora mesmo seu plano sem compromisso*'
    media:
      url: /images/saude-hero.png
      altText: 'Consultoria de plano de saúde'
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

  # FORMULÁRIO
  - type: GenericSection
    title:
      text: 'Faça sua Simulação Agora'
      type: TitleBlock
      color: text-dark
    subtitle: 'Preencha seus dados e receba uma proposta em minutos'
    media:
      type: FormBlock
      elementId: lp-saude-form
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
  metaTitle: 'Plano de Saúde - Medeiro'
  metaDescription: 'Simule seu plano de saúde em {{CITY}} com até 30% OFF. Atendimento rápido, cobertura nacional e preços acessíveis.'
  socialImage: /images/saude-hero.png
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
