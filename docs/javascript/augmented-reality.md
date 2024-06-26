---
title: Augmented Reality
---

After adding the script tag to your website, the methods for creating the Augmented Reality experience will be available through the global `R2U` object.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/product-ar.gif" alt="AR" title="AR" width="200"/>
</p>

## R2U.ar.attach

:::tip `mobile`
:::

The `ar.attach` method attaches an event listener to open the AR experience on mobile devices (e.g.: on a button click). It will automatically track button clicks for analytics purposes.

```typescript
// test SKU -- remember to use your product information
const arButton = document.getElementById('ar-button')
const sku = 'RE000001'
// creates an unsupported device alert
const fallbackOptions = {
  //add message in the alert
  alertMessage: 'AR not supported by device',
  //opens a 3D viewer on the warning screen
  fallback: 'viewer'
}

await R2U.ar.attach({
  element: arButton,
  sku: sku,
  fallbackOptions: fallbackOptions
  /* resize defaults to `false` */
})
```

| parameter                               | description                                                                                                                                       | default              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `element`                               | element that will trigger AR                                                                                                                      | `null`               |
| `sku`                                   | product SKU                                                                                                                                       | `''`                 |
| `sku`                                   | product price                                                                                                                                     | `''`                 |
| `event`                                 | event that triggers AR                                                                                                                            | `'click'`            |
| `resize`                                | Option to resize 3D model on AR experience                                                                                                        | `false`              |
| [`showInstructions`](#showinstructions) | When true, shows an image in full-screen view explaining how to place and manipulate a 3D object on AR before proceeding to the camera experience | `false`              |
| [`fallbackOptions`](#fallbackoptions)   | Behavior to reproduce when AR experience is not available on device                                                                               | `{ alertMessage }`\* |
| `fallbackOptions.alertMessage`          | When defined, alerts user with chosen string                                                                                                      | `null`               |
| `fallbackOptions.fallback`              | When defined, opens a 3D viewer in a warning screen (`'viewer'`) or in fullscreen (`'full'`)                                                      | `null`               |
| `fallbackOptions.text`                  | When defined, modifies fallback text on `'viewer'` mode                                                                                           | `null`               |
| `fallbackOptions.text.title`            | Changes the tittle on fallback page                                                                                                               | `null`               |
| `fallbackOptions.text.top`              | Changes the top text on fallback page                                                                                                             | `null`               |
| `fallbackOptions.text.bottom`           | Changes the bottom text on fallback page                                                                                                          | `null`               |
| [`callToAction`](#calltoaction)         | When defined, include a Call To Action inside the AR experience, such as an Add To Cart button                                                    | `null`               |
| `callToAction.text`                     | Call To Action button text                                                                                                                        | `null`               |
| `callToAction.onClick`                  | Call To Action function to handle the button click inside the AR experience                                                                       | `null`               |

\* `alertMessage = 'Sentimos muito, mas infelizmente seu dispositivo não é compatível com a visualização em Realidade Aumentada'`

### showInstructions

:::info Default `once`
:::

When rendered, shows a full-screen panel explaining how to place and manipulate a 3D object, before proceeding to the AR experience.

| value  | effect                                                                            |
| ------ | --------------------------------------------------------------------------------- |
| once   | The instructions screen will render only on the user's first AR experience.       |
| always | The instructions screen will render every time the user interacts with the button |
| never  | The instructions screen will never render                                         |

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
  <strong> Instructions example: </strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/instruction-en.png" alt="Instruction screen" title="Instruction screen" width="200"/>
  </p>
</div>

### fallbackOptions

:::tip The `alertMessage` message can be customized
:::

Shows an image when the mobile device does not support the AR experience. If the instructions parameter is provided, the fallback is displayed only when you click on the attached button.

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      //device warning not compatible with AR
      fallbackOptions?: {
        //add alert message
        alertMessage?: string
        //opens a 3D viewer on the warning screen
        fallback?: 'viewer' | 'full'
        //modify the fallback text
        text?: {
          //change the page title
          title?: string
          //changes the top text of the page
          top?: string
          //change bottom page text
          bottom?: string
        }
      }
    }) => Promise<void>
  }
}
```

<div>
  <strong> Fallback example: </strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/fallback-pt.png" alt="Fallback" title="Fallback" width="200"/>
  </p>
</div>

### callToAction

:::info Currently only available on iOS Safari and Android WebXR
:::

:::tip We recommend the CTA `text` parameter to be short so that it won't overflow into the product name
:::

Shows a call to action on the Augmented Reality experience, such as an Add To Cart button. The `onClick` function provided will dispatch when the user interacts with the CTA.

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
  <strong> Call To Action example: </strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/call-to-action-pt.png" alt="Call To Action" title="Call To Action" width="200"/>
  </p>
</div>

### AR demo on _iOS_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" alt="iOS 1" title="iOS 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" alt="iOS 2" title="iOS 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" alt="iOS 3" title="iOS 3" width="200"/>
</p>

### AR demo on _Android_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" alt="Android 1" title="Android 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" alt="Android 2" title="Android 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" alt="Android 3" title="Android 3" width="200"/>
</p>

## R2U.ar.getLink

:::tip `mobile` `desktop`
:::

The method returns a shareable URL for the AR experience.

```typescript
//remember to use your product information
await R2U.ar.getLink('RE000001').then((url) => console.log(url))
```
