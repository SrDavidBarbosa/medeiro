---
title: Contato
slug: forms
sections:
  - type: GenericSection
    title:
      text: 'Fale Conosco'
      type: TitleBlock
      color: text-dark
    subtitle: 'Nossa equipe está pronta para ajudar você a escolher o melhor plano'
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
        - name: whatsapp
          label: WhatsApp
          placeholder: Seu WhatsApp (apenas números)
          isRequired: true
          type: TextFormControl
        - name: interesse
          label: Interesse
          defaultValue: Selecione uma opção
          options:
            - Plano de Saúde Individual
            - Plano de Saúde Familiar
            - Plano de Saúde Empresarial
            - Plano Odontológico Individual
            - Plano Odontológico Familiar
            - Plano Odontológico Empresarial
          isRequired: false
          type: SelectFormControl
        - name: consentimento
          label: Autorizo o uso dos meus dados para contato (LGPD)
          isRequired: true
          type: CheckboxFormControl
        - name: mensagem
          label: Mensagem
          placeholder: Sua mensagem
          type: TextareaFormControl
      submitButton:
        type: SubmitButtonFormControl
        label: Enviar
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
  metaTitle: 'Contato - Medeiro'
  metaDescription: 'Entre em contato com a Medeiro para conhecer nossos planos de saúde e odontológicos. Atendimento rápido e humanizado.'
  socialImage: /images/main-hero.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
---
