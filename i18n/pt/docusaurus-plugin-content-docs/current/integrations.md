---
title: Integração
---

Com o SDK da R2U integrado ao site, terá acesso ao `Visualizador 3D`, ` Customizador 3D` e a `Experiência RA`.
A integração do SDK de Realidade Aumentada da R2U pode ser feita de duas maneiras equivalentes:

## Integração via JavaScript tag

Para utilizar o SDK, adicione a tag no header do HTML do website. Isso pode ser feito através de um sistema gerenciador de tags como o Google Tag Manager ou através da plataforma do seu e-commerce.

```typescript
  <html lang=pt-br>
    <head>
      <title>Como fazer a integração do SDK da R2U</title>
      <script src='https://unpkg.com/@r2u/javascript-ar-sdk@6.5.4/dist/index.js'></script>
    </head>

      <body> /*Seu código HTML*/ </body>
  </html>
```

## Integração via JavaScript Package manager

Adicione o SDK através de npm ou yarn no seu projeto JavaScript.

```typescript
  # usando npm
  npm install @r2u/javascript-ar-sdk

  # usando yarn
  yarn add @r2u/javascript-ar-sdk
```

Depois importe o sdk no seu projeto e desestruture o objeto R2U de dentro da window

```typescript
import '@r2u/javascript-ar-sdk'
const { R2U } = window
```
