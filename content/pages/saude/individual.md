---
title: Plano de Saúde Individual
slug: saude/individual
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano de Saúde Individual com Cobertura Nacional'
      color: text-dark
      type: TitleBlock
    subtitle: 'Atendimento rápido, preço justo e consultoria humanizada'
    text: '###### Escolha um plano sob medida para você, sem complicação.'
    actions:
      - label: 'Fale no WhatsApp'
        altText: 'Atendimento imediato pelo WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20de%20sa%C3%BAde%20individual.'
        style: primary
        type: Button
      - label: 'Simular Agora'
        altText: 'Simular cotação online'
        url: '/forms/'
        style: secondary
        type: Link
    media:
      url: /images/main-hero.jpg
      altText: 'Pessoa feliz usando plano de saúde'
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
      text: 'Benefícios do Plano Individual'
      type: TitleBlock
      color: text-dark
    subtitle: 'O essencial para sua saúde, com qualidade e economia'
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
        text: 'Consultoria especializada para ajudar você a escolher e contratar.'
        image:
          url: /images/icon1.svg
          altText: 'Atendimento humanizado'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Preço Acessível'
        text: 'Opções para diferentes orçamentos, sem abrir mão da qualidade.'
        image:
          url: /images/icon3.svg
          altText: 'Preço acessível'
          type: ImageBlock
    actions:
      - label: 'Quero simular meu plano'
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
        text: 'Explique seu perfil e necessidades pelo WhatsApp ou formulário.'
      - type: FeaturedItem
        title: '2. Receba sua cotação'
        text: 'Comparamos opções e apresentamos as melhores alternativas.'
      - type: FeaturedItem
        title: '3. Contrate sem burocracia'
        text: 'Auxiliamos em todo o processo para você contratar com segurança.'
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
        title: 'Existe carência?'
        text: 'Sim. A carência varia conforme o plano e a operadora, seguindo regras da ANS.'
      - type: FeaturedItem
        title: 'Posso trocar de plano depois?'
        text: 'Sim. A nossa equipe orienta sobre portabilidade e possibilidades de migração.'
      - type: FeaturedItem
        title: 'Como é feito o pagamento?'
        text: 'Cartão, débito ou boleto, conforme operadora. Verifique as opções disponíveis.'
      - type: FeaturedItem
        title: 'E as emergências?'
        text: 'Planos com urgência e emergência conforme regulamentação e rede credenciada.'
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
      text: 'Pronto para simular seu plano?'
      type: TitleBlock
      color: text-dark
    subtitle: 'Fale agora com nossa equipe ou preencha o formulário'
    actions:
      - label: 'Falar no WhatsApp'
        altText: 'Abrir conversa no WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20de%20sa%C3%BAde%20individual.'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: saude-individual-form
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
          placeholder: Plano de Saúde Individual
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
  metaTitle: 'Plano de Saúde Individual - Medeiro'
  metaDescription: 'Plano de saúde individual com cobertura nacional, preço acessível e consultoria humanizada. Simule agora e contrate sem burocracia.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
