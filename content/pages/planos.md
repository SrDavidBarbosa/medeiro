---
title: Planos
slug: planos
sections:
  # HERO DOS PLANOS
  - type: GenericSection
    title:
      text: 'Nossos Planos'
      color: text-dark
      type: TitleBlock
    subtitle: 'Saúde e Odonto para todos os perfis'
    text: 'Escolha o plano ideal para você, sua família ou sua empresa.'
    media:
      url: /images/main-hero.jpg
      altText: 'Consultor apresentando planos de saúde'
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

  # PLANOS EM DETALHE
  - type: FeaturedItemsSection
    title:
      text: 'Compare nossos Planos'
      type: TitleBlock
      color: text-dark
    subtitle: 'Todos com atendimento humanizado e cobertura nacional'
    items:
      - type: FeaturedItem
        title: 'Plano Essencial'
        text: 'Consultas básicas + exames. Ideal para quem busca economia com cobertura essencial.'
        actions:
          - label: 'Quero este plano'
            url: '/forms/'
            style: primary
            type: Button
      - type: FeaturedItem
        title: 'Plano Familiar'
        text: 'Consultas, exames e internações. A escolha perfeita para famílias que precisam de segurança.'
        actions:
          - label: 'Quero este plano'
            url: '/forms/'
            style: primary
            type: Button
      - type: FeaturedItem
        title: 'Plano Premium'
        text: 'Cobertura completa + odontológico avançado. Indicado para quem busca o máximo em tranquilidade.'
        actions:
          - label: 'Quero este plano'
            url: '/forms/'
            style: primary
            type: Button
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        textAlign: center
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

    # FAQ PLANOS
  - type: FeaturedItemsSection
    title:
      text: 'Dúvidas sobre os Planos'
      type: TitleBlock
      color: text-dark
    items:
      - type: FeaturedItem
        title: 'Existe período de carência?'
        text: 'Sim, cada plano tem suas próprias regras de carência, de acordo com a ANS. Consulte nossos consultores para detalhes.'
      - type: FeaturedItem
        title: 'Posso incluir dependentes?'
        text: 'Sim, nossos planos familiares permitem incluir cônjuge, filhos e outros dependentes conforme regulamento.'
      - type: FeaturedItem
        title: 'Como funcionam os reajustes?'
        text: 'Os reajustes seguem as normas da ANS e variam conforme o tipo de plano (individual, familiar ou empresarial).'
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

  # CTA FINAL
  - type: GenericSection
    title:
      text: 'Fale com um Consultor'
      type: TitleBlock
      color: text-dark
    subtitle: 'Tire todas as suas dúvidas e faça a melhor escolha'
    actions:
      - label: 'Simular agora'
        url: '/forms/'
        style: primary
        type: Button
    colors: bg-neutralAlt-fg-dark
    styles:
      self:
        flexDirection: col
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16

seo:
  metaTitle: 'Planos Medeiro'
  metaDescription: 'Conheça os planos de saúde e odontológicos da Medeiro. Essencial, Familiar e Premium.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
