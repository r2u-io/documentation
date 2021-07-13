---
title: Realidade Aumentada
---

Depois de adicionar a tag de script em seu site, os métodos para criar a experiência de Realidade Aumentada estarão disponíveis por meio do objeto global R2U.

 <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/product-ar.gif" title="AR" width="200"/>
  </p>

## R2U.ar.attach

:::tip `mobile`
:::

O método ar.attach cria um "eventListener" para abrir o visualizador de RA em dispositivos mobile (e.g.: clique de um botão).

```typescript
// SKU teste -- lembre de usar informação do seu produto
const arButton = document.getElementById('ar-button')
const sku = 'RE000001'
// cria um alerta de dispositivo não compatível
const fallbackOptions = {
  //add mensagem no alerta
  alertMessage: 'RA não suportada pelo dispositivo',
  //abre um visualizador 3D na tela de aviso
  fallback: 'viewer'
}

R2U.ar.attach({
  element: arButton,
  sku,
  fallbackOptions
  /* resize defaults to `false` */
})
```

### element

É o elemento que irá ativa experiência de RA através de algum evento.

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string }) => Promise<void>
  }
}
```

### SKU

É o SKU do produto que deseja ver em RA .

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string }) => Promise<void>
  }
}
```

### event

É o evento que ativará experiência de RA.

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string; event?: string }) => Promise<void>
  }
}
```

### resize

Opção para redimensionar modelo 3D em experiência de RA

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string; resize?: boolean }) => Promise<void>
  }
}
```

### showInstructions

:::info Default `once`
:::

Quando renderizada, dispõe um modal em tela cheia com explicações para posicionamento e manipulação do objeto 3D, antes de carregar a experiência de AR.

| valor  | efeito                                                                         |
| ------ | ------------------------------------------------------------------------------ |
| once   | A tela de instruções será renderizada na primeira interação do usuário com AR  |
| always | A tela de instruções será renderizada em todas as interações do usuário com AR |
| never  | A tela de instruções não será renderizada                                      |

<div >
<div >

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      showInstructions?: 'once' | 'always' | 'never'
    }) => Promise<void>
  }
}
```

</div>
<div>
<strong> Exemplo das instruções: </strong>

<p float="left">
  <img src="https://sdk.r2u.io/documentation/instructions.png" title="Instruction screen" width="200"/>
</p>
</div>
</div>

### fallbackOptions

:::tip A mensagem do `alertMessage` pode ser customizada
:::
Mostra uma imagem quando o dispositivo móvel não suporta a experiência de RA. Se as instruções estiver inserida o fallback é visualizado apenas quando clicar no botão de "Veja na sua casa".

<div >
<div >

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      //aviso de dispositivo não compatível com RA
      fallbackOptions?: {
        //add mensagem de alerta
        alertMessage?: string
        //abre um visualizador 3D na tela de aviso
        fallback?: 'viewer' | 'full'
        //modifica o texto do fallback
        text?: {
          //altera o título da página
          title?: string
          //altera o texto superior da página
          top?: string
          //altera texto inferior da página
          bottom?: string
        }
      }
    }) => Promise<void>
  }
}
```

</div>
<div>
<strong> Exemplo do fallback: </strong>

<p float="left">
  <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/fallback-pt.png" title="Fallback" width="200"/>
</p>
</div>

</div>

### Demostração da RA no _iOS_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="200"/>
</p>

### Desmonstração da RA no _Android_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="200"/>
</p>

## R2U.ar.getLink

:::tip `mobile` `desktop`
:::

É o método retorna a URL para compartilhamento na experiência de RA.

```typescript
// Lembre de usar informação do seu produto
R2U.ar.getLink('RE000001').then((url) => console.log(url))
```

## Exemplo completo

In your HTML we will need this basic structure:
```html
<html>
  <head>
    <title>Como integrar o SDK R2U</title>
    <!-- adicionando o script do sdk -->
    <script src='https://unpkg.com/@r2u/javascript-ar-sdk@6.5.4/dist/index.js'></script>
    <script src='integration-mobile.js'></script>
  </head>

  <body> 
    <h1>Como integrar o SDK R2U</h1>
    <!-- um container para o nome -->
    <h2 id="name">Eames</h2>
    <div style="display: block; height: 300px">
      <img src="eames.jpg" style="width: 100%; border: 1px solid black" />
      <!-- um container para o SKU -->
      <div id="sku" style="font-size: xx-large;">RE000001</div>
      <!-- um container para o preço -->
      <div id="price" style="font-size: xx-large;">100</div>
      <!-- um botão ou link para abrir a RA -->
      <button id="r2u-ar" style="width: 100%; font-size: xx-large;" >VIEW IN YOUR SPACE</button>
      <!-- um botão ou link de compra -->
      <button class="buy-button" style="width: 100%; font-size: xx-large;">BUY</button>
    </div>
  </body>
</html>
```

And then, on your JS file, you can add this snippet:
```typescript
document.addEventListener('DOMContentLoaded', async (event) => { 
  // inicializando 
  await R2U.init({ customerId: '5e8e7580404328000882f4ae' })
    .then(() => console.log('Client active'))
    .catch((err) => console.error('Client inactive'))

  const sku = document.getElementById('sku').innerHTML
  const isActive = R2U.sku.isActive(sku)
  if (!sku || !isActive) return

  // adicionando analytics
  const addToCartButton  = document.querySelector('.buy-button')
  const price = document.getElementById('price').innerHTML
  addToCartButton.addEventListener('click', () =>
    R2U.analytics.send({
      event: 'add_to_cart',
      data: { price: price }
    })
  )

  // adicionando botão de AR
  const arButton = document.getElementById('r2u-ar')
  await R2U.ar.attach({
    element: arButton,
    sku: sku
  })
})
```

![](./assets/mobile.png 'Exemplo mobile')
