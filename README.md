<img src="https://scripts-ignition.real2u.com.br/real2u-integration/logo.png" title="logo" width="250" style="display:block; margin: auto"/>

# Real2U Integration  

SDK de integração da biblioteca de Realidade Aumentada da Real2U.

Para utilizar, adicione a tag abaixo no header do HTML do website.

```html
<script src="https://unpkg.com/@real2u/javascript-ar-sdk@0.3.0/build/dist/index.js"></script>
```

Isso pode ser feito através de um sistema gerenciador de tags como o Google Tag Manager ou através da plataforma do seu e-commerce.

Um exemplo de implementação pode ser visto na nossa [live demo](https://real2u.gitlab.io/real2u-integration), que usa o código da pasta [**public**](./public/)

### Métodos

Após a inclusão da script tag no website, os métodos abaixo estarão disponíveis em um objeto global chamado `Real2U`

| função | descrição | plataforma |
| ------ | --------- | ---------- |
| `init` | inicializa a biblioteca e se conecta com o servidor Real2U para a disponibilização dos modelos 3D | |
| `isActive` | indica se o produto está disponível na plataforma para Realidade Aumentada |  |
| `openAR` | abre o visualizador nativo de realidade aumentada no dispositivo móvel | mobile |
| `create3DViewer` | cria um visualizador 3D na posição do elemento HTML indicado | **desktop** / mobile |


```typescript
interface Real2U {
  init: (params: {customerId: string}) => Promise<void>,
  isActive: (sku: string) => Promise<boolean>,
  openAR: (params: { sku: string, name: string, resize: boolean }) => void,
  create3DViewer: (params: { element: HTMLElement, sku: string, name: string }) => void
}
```

### Exemplos

##### `Real2U.init`

```javascript
// cliente de teste -- lembre de substituir pelo seu `customerId`
Real2U.init({customerId: '5e8e7580404328000882f4ae'})
  .then(() => console.log('Cliente ativo'))
  .catch(err => console.error('Cliente inativo'))
```

##### `Real2U.isActive`

```javascript
Real2U.isActive('RE000001')
  .then(isActive => console.log(`SKU ativo? ${isActive ? '✓' : '✗'}`))
```

##### `Real2U.openAR`

```javascript
// SKU de teste -- lembre de substituir pelas informações do seu produto
const arButton = document.getElementById('ar-buton')
const sku = 'RE000001'
const name = 'Cadeira Eames'

arButton.onclick = () => Real2U.openAR({
  sku,
  name
  /* resize defaults to `false` */
})
```

*iOS*

<img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="200"/>
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="200"/>
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="200"/>

*Android*

<img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="200"/>
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="200"/>
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="200"/>

##### `Real2U.create3DViewer`

```javascript
// SKU de teste -- lembre de substituir pelas informações do seu produto
const element = document.getElementById('3d-viewer')
const sku = 'RE000001'
const name = 'Cadeira Eames'

Real2U.create3DViewer({element, sku, name})
```

*Desktop*

<img src="https://scripts-ignition.real2u.com.br/real2u-integration/desktop-1.png" title="Desktop 1" width="250"/>



