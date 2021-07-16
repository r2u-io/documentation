---
title: Augmented Reality
---

After adding the script tag to your website, methods for creating the Augmented Reality experience will be available through the global object R2U.

 <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/product-ar.gif" title="AR" width="200"/>
  </p>

## R2U.ar.attach

:::tip `mobile`
:::

The ar.attach method creates an "eventListener" to open the AR viewer on mobile devices (e.g.: on a button click).

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

R2U.ar.attach({
  element: arButton,
  sku,
  fallbackOptions
  /* resize defaults to `false` */
})
```

### element

It is the element that will activate the AR experience through an event.

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string }) => Promise<void>
  }
}
```

### SKU

It is the SKU of the product you want to see in AR.

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string }) => Promise<void>
  }
}
```

### event

It is the event that will activate the AR experience.

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string; event?: string }) => Promise<void>
  }
}
```

### resize

Option to resize 3D model on AR experience

```typescript
interface R2U {
  ar: {
    attach: (params: { element: HTMLElement; sku: string; resize?: boolean }) => Promise<void>
  }
}
```

### showInstructions

### showInstructions

:::info Default `once`
:::

When rendered, shows a full-screen panel explaining how to place and manipulate a 3D object, before proceeding to the AR experience.

| value  | effect                                                                            |
| ------ | --------------------------------------------------------------------------------- |
| once   | The instructions screen will render only on the user's first AR experience.       |
| always | The instructions screen will render every time the user interacts with the button |
| never  | The instructions screen will never render                                         |

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
<strong> Instructions example: </strong>

<p float="left">
  <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/instruction-en.png" title="Instruction screen" width="200"/>
</p>
</div>
</div>

### fallbackOptions

:::tip The `alertMessage` message can be customized
:::
Shows an image when the mobile device does not support the AR experience. If the instructions are entered, the fallback is displayed only when you click on the "See at your home" button.

<div >
<div >

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

</div>
<div>
<strong> Fallback example: </strong>

<p float="left">
  <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/fallback-pt.png" title="Fallback" width="200"/>
</p>
</div>

</div>

### AR demo on _iOS_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="200"/>
</p>

### AR demo on _Android_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="200"/>
</p>

## R2U.ar.getLink

:::tip `mobile` `desktop`
:::

The method returns a shareable URL for the AR experience.

```typescript
//remember to use your product information
R2U.ar.getLink('RE000001').then((url) => console.log(url))
```

## Full example

In your HTML file you will need this basic structure:
```html
<html>
  <head>
    <title>How to integrate the R2U SDK</title>
    <!-- add sdk script -->
    <script src='https://unpkg.com/@r2u/javascript-ar-sdk@6.5.4/dist/index.js'></script>
    <script src='integration-mobile.js'></script>
  </head>

  <body style="font-family: sans-serif;"> 
    <h1>How to integrate the R2U SDK</h1>
    <!-- a container for the name -->
    <h2 id="name">Eames</h2>
    <div style="display: block; height: 300px">
      <img src="eames.jpg" style="width: 100%; border: 1px solid black" />
      <!-- a container for the SKU -->
      <div id="sku" style="font-size: xx-large;">RE000001</div>
      <!-- a container for the price -->
      <div id="price" style="font-size: xx-large;">100</div>
      <!-- a button or link to open AR -->
      <button id="r2u-ar" style="width: 100%; font-size: xx-large;" >VIEW IN YOUR SPACE</button>
      <!-- a button or link to buy -->
      <button class="buy-button" style="width: 100%; font-size: xx-large;">BUY</button>
    </div>
  </body>
</html>
```

And then, on your JS file (called `integration-mobile.js` in this example), you can add this snippet:
```typescript
document.addEventListener('DOMContentLoaded', async (event) => { 
  //init 
  await R2U.init({ customerId: '5e8e7580404328000882f4ae' })
    .then(() => console.log('Client active'))
    .catch((err) => console.error('Client inactive'))

  const sku = document.getElementById('sku').innerHTML
  const isActive = R2U.sku.isActive(sku)
  if (!sku || !isActive) return

  // add analytics
  const addToCartButton  = document.querySelector('.buy-button')
  const price = document.getElementById('price').innerHTML
  addToCartButton.addEventListener('click', () =>
    R2U.analytics.send({
      event: 'add_to_cart',
      data: { price: price }
    })
  )

  // add AR button
  const arButton = document.getElementById('r2u-ar')
  await R2U.ar.attach({
    element: arButton,
    sku: sku
  })
})
```

![](./assets/mobile.png 'Mobile example')
