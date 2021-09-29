---
title: Customizador 3D
---

Após adicionar a tag JavaScript ao seu site, os métodos de criação do Customizador 3D estarão disponíveis através do objeto global `R2U` ([demonstração ao vivo](https://customizer.r2u.io)).

<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/customizer.gif" title="customizador" width="600"/>
  </p>
</div>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

Cria um customizador 3D no site na posição do elemento HTML indicado.

```typescript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) =>
  console.log('customization selected', productCustomization)
R2U.customizer.create({ element, onConfirm })
```

A função `onConfirm` é acionada após o usuário clicar no botão "Confirmar" na tela do Customizador. Ele retorna um par de chave-valor contendo a personalização do produto (por exemplo, chave _modelo_ valor _Cadeira Eames, chave \_cor_ valor _Preto_, etc.)

```typescript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) =>
  console.log('customization selected', productCustomization)
const resultContainer = document.getElementById('createViewerCustomization')
R2U.customizer.create({ element, onConfirm, resultContainer })
```

O elemento `resultContainer` (opcional) é criado depois que o usuário clica no botão "Confirmar" na tela do Customizador. Ele retorna um elemento HTML que renderiza o resultado da personalização 3D.
