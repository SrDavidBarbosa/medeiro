---
title: Plano Odontológico Familiar
slug: odonto/familiar
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano Odontológico Familiar com Rede Credenciada'
      color: text-dark
      type: TitleBlock
    subtitle: 'Proteção para toda a família com mensalidades acessíveis'
    text: '###### Prevenção e tratamentos essenciais com economia.'
    actions:
      - label: 'Fale no WhatsApp'
        altText: 'Atendimento imediato pelo WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20odontol%C3%B3gico%20familiar.'
        style: primary
        type: Button
      - label: 'Simular Agora'
        altText: 'Simular cotação online'
        url: '/forms/'
        style: secondary
        type: Link
    media:
      url: /images/main-hero.jpg
      altText: 'Família em clínica odontológica'
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
    subtitle: 'Coberturas essenciais para quem mais importa'
    items:
      - type: FeaturedItem
        title: 'Rede Credenciada'
        text: 'Dentistas e clínicas parceiros em diversas regiões.'
        image:
          url: /images/icon2.svg
          altText: 'Rede nacional'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Consultoria Humanizada'
        text: 'Orientação para contratar o plano certo para a família.'
        image:
          url: /images/icon1.svg
          altText: 'Atendimento humanizado'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Custo-Benefício'
        text: 'Mensalidades que cabem no bolso com as coberturas necessárias.'
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
        text: 'Conte o perfil da família pelo WhatsApp ou formulário.'
      - type: FeaturedItem
        title: '2. Receba sua cotação'
        text: 'Comparamos opções e apresentamos a melhor alternativa.'
      - type: FeaturedItem
        title: '3. Contrate sem burocracia'
        text: 'Acompanhamos a contratação e o pós-venda.'
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
        text: 'Sim, de acordo com a operadora e o procedimento.'
      - type: FeaturedItem
        title: 'Urgência e emergência'
        text: 'Cobertura conforme contrato e rede credenciada.'
      - type: FeaturedItem
        title: 'Ortodontia e clareamento'
        text: 'Podem ter carência, coparticipação ou não estar cobertos, conforme o plano.'
      - type: FeaturedItem
        title: 'Troca de plano'
        text: 'Analisamos possibilidades de migração/portabilidade.'
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
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20odontol%C3%B3gico%20familiar.'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: odonto-familiar-form
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
          placeholder: Plano Odontológico Familiar
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
  metaTitle: 'Plano Odontológico Familiar - Medeiro'
  metaDescription: 'Plano odontológico familiar com rede credenciada e mensalidade acessível. Simule agora com atendimento humanizado.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
