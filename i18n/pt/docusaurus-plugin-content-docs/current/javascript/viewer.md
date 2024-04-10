---
title: Visualizador 3D
---

Após adicionar a tag JavaScript ao seu site, os métodos de criação do visualizador 3D estarão disponíveis através do objeto global `R2U`.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/3D-viewer.gif" alt="Visualizador 3D" title="Visualizador 3D" width="600"/>
</p>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

Cria um visualizador 3D no site na posição do elemento HTML indicado.

```typescript
// Elemento HTML que receberá o visualizador 3D
const element = document.getElementById('3d-viewer')
// SKU do produto desejado
const sku = 'RE000001'
// nome do produto que será processado
const name = 'Cadeira Eames'
// visualizador 3D expansível
const popup = false
// Posição da barra de carregamento do modelo 3D
const progressBarPosition = 'middle'
// insira uma imagem em cima do modelo 3D enquanto o modelo carrega
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

R2U.viewer.create({ element, sku, name, popup, progressBarPosition, poster })
```

| parâmetro                                     | descrição                                                                     | default                           |
| --------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------- |
| `element`                                     | elemento HTML que receberá o visualizador 3D                                  | `''`                              |
| `sku`                                         | SKU do produto                                                                | `''`                              |
| `name`                                        | nome do produto                                                               | nome do produto na plataforma R2U |
| [`popup`](#popup)                             | permite que o visualizador 3D seja expansível por meio de um botão pop-up     | `true`                            |
| [`progressBarPosition`](#progressbarposition) | define a posição da _barra de progresso_ (`'top'`, ` 'middle'` or `'bottom'`) | `'top'`                           |
| `progressBarColor`                            | cor da barra de progresso (`'gray'`, `'rgba(89, 84, 84, 0.6)'`, `'#c5c5c5'`)  | `null`                            |
| `poster`                                      | permite que uma imagem seja exibida enquanto o modelo 3D está carregando      | `null`                            |

### popup

Ativa e desativa o botão para abrir o visualizador 3D expansível com o modelo.

<div>
  <strong> Popup example: </strong>
  <p float="left">
  <img src="https://sdk.r2u.io/documentation/3D-viewer-popup.gif" alt="popup" title="popup" width="600"/>
  </p>
</div>

### progressBarPosition

Define a posição em que a barra de progresso será inserida.

<div style={{ marginTop: '20px'}}>
  <strong> Exemplo de ProgressBarPosition no desktop: </strong>

  <p float="left" style={{display: 'flex', flexDirection: 'row'}}>
    <div  style={{display: 'flex', flexDirection: 'column', marginLeft: '15px', marginRight: '15px'}} >
      <a>top</a>
      <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-top.png" alt="Progress bar top" title="Progress bar top" height="150"/>
    </div>
    <div  style={{display: 'flex', flexDirection: 'column'}} >
      <a>middle</a>
      <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-middle.png" alt="Progress bar middle" title="Progress bar middle" height="150"/>
    </div>
    <div  style={{display: 'flex', flexDirection: 'column'}} >
      <a>bottom</a>
      <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-bottom.png" alt="Progress bar bottom" title="Progress bar bottom" height="150"/>
    </div>
  </p>
</div>

## Alterar o SKU do R2U.viewer

O método `setSku` atualiza o SKU do produto.

<div >
<div>

```typescript
const buttonChangeSku = document.getElementById('button-changeSku')
const changeSku = document.getElementById('viewer-changeSku')

// create retornará um handler com uma função para alterar o sku
const handler = R2U.viewer.create({
  element: changeSku,
  sku,
  name,
  popup,
  progressBarPosition,
  poster
})
// mude o sku com o clique do botão
buttonChangeSku.addEventListener('click', () => {
  handler.setSku('RE000002')
})
```

</div>

<div>
  <strong> Exemplo de setSku:</strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/3D-viewer-setSku.gif" alt="3D viewer setsku" title="3D viewer setsku" width="600"/>
  </p>

  </div>

</div>

## R2U.qrCode.create

Cria um QRCode que, quando escaneado, direciona o usuário ao modelo em RA.

<div>
  <div>

```typescript
const element = document.getElementById('qrCode')
R2U.qrCode.create({ element, sku })
```

  </div>

  <div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/3D-viewer-qrcode.png" alt="qrcode" title="qrcode" width="200"/>
  </p>
  </div>
</div>
