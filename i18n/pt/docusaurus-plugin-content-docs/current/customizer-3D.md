---
title: Customizador 3D
---

Depois de adicionar a tag de script em seu site, os métodos para criar o Customizador 3D estarão disponíveis por meio do objeto global R2U.

<div>
  <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/customizer.gif" title="customizer" width="600"/>
  </p>

</div>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

É o método para criar o customizador 3D de acordo com a posição do elemento HTML indicado.

```typescript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) =>
  console.log('customização escolhida', productCustomization)
R2U.customizer.create({ element, onConfirm })
```

A função `onConfirm` é acionada após o clique do usuário no botão "Confirmar" na tela do Customizador. Ela retorna um mapa chave-valor contendo a customização do produto (ex: chave "modelo" valor "Cadeira Eames", chave "cor" valor "Preto", etc.).

```typescript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) =>
  console.log('customização escolhida', productCustomization)
const resultContainer = document.getElementById('createViewerCustomization')
R2U.customizer.create({ element, onConfirm, resultContainer})
```
O elemento `resultContainer` (opcional) é criado após o clique do usuário no botão "Confirmar" na tela do Customizador. Ele retorna um elemento HTML que renderiza o 3D do resultado da customização.
