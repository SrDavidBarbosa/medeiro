---
title: Quem Somos
slug: quem-somos
sections:
  - type: GenericSection
    title:
      text: 'Somos a Medeiro'
      color: text-dark
      type: TitleBlock
    subtitle: 'Consultoria e venda de planos de Saúde e Odonto com atendimento humanizado'
    text: |
      A Medeiro nasceu para simplificar a contratação de planos de saúde e odontológicos. Nosso foco é entender seu contexto e apresentar a melhor opção, com transparência e rapidez.

      • Atendimento próximo e consultivo
      • Comparação de operadoras e coberturas
      • Suporte na contratação e pós-venda

      Atuamos em todo o Brasil e acompanhamos você em cada etapa.
    media:
      url: /images/main-hero.jpg
      altText: 'Equipe Medeiro atendendo cliente'
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

  - type: FeaturedItemsSection
    title:
      text: 'Nossos diferenciais'
      type: TitleBlock
      color: text-dark
    items:
      - type: FeaturedItem
        title: 'Transparência'
        text: 'Informação clara sobre coberturas, carências e reajustes.'
      - type: FeaturedItem
        title: 'Rapidez'
        text: 'Cotação ágil e acompanhamento em todo o processo.'
      - type: FeaturedItem
        title: 'Confiança'
        text: 'Geração de valor de longo prazo com pós-venda e suporte contínuo.'
    colors: bg-neutral-fg-dark
    styles:
      self:
        textAlign: center
        padding:
          - pt-12
          - pb-12
          - pl-16
          - pr-16

  - type: GenericSection
    title:
      text: 'Fale com a gente'
      type: TitleBlock
      color: text-dark
    subtitle: 'Tire suas dúvidas por WhatsApp ou formulário'
    actions:
      - label: 'Falar no WhatsApp'
        altText: 'Abrir conversa no WhatsApp'
        url: 'https://wa.me/34640645370?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Medeiro.'
        style: primary
        type: Button
    media:
      type: FormBlock
      elementId: quem-somos-form
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
  metaTitle: 'Quem Somos - Medeiro'
  metaDescription: 'Conheça a Medeiro: consultoria e venda de planos de saúde e odonto, com atendimento humanizado e transparente.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
