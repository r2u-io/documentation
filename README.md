<img src="https://real2u-public-assets.s3.amazonaws.com/images/logo-r2u.png" title="logo" width="250" style="display:block; margin: auto"/>

# R2U Documentation 

A integração do SDK de Realidade Aumentada da R2U pode ser feita de duas maneiras equivalentes:

1. Integração via JavaScript tag
2. Integração via JavaScript package manager


#### 1. Integração via JavaScript tag

Para utilizar o SDK, adicione a tag abaixo no header do HTML do website.

```html
<script src="https://unpkg.com/@r2u/javascript-ar-sdk@3.1.0/build/dist/index.js"></script>
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

### Métodos

Após a inclusão da script tag no website, os métodos abaixo estarão disponíveis em um objeto no escopo global chamado `R2U`

| função | descrição | plataforma |
| ------ | --------- | ---------- |
| `init` | inicializa a biblioteca e se conecta com o servidor R2U para a disponibilização dos modelos 3D | |
| `isActive` | indica se o produto está disponível na plataforma para Realidade Aumentada |  |
| `openAR` | abre o visualizador nativo de realidade aumentada no dispositivo móvel | mobile |
| `getOpenARLink` | retorna uma URL de compartilhamento para a experiência de realidade aumentada  | desktop / mobile |
| `create3DViewer` | cria um visualizador 3D na posição do elemento HTML indicado, por padrão expansível via popup | **desktop** / mobile |
| `analytics.send` | envia eventos para a plataforma de analytics da R2U |  |


```typescript
interface R2U {
  init: (params: {customerId: string}) => Promise<void>;
  isActive: (sku: string) => Promise<boolean>;
  openAR: (params: { sku: string; name: string; resize?: boolean }) => Promise<void>;
  getOpenARLink: (sku: string) => Promise<string>;
  create3DViewer: (params: {
    element: HTMLElement;
    sku: string;
    name: string;
    popup: boolean;
    progressBarPosition?: 'top' | 'middle' | 'bottom';
    poster?: string | null;
  }) => Promise<void>;
  analytics: {
    send: (event: Record<string, string | number>) => Promise<void>;
  };
}
```

### Exemplos

##### `R2U.init`

```javascript
// cliente de teste -- lembre de substituir pelo seu `customerId`
R2U.init({customerId: '5e8e7580404328000882f4ae'})
  .then(() => console.log('Cliente ativo'))
  .catch(err => console.error('Cliente inativo'))
```

##### `R2U.isActive`

```javascript
R2U.isActive('RE000001')
  .then(isActive => console.log(`SKU ativo? ${isActive ? '✓' : '✗'}`))
```

##### `R2U.openAR`

```javascript
// SKU de teste -- lembre de substituir pelas informações do seu produto
const arButton = document.getElementById('ar-buton')
const sku = 'RE000001'
const name = 'Cadeira Eames'

arButton.onclick = () => R2U.openAR({
  sku,
  name
  /* resize defaults to `false` */
})
```

*iOS*

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="200"/>
</p>

*Android*

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="200"/>
</p>

##### `R2U.getOpenARLink`

```javascript
R2U.getOpenARLink('RE000001')
  .then(url => console.log(url))
```

##### `R2U.create3DViewer`

```javascript
// SKU de teste -- lembre de substituir pelas informações do seu produto
const element = document.getElementById('3d-viewer')
const sku = 'RE000001'
const name = 'Cadeira Eames'
const popup = false
const progressBarPosition = 'middle'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

R2U.create3DViewer({element, sku, name, popup, progressBarPosition, poster})
```

| parâmetro | descrição | default |
| ------ | --------- | ---------- |
| `element` | elemento HTML que irá receber o modelo 3D | `''` |
| `sku` | SKU do produto desejado | `''`  |
| `name` | nome do produto que será renderizado | `''` |
| `popup` | habilita e desabilita o botão para abrir um popup com o modelo | `true`
| `progressBarPosition` | define a posição do *progress bar* (`'top'`, ` 'middle'` or `'bottom'`) | `'top'` |
| `progressBarColor` | progress bar color (`'gray'`, `'rgba(89, 84, 84, 0.6)'`, `'#c5c5c5'`) | `null` |
| `poster` | possibilita a definição de uma imagem que será exibida durante o carregamento do modelo | `null` |

*Desktop*

<p float="left">
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-top.png" title="Progress bar top" height="150"/>
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-middle.png" title="Progress bar middle" height="150"/>
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-bottom.png" title="Progress bar bottom" height="150"/>
</p>

##### `R2U.analytics.send`

```javascript
const addToCartButton = document.getElementById('add-to-cart')
addToCartButton.addEventListener(
  'click',
  () => R2U.analytics.send({add_to_cart: 1, price: 30, client_id: '11745016811425946'})
)
```
