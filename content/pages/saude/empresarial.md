---
title: Plano de Saúde Empresarial
slug: saude/empresarial
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Plano de Saúde Empresarial para sua equipe'
      color: text-dark
      type: TitleBlock
    subtitle: 'Benefícios para colaboradores, economia para o seu negócio'
    text: '###### Atratividade, retenção e bem-estar com cobertura nacional.'
    actions:
      - label: 'Fale no WhatsApp'
        altText: 'Atendimento imediato pelo WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20de%20sa%C3%BAde%20empresarial.'
        style: primary
        type: Button
      - label: 'Simular Agora'
        altText: 'Simular cotação online'
        url: '/forms/'
        style: secondary
        type: Link
    media:
      url: /images/main-hero.jpg
      altText: 'Equipe com plano de saúde empresarial'
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
        title: 'Rede Nacional'
        text: 'Ampla cobertura para sua equipe em todo o Brasil.'
        image:
          url: /images/icon2.svg
          altText: 'Cobertura nacional'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Gestão Facilitada'
        text: 'Suporte no processo de inclusão, exclusão e dúvidas do RH.'
        image:
          url: /images/icon1.svg
          altText: 'Atendimento humanizado'
          type: ImageBlock
      - type: FeaturedItem
        title: 'Custo-Benefício'
        text: 'Planos que equilibram orçamento e cobertura, com ótimas condições.'
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
        text: 'Perfil dos colaboradores, número de vidas e localidades.'
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
        text: 'Varia por operadora e modalidade. Consulte-nos para seu caso.'
      - type: FeaturedItem
        title: 'Carências e coberturas'
        text: 'Seguem regras da ANS e da operadora contratada.'
      - type: FeaturedItem
        title: 'Reajustes'
        text: 'De acordo com regulamentação e condições comerciais.'
      - type: FeaturedItem
        title: 'Portabilidade'
        text: 'Analisamos a elegibilidade e orientamos no processo.'
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
      text: 'Solicite sua proposta empresarial'
      type: TitleBlock
      color: text-dark
    subtitle: 'Fale com nossa equipe ou preencha o formulário'
    actions:
      - label: 'Falar no WhatsApp'
        altText: 'Abrir conversa no WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20de%20sa%C3%BAde%20empresarial.'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: saude-empresarial-form
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
          placeholder: Plano de Saúde Empresarial
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
  metaTitle: 'Plano de Saúde Empresarial - Medeiro'
  metaDescription: 'Plano de saúde empresarial com cobertura nacional e suporte ao RH. Solicite sua proposta com atendimento humanizado.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
