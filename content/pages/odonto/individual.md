---
title: Plano Odontológico Individual
slug: odonto/individual
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano Odontológico Individual a partir de preço acessível'
      color: text-dark
      type: TitleBlock
    subtitle: 'Cobertura nacional, atendimento rápido e consultoria humanizada'
    text: '###### Cuide do seu sorriso com economia e segurança.'
    actions:
      - label: 'Fale no WhatsApp'
        altText: 'Atendimento imediato pelo WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20odontol%C3%B3gico%20individual.'
        style: primary
        type: Button
      - label: 'Simular Agora'
        altText: 'Simular cotação online'
        url: '/forms/'
        style: secondary
        type: Link
    media:
      url: /images/main-hero.jpg
      altText: 'Paciente em consulta odontológica'
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
      text: 'Benefícios do Plano Odontológico'
      type: TitleBlock
      color: text-dark
    subtitle: 'Tratamentos essenciais e emergências, com rede credenciada ampla'
    items:
      - type: FeaturedItem
        title: 'Rede Credenciada'
        text: 'Profissionais e clínicas odontológicas em diversas regiões do Brasil.'
        image:
          url: /images/icon2.svg
          altText: 'Rede nacional'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Consultoria Humanizada'
        text: 'Ajudamos você a escolher e contratar o plano com tranquilidade.'
        image:
          url: /images/icon1.svg
          altText: 'Atendimento humanizado'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Excelente Custo-Benefício'
        text: 'Coberturas essenciais com mensalidades que cabem no seu bolso.'
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
        text: 'Explique sua necessidade pelo WhatsApp ou formulário.'
      - type: FeaturedItem
        title: '2. Receba sua cotação'
        text: 'Comparamos opções e enviamos a melhor proposta.'
      - type: FeaturedItem
        title: '3. Contrate sem burocracia'
        text: 'Acompanhamos você em todo o processo de contratação.'
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
        title: 'Tem carência?'
        text: 'Sim, varia por operadora e procedimento. Seguimos as regras da ANS.'
      - type: FeaturedItem
        title: 'Clareamento e ortodontia estão incluídos?'
        text: 'Dependendo do plano, podem exigir carência, coparticipação ou não estar cobertos.'
      - type: FeaturedItem
        title: 'Como é o atendimento de urgência?'
        text: 'Urgência e emergência conforme a cobertura contratada e rede credenciada.'
      - type: FeaturedItem
        title: 'Posso trocar de plano depois?'
        text: 'Sim. Orientamos sobre migração/portabilidade conforme regras.'
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
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20odontol%C3%B3gico%20individual.'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: odonto-individual-form
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
          placeholder: Plano Odontológico Individual
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
  metaTitle: 'Plano Odontológico Individual - Medeiro'
  metaDescription: 'Plano odontológico individual com rede credenciada, preço acessível e consultoria humanizada. Simule agora e contrate sem burocracia.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
