---
title: Home
slug: /
sections:
  # HERO
  - type: GenericSection
    title:
      text: 'Planos de Saúde e Odontológicos que cabem no seu bolso'
      color: text-dark
      type: TitleBlock
    subtitle: 'Atendimento rápido, rede nacional e preços acessíveis'
    text: '###### *O melhor plano, porque a saúde vem em primeiro lugar.*'
    actions:
      - label: 'Fale no WhatsApp'
        altText: 'Contatar via WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20no%20site%20medeiro.com.br'
        style: primary
        type: Button
      - label: 'Simule Agora'
        altText: 'Simular Contratação'
        url: '/planos/'
        style: secondary
        type: Link
    media:
      url: /images/brand medeiro happy family.png
      altText: 'Família feliz com saúde'
      type: ImageBlock
    badge:
      label: 'Família Feliz é Família Segura'
      color: text-primary
      type: Badge
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
    subtitle: 'Segurança, economia e atendimento humanizado'
    items:
      - type: FeaturedItem
        title: 'Atendimento Humanizado'
        text: 'Consultoria próxima e dedicada, sempre pensando no seu bem-estar.'
        image:
          url: /images/icon1.svg
          altText: Atendimento humanizado
          type: ImageBlock
      - type: FeaturedItem
        title: 'Cobertura Nacional'
        text: 'Rede ampla em todo o Brasil, para você ser atendido onde estiver.'
        image:
          url: /images/icon2.svg
          altText: Cobertura nacional
          type: ImageBlock
      - type: FeaturedItem
        title: 'Saúde + Odonto'
        text: 'Planos completos para saúde e odontologia em um só lugar.'
        image:
          url: /images/icon3.svg
          altText: Saúde e Odonto
          type: ImageBlock
    actions:
      - label: 'Conhecer Planos'
        url: '/planos/'
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
        title: '1. Fale conosco'
        text: 'Converse com um consultor pelo WhatsApp ou formulário.'
      - type: FeaturedItem
        title: '2. Receba sua cotação'
        text: 'Comparamos operadoras e enviamos a melhor opção para você.'
      - type: FeaturedItem
        title: '3. Contrate sem burocracia'
        text: 'Acompanhamos você até a conclusão com segurança.'
    colors: bg-light-fg-dark
    styles:
      self:
        textAlign: left
        padding:
          - pt-12
          - pb-12
          - pl-16
          - pr-16

  # PLANOS EM DESTAQUE
  - type: FeaturedItemsSection
    title:
      text: 'Planos em Destaque'
      type: TitleBlock
    subtitle: 'Escolha o que melhor se adapta a você'
    items:
      - type: FeaturedItem
        title: 'Plano Essencial'
        text: 'Consultas básicas + exames'
        actions:
          - label: 'Quero este plano'
            url: '/forms/'
            style: primary
            type: Button
      - type: FeaturedItem
        title: 'Plano Familiar'
        text: 'Consultas, exames e internações'
        actions:
          - label: 'Quero este plano'
            url: '/forms/'
            style: primary
            type: Button
      - type: FeaturedItem
        title: 'Plano Premium'
        text: 'Cobertura completa + odontológico avançado'
        actions:
          - label: 'Quero este plano'
            url: '/forms/'
            style: primary
            type: Button
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        textAlign: center
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

  # PARCEIROS
  - type: ImageGallerySection
    subtitle: 'Empresas que confiam em nós'
    images:
      - url: /images/contentful-logo.svg
        altText: Parceiro 1
        type: ImageBlock
      - url: /images/empathy-logo.svg
        altText: Parceiro 2
        type: ImageBlock
      - url: /images/rangle-logo.svg
        altText: Parceiro 3
        type: ImageBlock
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center

  # DEPOIMENTOS
  - type: CarouselSection
    subtitle: 'O que os nossos clientes dizem'
    items:
      - title: 'Atendimento incrível'
        subtitle: 'Maria Souza'
        text: 'A Medeiro realmente se importa com o cliente. Recomendo 100%.'
        image:
          url: /images/person-placeholder-light.png
          altText: Cliente Maria
          type: ImageBlock
      - title: 'Preço justo'
        subtitle: 'João Lima'
        text: 'Finalmente encontrei um plano acessível e confiável.'
        image:
          url: /images/person-placeholder-light.png
          altText: Cliente João
          type: ImageBlock
    variant: next-prev-nav
    colors: bg-neutralAlt-fg-dark

  # FAQ HOME
  - type: FeaturedItemsSection
    title:
      text: 'Perguntas Frequentes'
      type: TitleBlock
      color: text-dark
    items:
      - type: FeaturedItem
        title: 'Qual o plano mais barato?'
        text: 'Nosso Plano Essencial é a opção mais acessível, com consultas e exames básicos incluídos.'
      - type: FeaturedItem
        title: 'Posso contratar sozinho?'
        text: 'Sim, temos planos individuais, familiares e empresariais. Você escolhe o que melhor atende às suas necessidades.'
      - type: FeaturedItem
        title: 'A Medeiro tem cobertura nacional?'
        text: 'Sim, nossos planos oferecem atendimento em todo o território brasileiro.'
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
      text: 'Pronto para contratar seu plano?'
      type: TitleBlock
      color: text-dark
    subtitle: 'Fale agora com nossa equipe'
    actions:
      - label: 'Falar no WhatsApp'
        altText: 'Abrir conversa no WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Quero%20simular%20um%20plano%20no%20site%20medeiro.com.br'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: contact-form
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
        - name: mensagem
          label: Mensagem
          placeholder: Sua mensagem
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
  metaTitle: 'Medeiro - Planos de Saúde e Odontológicos'
  metaDescription: 'Planos de saúde e odontológicos acessíveis em todo o Brasil. Atendimento humanizado, cobertura nacional e preços justos.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
