---
title: Início rápido
---

Confira como é fácil integrar nossa solução com o seu site!

<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/example-integration.gif" alt="example" title="example" width="800"/>
  </p>
</div>

## Integração

O SDK JavaScript (também compatível com TypeScript) pode ser adicionado ao seu site de duas maneiras equivalentes:

### JavaScript tag

Para usar nosso SDK, adicione a tag abaixo no cabeçalho (_header_) do HTML do seu site. Isso pode ser feito por meio de um sistema de gerenciamento de tags, como o Google Tag Manager, ou por meio da interface da sua plataforma de e-comércio.

```html
<html lang="en">
  <head>
    <title>Integrando o SDK R2U</title>
    <script src="https://unpkg.com/@r2u/javascript-ar-sdk/dist/index.js"></script>
  </head>

  <body>
    Seu código HTML
  </body>
</html>
```

### Package manager JavaScript

Adicione o SDK usando `npm` ou `yarn` em seu projeto JavaScript.

```bash
# usando npm
npm install @r2u/javascript-ar-sdk

# usando yarn
yarn add @r2u/javascript-ar-sdk
```

Em seguida, importe o SDK para o seu projeto e desestruture o objeto R2U do objeto global `window`.

```typescript
import '@r2u/javascript-ar-sdk'
const { R2U } = window
```

## Primeiros passos

Aqui está um código de exemplo que o ajudará a começar a trabalhar com o mínimo de esforço. Certifique-se de conferir o restante da documentação para obter informações mais detalhadas.

```javascript
;(async () => {
  await R2U.init({ customerId: '5e8e7580404328000882f4ae' })
  const isActive = await R2U.sku.isActive('RE000001')
  if (isActive) {
    const sku = 'RE000001'

    const arButton = document.getElementById('ar-button')
    await R2U.ar.attach({
      element: arButton,
      sku
    })

    const viewer = document.getElementById('3d-viewer')
    await R2U.viewer.create({
      element: viewer,
      sku
    })
  }
})()
```

Nós também temos um projeto no [Glitch](https://glitch.com/) com um exemplo mais detalhado. Confira o resultado final [aqui](https://r2u-example.glitch.me/). Ou veja o código-fonte [aqui](https://glitch.com/edit/#!/r2u-example?path=README-pt.md%3A1%3A0).
