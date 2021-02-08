<h1 align="center">
    <a href="/README.md">
        <img height="20px" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/gb.svg">
    </a>
    <a href="/README_pt-br.md">
        <img height="20px" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/br.svg">
    </a>
    <br>
    <a href="https://www.npmjs.com/package/@r2u/javascript-ar-sdk">
        <img src="https://img.shields.io/badge/version-4.7.1-green">
    </a>
    <br/>
    <img src="https://real2u-public-assets.s3.amazonaws.com/images/logo-r2u.png" title="logo" width="200"/>
</h1>

# R2U Documentation

This JavaScript Augmented Reality SDK can be implemented in two equivalent ways:

1. JavaScript tag integration
2. JavaScript package manager integration

#### 1. JavaScript tag integration

To use this SDK, add the tag below on the HTML header of your website.

```html
<script src="https://unpkg.com/@r2u/javascript-ar-sdk@4.7.1/build/dist/index.js"></script>
```

This can be done through a tag management system such as the Google Tag Manager or through your e-commerce platform interface.

A sample implementation can be seen at our [live demo](https://r2u-io.github.io/documentation/), which uses the code from the folder [**docs**](./docs/)

#### 2. JavaScript package manager integration

Add the SDK using `npm` or `yarn` on your JavaScript project

```
# using npm
npm install @r2u/javascript-ar-sdk

# using yarn
yarn add @r2u/javascript-ar-sdk
```

Then use as

```typescript
import '@r2u/javascript-ar-sdk'
const { R2U } = window
```

### Events

| event          | description                           |
| -------------- | ------------------------------------- |
| `R2USkdLoaded` | dispatched after SDK finishes loading |

### Methods

After adding the script tag on your website, the methods below will be available through a global `R2U` object

| function                                    | description                                                                                              | plataform            |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| [`init`](#r2uinit)                          | initializes the SDK and connects to the R2U server                                                       |                      |
| [`sku.isActive`](#r2uskuisactive)           | indicates if a product is available on the Augmented Reality platform                                    |                      |
| [`ar.attach`](#r2uarattach)                 | attaches an event listener to open the Augmented Reality experience (e.g.: on a button click)            | mobile               |
| [`ar.getLink`](#r2uargetlink)               | returns a shareable URL for the Augmented Reality experience                                             | desktop / mobile     |
| [`viewer.create`](#r2uviewercreate)         | creates a 3D model viewer at the position of the HTML element indicated, by default expandable via popup | **desktop** / mobile |
| [`analytics.send`](#r2uanalyticssend)       | send events to the R2U analytics platform                                                                |                      |
| [`customizer.create`](#r2ucustomizercreate) | creates a 3D customizer at the position of the HTML element indicated                                    | **desktop** / mobile |
| [`qrCode.create`](#r2uqrCodecreate)         | creates a QR Code linking to the AR experience at the position of the HTML element indicated             | **desktop** / mobile |

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
      showInstructions?: boolean
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
    create: (params: { element: HTMLElemen }) => Promise<void>
  }
}
```

### Example

##### `R2U.init`

```javascript
// test client -- remember to use your own `customerId`
R2U.init({
  customerId: '5e8e7580404328000882f4ae',
  analyticsParams: {
    dataLayerIntegration: true, // Activate integration with Google Tag Manager's dataLayer (dafault: true)
    sessionDurationMinutes: 30 // Maximum minutes of inactivity within a single session. Use same value as in Google Analytics (default: 30)
  }
})
  .then(() => console.log('Client active'))
  .catch((err) => console.error('Client inactive'))
```

##### `R2U.sku.isActive`

```javascript
R2U.sku.isActive('RE000001').then((isActive) => console.log(`SKU active? ${isActive ? '✓' : '✗'}`))
```

##### `R2U.ar.attach`

```javascript
// test SKU -- remember to use your product information
const arButton = document.getElementById('ar-button')
const sku = 'RE000001'
const fallbackOptions = {
  alertMessage: 'AR not supported by device',
  fallback: 'viewer'
}

R2U.ar.attach({
  element: arButton,
  sku,
  fallbackOptions
  /* resize defaults to `false` */
})
```

| parameter                      | description                                                                                  | default              |
| ------------------------------ | -------------------------------------------------------------------------------------------- | -------------------- |
| `element`                      | element that will trigger AR                                                                 | `null`               |
| `sku`                          | product SKU                                                                                  | `''`                 |
| `event`                        | event that triggers AR                                                                       | `'click'`            |
| `resize`                       | Option to resize 3D model on AR experience                                                   | `false`              |
| `showInstructions`             | Option to enter instructions in the air                                                      | `false`              |
| `fallbackOptions`              | Behavior to reproduce when AR experience is not available on device                          | `{ alertMessage }`\* |
| `fallbackOptions.alertMessage` | When defined, alerts user with chosen string                                                 | `null`               |
| `fallbackOptions.fallback`     | When defined, opens a 3D viewer in a warning screen (`'viewer'`) or in fullscreen (`'full'`) | `null`               |
| `fallbackOptions.text`         | When defined, modifies fallback text on `'viewer'` mode                                      | `null`               |
| `fallbackOptions.text.title`   | Changes the tittle on fallback page                                                          | `null`               |
| `fallbackOptions.text.top`     | Changes the top text on fallback page                                                        | `null`               |
| `fallbackOptions.text.bottom`  | Changes the bottom text on fallback page                                                     | `null`               |

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
// test SKU -- remember to use your product information
const element = document.getElementById('3d-viewer')
const sku = 'RE000001'
const name = 'Eames Chair'
const popup = false
const progressBarPosition = 'middle'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

R2U.viewer.create({ element, sku, name, popup, progressBarPosition, poster })
```

create

| parameter             | description                                                              | default                      |
| --------------------- | ------------------------------------------------------------------------ | ---------------------------- |
| `element`             | HTML element that will receive the 3D viewer                             | `''`                         |
| `sku`                 | product SKU                                                              | `''`                         |
| `name`                | product name                                                             | product name on R2U platform |
| `popup`               | allows the 3D viewer to be expandable through a popup button             | `true`                       |
| `progressBarPosition` | defines the _progress bar_ position (`'top'`, ` 'middle'` or `'bottom'`) | `'top'`                      |
| `progressBarColor`    | progress bar color (`'gray'`, `'rgba(89, 84, 84, 0.6)'`, `'#c5c5c5'`)    | `null`                       |
| `poster`              | allows an image to be exhibited while the 3D model is loading            | `null`                       |

_Desktop_

<p float="left">
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-top.png" title="Progress bar top" height="150"/>
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-middle.png" title="Progress bar middle" height="150"/>
  <img src="https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-bottom.png" title="Progress bar bottom" height="150"/>
</p>

##### Change sku `R2U.viewer.create`

```javascript
// test SKU -- remember to use your product information
const buttonChangeSku = document.getElementById('button-changeSku')
const changeSku = document.getElementById('viewer-changeSku')

// create will return a handler with function to change  sku
const handler = R2U.viewer.create({
  element: changeSku,
  sku,
  name,
  popup,
  progressBarPosition,
  poster
})

buttonChangeSku.addEventListener('click', () => {
  handler.setSku('RE000002')
})
```

change sku

| parameter     | description             | default |
| ------------- | ----------------------- | ------- |
| `setSku(sku)` | updates the product SKU | `void`  |

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

| parameter | description                                                                                                     | value                                           |
| --------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `event`   | Event identifier (e.g.: `add_to_cart`)                                                                          | `string`                                        |
| `data`    | Event metadata (e.g.: price)                                                                                    | `object`                                        |
| `scope`   | Event's context. (e.g.: If `'session'`, additional `.send`<br>calls of same event within a session are ignored) | `'event'` \| `'page'` \| `'session'` \| `'sku'` |

Other metrics and dimensions (such as SKU, customerId, operating system, etc.) are sent by default and do not need to be specified.

If `analyticsParams.dataLayerIntegration` is set to `true`, the following events are sent by default to the dataLayer:

- `product_page_view`: Triggers once per page when `sku.isActive` is called, to mark product page views
- `impression`: Triggers at most once per page view where AR / 3D viewer is shown
- `click`: Measure all clicks on AR / 3D viewer

The documentation to send the events in dataLayer to Google Analytics is [here](gtm_setup/Analytics_Setup.md)

##### `R2U.customizer.create`

```javascript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) =>
  console.log('customization selected', productCustomization)
R2U.customizer.create({ element, onConfirm })
```

The `onConfirm` function is triggered after the user clicks on the "Confirm" button on the Customizer screen. It returns a key-value pair containing the product customization (e.g. key "model" value "Eames chair", key "color" value "Black", etc.)

##### `R2U.qrCode.create`

```javascript
const element = document.getElementById('qrCode')
R2U.qrCode.create({ element })
```

_Known issue_: Android users scanning the QR Code without having an opened browser will receive a fallback message stating that the device is not supported.
