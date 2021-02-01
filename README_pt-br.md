<h1 align="center">
    <a href="/tree/master/README.md">
        <img height="20px" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/gb.svg">
    </a>
    <a href="/tree/master/README_pt-br.md">
        <img height="20px" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/br.svg">
    </a>
    <br>
    <a href="https://www.npmjs.com/package/@r2u/javascript-ar-sdk">
        <img src="https://img.shields.io/badge/version-4.6.0-green">
    </a>
    <br/>
    <img src="https://real2u-public-assets.s3.amazonaws.com/images/logo-r2u.png" title="logo" width="200"/>
</h1>

# Documentação R2U

A integração do SDK de Realidade Aumentada da R2U pode ser feita de duas maneiras equivalentes:

1. Integração via JavaScript tag
2. Integração via JavaScript package manager

#### 1. Integração via JavaScript tag

Para utilizar o SDK, adicione a tag abaixo no header do HTML do website.

```html
<script src="https://unpkg.com/@r2u/javascript-ar-sdk@4.6.0/build/dist/index.js"></script>
```

Isso pode ser feito através de um sistema gerenciador de tags como o Google Tag Manager ou através da plataforma do seu e-commerce.

Um exemplo de implementação pode ser visto na nossa [live demo](https://r2u-io.github.io/documentation/), que usa o código da pasta [**docs**](./docs/)

#### 2. Integração via JavaScript package manager

Adicione o SDK através de `npm` ou `yarn` no seu projeto JavaScript.

```
# usando npm
npm install @r2u/javascript-ar-sdk

# usando yarn
yarn add @r2u/javascript-ar-sdk
```

Depois use como

```typescript
import '@r2u/javascript-ar-sdk'
const { R2U } = window
```

### Eventos

| evento         | descrição                                   |
| -------------- | ------------------------------------------- |
| `R2USkdLoaded` | disparado ao término do carregamento do SDK |

### Métodos

Após a inclusão da script tag no website, os métodos abaixo estarão disponíveis em um objeto no escopo global chamado `R2U`

| função                                      | descrição                                                                                           | plataforma           |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------- |
| [`init`](#r2uinit)                          | inicializa a biblioteca e se conecta com o servidor R2U para a disponibilização dos modelos 3D      |                      |
| [`sku.isActive`](#r2uskuisactive)           | indica se o produto está disponível na plataforma para Realidade Aumentada                          |                      |
| [`ar.attach`](#r2uarattach)                 | cria um "eventListener" para abrir o visualizador de realidade aumentada (e.g.: clique de um botão) | mobile               |
| [`ar.getLink`](#r2uargetlink)               | retorna uma URL de compartilhamento para a experiência de realidade aumentada                       | desktop / mobile     |
| [`viewer.create`](#r2uviewercreate)         | cria um visualizador 3D na posição do elemento HTML indicado, por padrão expansível via popup       | **desktop** / mobile |
| [`analytics.send`](#r2uanalyticssend)       | envia eventos para a plataforma de analytics da R2U                                                 |                      |
| [`customizer.create`](#r2ucustomizercreate) | cria um customizador 3D na posição do elemento HTML indicado                                        | **desktop** / mobile |
| [`qrCode.create`](#r2uqrCodecreate)         | cria um QR Code apontando para a experiência de RA na posição do elemento HTML indicado                                                 | **desktop** / mobile |

```typescript
interface R2U {
  init: (params: {
    customerId: string
    analyticsParams?: {
      dataLayerIntegration?: boolean
      sessionDurationMinutes?: number
    }
  }) => Promise<void>
  sku: {
    isActive: (sku: string) => Promise<boolean>
  }
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      event?: string
      resize?: boolean
      fallbackOptions?: {
        alertMessage?: string
        fallback?: 'viewer' | 'full'
        text?: {
          title?: string
          top?: string
          bottom?: string
        }
      }
    }) => Promise<void>
    getLink: (sku: string) => Promise<string>
  }
  viewer: {
    create: (params: {
      element: HTMLElement
      sku: string
      name?: string
      popup?: boolean
      progressBarPosition?: 'top' | 'middle' | 'bottom'
      poster?: string
    }) => Promise<void>
  }
  analytics: {
    send: (params: {
      event: string
      data: Record<string, string | number>
      scope?: 'event' | 'page' | 'session' | 'sku'
    }) => Promise<void>
  }
  customizer: {
    create: (params: {
      element: HTMLElement
      onConfirm: (productCustomization: Record<string, string>) => void
    }) => Promise<void>
  }
  qrCode: {
    create: (params: { element: HTMLElement; sku: string }) => Promise<void>
  }
}
```

### Exemplos

##### `R2U.init`

```javascript
// cliente de teste -- lembre de substituir pelo seu `customerId`
R2U.init({
  customerId: '5e8e7580404328000882f4ae',
  analyticsParams: {
    dataLayerIntegration: true, // Ativar integração com "dataLayer" do Google Tag Manager (dafault: true)
    sessionDurationMinutes: 30 // Duração máxima de inatividade em minutos dentro de uma sessão. Usar mesmo valor que no Google Analytics (default: 30)
  }
})
  .then(() => console.log('Cliente ativo'))
  .catch((err) => console.error('Cliente inativo'))
```

##### `R2U.sku.isActive`

```javascript
R2U.sku.isActive('RE000001').then((isActive) => console.log(`SKU ativo? ${isActive ? '✓' : '✗'}`))
```

##### `R2U.ar.attach`

```javascript
// SKU teste -- lembre de usar informação do seu produto
const arButton = document.getElementById('ar-button')
const sku = 'RE000001'
const fallbackOptions = {
  alertMessage: 'RA não suportada pelo dispositivo',
  fallback: 'viewer'
}

R2U.ar.attach({
  element: arButton,
  sku,
  fallbackOptions
  /* resize defaults to `false` */
})
```

| parâmetro                      | descrição                                                                                              | default              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ | -------------------- |
| `element`                      | elemento que irá ativa experiência de RA                                                               | `null`               |
| `sku`                          | SKU do produto desejado                                                                                | `''`                 |
| `event`                        | evento que ativará experiência de RA                                                                   | `'click'`            |
| `resize`                       | Opção para redimensionar modelo 3D em experiência de RA                                                | `false`              |
| `fallbackOptions`              | Comportamento a ser reproduzido quando experiência de RA não for disponível no dispositivo             | `{ alertMessage }`\* |
| `fallbackOptions.alertMessage` | Quando definido, alerta usuário com string escolhida                                                   | `null`               |
| `fallbackOptions.fallback`     | Quando definido, abre um visualizador 3D em uma tela de aviso (`'viewer'`) ou em tela cheia (`'full'`) | `null`               |
| `fallbackOptions.text`         | Quando definido, modifica o texto do fallback no modo `'viewer'`                                       | `null`               |
| `fallbackOptions.text.title`   | Altera título da página de fallback                                                                    | `null`               |
| `fallbackOptions.text.top`     | Altera texto superior da página de fallback                                                            | `null`               |
| `fallbackOptions.text.bottom`  | Altera texto inferior da página de fallback                                                            | `null`               |

\* `alertMessage = 'Sentimos muito, mas infelizmente seu dispositivo não é compatível com a visualização em Realidade Aumentada'`

_iOS_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="200"/>
</p>

_Android_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="200"/>
</p>

##### `R2U.ar.getLink`

```javascript
R2U.ar.getLink('RE000001').then((url) => console.log(url))
```

##### `R2U.viewer.create`

```javascript
// SKU de teste -- lembre de substituir pelas informações do seu produto
const element = document.getElementById('3d-viewer')
const sku = 'RE000001'
const name = 'Cadeira Eames'
const popup = false
const progressBarPosition = 'middle'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

R2U.viewer.create({ element, sku, name, popup, progressBarPosition, poster })
```

| parâmetro             | descrição                                                                               | default                           |
| --------------------- | --------------------------------------------------------------------------------------- | --------------------------------- |
| `element`             | elemento HTML que irá receber o modelo 3D                                               | `''`                              |
| `sku`                 | SKU do produto desejado                                                                 | `''`                              |
| `name`                | nome do produto que será renderizado                                                    | nome do produto na plataforma R2U |
| `popup`               | habilita e desabilita o botão para abrir um popup com o modelo                          | `true`                            |
| `progressBarPosition` | define a posição do _progress bar_ (`'top'`, ` 'middle'` or `'bottom'`)                 | `'top'`                           |
| `progressBarColor`    | progress bar color (`'gray'`, `'rgba(89, 84, 84, 0.6)'`, `'#c5c5c5'`)                   | `null`                            |
| `poster`              | possibilita a definição de uma imagem que será exibida durante o carregamento do modelo | `null`                            |

_Desktop_

<p float="left">
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-top.png" title="Progress bar top" height="150"/>
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-middle.png" title="Progress bar middle" height="150"/>
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-bottom.png" title="Progress bar bottom" height="150"/>
</p>

##### Mudar sku `R2U.viewer.create`

```javascript
// SKU de teste -- lembre de substituir pelas informações do seu produto
const buttonChangeSku = document.getElementById('button-changeSku')
const changeSku = document.getElementById('viewer-changeSku')

// O create irá retornar um objeto que terá o método setSku 
const handler = R2U.viewer.create({ element: changeSku, sku, name, popup, progressBarPosition, poster})

buttonChangeSku.addEventListener('click', () => {
  handler.setSku('RE000002')
})
```

change sku

| parameter             | description             | default |
| :-------------------- | ----------------------- | ------- |
| `setSku(sku: string)` | updates the product SKU | `void`  |


##### `R2U.analytics.send`

```javascript
const addToCartButton = document.getElementById('add-to-cart')
addToCartButton.addEventListener('click', () =>
  R2U.analytics.send({
    event: 'add_to_cart',
    data: { price: 30 }
  })
)
```

| parâmetro | descrição                                                                                                                      | valor                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| `event`   | Identificador do evento (e.g.: `add_to_cart`)                                                                                  | `string`                                        |
| `data`    | Metadados do evento (e.g.: preço)                                                                                              | `object`                                        |
| `scope`   | Contexto do evento. (e.g.: Se for `'session'`, chamadas adicionais<br> de `.send` do mesmo evento em uma sessão são ignoradas) | `'event'` \| `'page'` \| `'session'` \| `'sku'` |

Outras métricas e dimensões (tais como SKU, customerId, sistema operacional, etc.) são enviadas automaticamente e não precisam ser especificadas.

Se `analyticsParams.dataLayerIntegration` for `true`, os seguintes eventos são enviados por padrão ao dataLayer:

- `product_page_view`: Enviado em uma vez por página quando `sku.isActive` é chamado, para marcar visualizações de página de produto
- `impression`: Enviado uma até uma vez por visualização de página em que RA / 3D é mostrado
- `click`: Enviado em todos os cliques em RA / visualização 3D

A documentação para enviar os dados do dataLayer para o Google Analytics está [aqui](gtm_setup/Analytics_Setup_pt-br.md)

##### `R2U.customizer.create`

```javascript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) =>
  console.log('customização escolhida', productCustomization)
R2U.customizer.create({ element, onConfirm })
```

A função `onConfirm` é acionada após o clique do usuário no botão "Confirmar" na tela do Customizador. Ela retorna um mapa chave-valor contendo a customização do produto (ex: chave "modelo" valor "Cadeira Eames", chave "cor" valor "Preto", etc.)

##### `R2U.qrCode.create`

```javascript
const element = document.getElementById('qrCode')
R2U.qrCode.create({ element, sku })
```

_Problemas conhecidos_: Usuários Android escaneando o QR Code sem ter o browser aberto receberão uma mensagem de fallback avisando que o dispositivo não é suportado.