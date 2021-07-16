---
title: Visualizador 3D
---

Depois de adicionar a tag de script em seu site, os métodos para criar o Visualizador 3D estarão disponíveis por meio do objeto global R2U.

 <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer.gif" title="3D viewer" width="600"/>
  </p>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

É o método para criar o visualizador 3D no site de acordo com a posição do elemento HTML indicado.

```typescript
//Lembre de substituir pelas informações do seu produto

//elemento HTML que irá receber o modelo 3D
const element = document.getElementById('3d-viewer')
//SKU do produto desejado
const sku = 'RE000001'
//nome do produto que será renderizado
const name = 'Cadeira Eames'
//visualizador 3D expansível
const popup = false
//posição da barra de carregamento do modelo 3D
const progressBarPosition = 'middle'
//inserir uma imagem sobre o modelo 3D durante o carregamento do modelo
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

R2U.viewer.create({ element, sku, name, popup, progressBarPosition, poster })
```

### Parâmetro popup

Habilita e desabilita o botão para abrir o visualizador 3D expansível com o modelo.

<div style={{display: 'flex', flexDirection: 'column'}}>
<div>

```typescript
interface R2U {
  viewer: {
    create: (params: {
      element: HTMLElement
      sku: string
      name?: string
      popup?: boolean
    }) => Promise<void>
  }
}
```

</div>
<div>
  <strong> Exemplo do popup: </strong>

 <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-popup.gif" title="popup" width="600"/>
  </p>
  </div>

</div>

### Parâmetro progressBarPosition

Define a posição que o progress bar será inserido.

<div style={{display: 'flex', flexDirection: 'column'}}>
<div >

```typescript
interface R2U {
  viewer: {
    create: (params: {
      element: HTMLElement
      sku: string
      progressBarPosition?: 'top' | 'middle' | 'bottom'
    }) => Promise<void>
  }
}
```

</div>
<div style={{ marginTop: '20px'}}>
  <strong> Exemplo do progressBarPosition no desktop: </strong>

<p float="left" style={{display: 'flex', flexDirection: 'row'}}>
  <div  style={{display: 'flex', flexDirection: 'column', marginLeft: '15px', marginRight: '15px'}} >
    <a>top</a>
    <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-top.png" title="Progress bar top" height="150"/>
  </div>
  <div  style={{display: 'flex', flexDirection: 'column'}} >
    <a>middle</a>
    <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-middle.png" title="Progress bar middle" height="150"/>
  </div>
  <div  style={{display: 'flex', flexDirection: 'column'}} >
    <a>bottom</a>
    <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-bottom.png" title="Progress bar bottom" height="150"/>
  </div>
</p>

  </div>

</div>

### Parâmetro progressBarColor

Define a cor do progressBarPosition

<div>

```typescript
interface R2U {
  viewer: {
    create: (params: {
      element: HTMLElement
      sku: string
      progressBarColor?: string
    }) => Promise<void>
  }
}
```

</div>

### Parâmetro poster

Define uma imagem sobre o modelo 3D que será exibida durante o carregamento do modelo.

<div>
<div>

```typescript
interface R2U {
  viewer: {
    create: (params: { element: HTMLElement; sku: string; poster?: string }) => Promise<void>
  }
}
```

</div>

</div>

## Mudar sku R2U.viewer.create

O método setSku atualiza o SKU do produto.

<div >
<div>

```typescript
// SKU de teste -- lembre de substituir pelas informações do seu produto
const buttonChangeSku = document.getElementById('button-changeSku')
const changeSku = document.getElementById('viewer-changeSku')

// O create irá retornar um objeto que terá o método setSku
const handler = R2U.viewer.create({
  element: changeSku,
  sku,
  name,
  popup,
  progressBarPosition,
  poster
})
//muda o sku no click do botão
buttonChangeSku.addEventListener('click', () => {
  handler.setSku('RE000002')
})
```

</div>
<div>
  <strong> Exemplo do setSku: </strong>

  <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-setSku.gif" title="3D viewer setSku" width="600"/>
  </p>

  </div>

</div>

## R2U.qrCode.create

Cria um QRCode que ao scannear direciona o usuário para o modelo em RA.

<div >
  <div>

```typescript
const element = document.getElementById('qrCode')
R2U.qrCode.create({ element, sku })
```

</div>
  <div>
    <p float="left">
      <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-qrcode.png" title="qrcode" width="200"/>
    </p>
  </div>
</div>


## Exemplo completo

No arquivo HTML, a seguinte estrutura mínima é necessária:
```html
<html>
  <head>
    <title>Como integrar o SDK R2U</title>
    <!-- adicionando o script do sdk -->
    <script src='https://unpkg.com/@r2u/javascript-ar-sdk@6.5.4/dist/index.js'></script>
    <script src='integration-web.js'></script>
  </head>
  <body style="font-family: sans-serif;"> 
    <h1>Como integrar o SDK R2U</h1>
    <!-- um container para o nome -->
    <h2 id="name">Eames</h2>
    <div style="height: 300px">
      <div style="float: left; padding: 10px">
        <img src="eames.jpg" style="width: 100%; border: 1px solid black" />
      </div>
      <div style="width: 40%; float: left; padding: 10px">
        <!-- um container para o SKU -->
        <div id="sku">RE000001</div>
        <!-- um container para o preço -->
        <div id="price">100</div>
        <!-- um modal para o qrcode -->
        <div style="position: absolute; z-index: 2; width: 200px">
          <img id="ar-button" src="ar.png" width="30" height="30" />
          <div id="modal" style="background-color: grey; padding: 10px" hidden>
              <span>
                Escaneie o código QR abaixo e veja o produto na sua casa!
              </span>
              <!-- um container para o qrcode -->
              <div id="r2u-qrcode"></div>
          </div>
        </div>
        <!-- um container para o visializador -->
        <div id="r2u-viewer"></div>
        <!-- um botão ou link de compra -->
      <button class="buy-button" style="width: 100%">COMPRAR</button>
      </div>
    </div>
  </body>
</html>
```

E no script JS (chamado `integration-web.js` nesse exemplo), pode-se adicionar o seguinte snippet:
```typescript
document.addEventListener('DOMContentLoaded', async (event) => { 
  // inicializando
  await R2U.init({ customerId: '5e8e7580404328000882f4ae' })
    .then(() => console.log('Client active'))
    .catch((err) => console.error('Client inactive'))

  const sku = document.getElementById('sku').innerHTML
  const name = document.getElementById('name').innerHTML
  const isActive = R2U.sku.isActive(sku)
  if (!sku || !isActive) {
    document.getElementById('ar-icon').remove()
    return
  }

  // adicionando analytics
  const addToCartButton  = document.querySelector('.buy-button')
  const price = document.getElementById('price').innerHTML
  addToCartButton.addEventListener('click', () =>
    R2U.analytics.send({
      event: 'add_to_cart',
      data: { price: price }
    })
  )

  // adicionando o visualizador
  const viewerPosition = document.getElementById('r2u-viewer')
  await R2U.viewer.create({
    element: viewerPosition,
    popup: true,
    sku: sku,
    name: name
  })
  
  // adicionando qrcode
  const node = document.getElementById('r2u-qrcode')
  await R2U.qrCode.create({
    element: node,
    sku: sku
  })

  // adicionando abre e fecha
  document.getElementById('ar-button').addEventListener('click', (e) => {
    const modal = document.getElementById('modal')
    modal.hidden = !modal.hidden
  })
})
```

![](./assets/web.png 'Exemplo de página web')
![](./assets/web-modal.png 'Exemplo de página web com modal QRCode')
