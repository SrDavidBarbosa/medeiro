---
title: Plano Odontológico Empresarial
slug: odonto/empresarial
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano Odontológico Empresarial para sua equipe'
      color: text-dark
      type: TitleBlock
    subtitle: 'Cuidado com o sorriso do time e economia para o seu negócio'
    text: '###### Benefícios que atraem e retêm talentos.'
    actions:
      - label: 'Fale no WhatsApp'
        altText: 'Atendimento imediato pelo WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20odontol%C3%B3gico%20empresarial.'
        style: primary
        type: Button
      - label: 'Simular Agora'
        altText: 'Simular cotação online'
        url: '/forms/'
        style: secondary
        type: Link
    media:
      url: /images/main-hero.jpg
      altText: 'Equipe em consultório odontológico'
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
      text: 'Benefícios do Plano Empresarial'
      type: TitleBlock
      color: text-dark
    subtitle: 'Planos flexíveis para empresas de todos os portes'
    items:
      - type: FeaturedItem
        title: 'Rede Credenciada'
        text: 'Dentistas e clínicas em todo o Brasil, para atendimento do seu time.'
        image:
          url: /images/icon2.svg
          altText: 'Rede nacional'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Gestão Simplificada'
        text: 'Apoiamos o RH em inclusões, exclusões e esclarecimento de dúvidas.'
        image:
          url: /images/icon1.svg
          altText: 'Atendimento humanizado'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Custo-Benefício'
        text: 'Mensalidades competitivas com coberturas essenciais.'
        image:
          url: /images/icon3.svg
          altText: 'Preço acessível'
          type: ImageBlock
    actions:
      - label: 'Solicitar proposta'
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
        title: '1. Entenda as necessidades da equipe'
        text: 'Perfil, número de vidas e localidades.'
      - type: FeaturedItem
        title: '2. Receba propostas'
        text: 'Comparamos operadoras e apresentamos as melhores condições.'
      - type: FeaturedItem
        title: '3. Contrate e gerencie com facilidade'
        text: 'Acompanhamos a contratação e oferecemos suporte contínuo.'
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
        title: 'Quantidade mínima de vidas'
        text: 'Varia por operadora e modalidade. Consulte seu caso conosco.'
      - type: FeaturedItem
        title: 'Carências e coberturas'
        text: 'Seguem regras da ANS e da operadora contratada.'
      - type: FeaturedItem
        title: 'Reajustes'
        text: 'De acordo com regulamentação e condições comerciais.'
      - type: FeaturedItem
        title: 'Portabilidade'
        text: 'Analisamos elegibilidade e apoiamos no processo.'
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
      text: 'Solicite sua proposta odontológica empresarial'
      type: TitleBlock
      color: text-dark
    subtitle: 'Fale com nossa equipe ou preencha o formulário'
    actions:
      - label: 'Falar no WhatsApp'
        altText: 'Abrir conversa no WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20odontol%C3%B3gico%20empresarial.'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: odonto-empresarial-form
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
          placeholder: Plano Odontológico Empresarial
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
  metaTitle: 'Plano Odontológico Empresarial - Medeiro'
  metaDescription: 'Plano odontológico empresarial com ampla rede credenciada e suporte ao RH. Solicite sua proposta com atendimento humanizado.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
