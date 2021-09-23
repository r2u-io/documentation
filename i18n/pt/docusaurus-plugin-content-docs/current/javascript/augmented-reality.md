---
title: Realidade Aumentada
---

Após adicionar a tag de script ao seu site, os métodos para criar a experiência de Realidade Aumentada estarão disponíveis através do objeto global `R2U`.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/product-ar.gif" title="AR" width="200"/>
</p>

## R2U.ar.attach

:::tip `mobile`
:::

O método `ar.attach` anexa um listener de evento para abrir a experiência de RA em dispositivos móveis (por exemplo: com um clique de botão). Ele rastreará automaticamente os cliques em botões para fins de analytics.

```typescript
// SKU teste -- lembre de usar as informações do seu produto
const arButton = document.getElementById('ar-button')
const sku = 'RE000001'
// cria um alerta para dispositivos não suportados
const fallbackOptions = {
  //adiciona a mensagem de alerta
  alertMessage: 'AR não suportado por esse device',
  //abre um visualizador 3D em uma tela de aviso
  fallback: 'viewer'
}

R2U.ar.attach({
  element: arButton,
  sku: sku,
  fallbackOptions: fallbackOptions
  /* resize faz default para `false` */
})
```


| parâmetro                          | descrição                                                                                                                                       | default              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `element`                          | elemento que inicia a experiência em RA                                                                                                                     | `null`               |
| `sku`                              | SKU do produto                                                                                                                                       | `''`                 |
| `price`                              | Preço do produto                                                                                                                                       | `''`                 |
| `event`                            | evento que inicia o AR                                                                                                                            | `'click'`            |
| `resize`                           | Opção para redimensionar o modelo 3D na experience RA                                                                                                       | `false`              |
| [`showInstructions`](#showinstructions) | Quando true, mostra uma imagem em tela cheia explicando como colocar e manipular o objeto 3D em realidade aumentada antes de entrar na experiência da câmera | `false`              |
| [`fallbackOptions`](#fallbackoptions)                  | Comportamento a ser produzido quando a experiência de RA não estiver disponível no dispositivo                                                                               | `{ alertMessage }`\* |
| `fallbackOptions.alertMessage`     | Quando definido, alerta o usuário com a string escolhida                                                                                                      | `null`               |
| `fallbackOptions.fallback`         | Quando definido, abre um visualizador 3D em uma tela de aviso (`'viewer'`) ou em tela cheia (`' full'`)                                                      | `null`               |
| `fallbackOptions.text`             | Quando definido, modifica o texto de fallback no modo `'viewer'`                                                                                           | `null`               |
| `fallbackOptions.text.title`       | Muda o título na página fallback                                                                                                               | `null`               |
| `fallbackOptions.text.top`         | Altera o texto principal na página de fallback                                                                                                             | `null`               |
| `fallbackOptions.text.bottom`      | Altera o texto inferior na página de fallback                                                                                                          | `null`               |
| [`callToAction`](#calltoAction) | Quando definido, inclui um _call to action_ dentro da experiência de RA, como um botão Adicionar ao carrinho	                                                                                                          | `null`               |
| `callToAction.text`      | Botão de _Call To Action_ text                                                                                                          | `null`               |
| `callToAction.onClick`      | Função a ser executada no clique do botão dentro da experiência de AR                                                                                                          | `null`               |

\* `alertMessage = 'Sentimos muito, mas infelizmente seu dispositivo não é compatível com a visualização em Realidade Aumentada'`

### showInstructions

:::info Default `once`
:::

Quando renderizado, mostra um painel de tela cheia explicando como posicionar e manipular um objeto 3D, antes de prosseguir para a experiência de RA.

| valor  |  efeito                                                                           |
| ------ | --------------------------------------------------------------------------------- |
| once   | A tela de instruções será renderizada apenas na primeira experiência de RA do usuário.      |
| always | A tela de instruções será renderizada sempre que o usuário interagir com o botão |
| never  | A tela de instruções nunca será renderizada                                          |


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

<div>
  <strong> Exemplo de Instructions: </strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/instruction-pt.png" title="Tela de instruções" width="200"/>
  </p>
</div>

### fallbackOptions

:::tip A `alertMessage` pode ser personalizada
:::

Mostra uma imagem quando o dispositivo móvel não é compatível com a experiência de RA. Se o parâmetro de instruções for fornecido, o fallback será exibido apenas quando o usuário clicar no botão que foi `attach`.


```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      // aviso de dispositivo não compatível com AR
      fallbackOptions?: {
        // adicionar mensagem de alerta
        alertMessage?: string
        // abre um visualizador 3D na tela de aviso
        fallback?: 'viewer' | 'full'
        // altera a mensagem de fallback
        text?: {
          // altera o título da página
          title?: string
          // muda o texto superior da página
          top?: string
          // alterar o texto da página inferior
          bottom?: string
        }
      }
    }) => Promise<void>
  }
}
```

<div>
  <strong> Examplo de fallback: </strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/fallback-pt.png" title="Fallback" width="200"/>
  </p>
</div>

### callToAction

:::tip O parâmetro `text` no botão do CTA pode ser customizado
:::

Mostra um _call to action_ na experiência de Realidade Aumentada, como um botão Adicionar ao carrinho. A função `onClick` fornecida será disparada quando o usuário interagir com o CTA.

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      callToAction?: {
        text: string
        onClick: () => void
      }
    }) => Promise<void>
  }
}
```

<div>
  <strong> Exemplo de Call To Action: </strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/call-to-action-pt.png" title="Call To Action" width="200"/>
  </p>
</div>


### Demo de RA no _iOS_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="200"/>
</p>

### Demo de RA no _Android_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="200"/>
</p>

## R2U.ar.getLink

:::tip `mobile` `desktop`
:::

O método retorna um URL compartilhável para a experiência de AR.

```typescript
// lembre-se de usar as informações do seu produto
R2U.ar.getLink('RE000001').then((url) => console.log(url))
```
