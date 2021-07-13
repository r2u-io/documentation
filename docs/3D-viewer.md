---
title: 3D Viewer
---

After adding a script tag to your website, methods for creating the 3D Viewer are available through the global object R2U.

 <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer.gif" title="3D Viewer" width="600"/>
  </p>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

It is method for creates a 3D model viewer at the position of the HTML element indicated, by default expandable via popup

```typescript
// test SKU -- remember to use your product information

//HTML element that will receive the 3D model
const element = document.getElementById('3d-viewer')
//Desired product SKU
const sku = 'RE000001'
//name of the product that will be rendered
const name = 'Cadeira Eames'
//expandable 3D viewer
const popup = false
//3D model loading bar position
const progressBarPosition = 'middle'
//insert an image on top of the 3D model while loading the model
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

R2U.viewer.create({ element, sku, name, popup, progressBarPosition, poster })
```

### Parameter popup

Enables and disables the button to open the expandable 3D viewer with the model.

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
  <strong> Popup example: </strong>

 <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-popup.gif" title="popup" width="600"/>
  </p>
  </div>

</div>

### Parameter progressBarPosition

Defines the position in which the progress bar will be inserted.

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
  <strong> ProgressBarPosition example on the desktop: </strong>

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

### Parameter progressBarColor

Sets the color of the progressBarPosition

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

### Parameter poster

Define an image on top of the 3D model that will be displayed when loading the model.

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

## Change sku R2U.viewer.create

The setSku method updates the product SKU.

<div >
<div>

```typescript
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
//change the sku at the click of the button
buttonChangeSku.addEventListener('click', () => {
  handler.setSku('RE000002')
})
```

</div>
<div>
  <strong> SetSku example: </strong>

  <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-setSku.gif" title="3D viewer setsku" width="600"/>
  </p>

  </div>

</div>

## R2U.qrCode.create

Creates a QRCode that, when scanned, directs the user to the model in AR.

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

## Full example

In your HTML file you will need this basic structure:
```html
<html>
  <head>
    <title>How to integrate the R2U SDK</title>
    <!-- add sdk script -->
    <script src='https://unpkg.com/@r2u/javascript-ar-sdk@6.5.4/dist/index.js'></script>
    <script src='integration-web.js'></script>
  </head>
  <body> 
    <h1>How to integrate the R2U SDK</h1>
    <!-- a container for the name -->
    <h2 id="name">Eames</h2>
    <div style="height: 300px">
      <div style="float: left; padding: 10px">
        <img src="eames.jpg" style="width: 100%; border: 1px solid black" />
      </div>
      <div style="width: 40%; float: left; padding: 10px">
        <!-- a container for the SKU -->
        <div id="sku">RE000001</div>
        <!-- a container for the price -->
        <div id="price">100</div>
        <!-- modal to show qrcode -->
        <div style="position: absolute; z-index: 2; width: 200px">
          <img id="ar-button" src="ar.png" width="30" height="30" />
          <div id="modal" style="background-color: grey; padding: 10px" hidden>
              <span>
                Scan the QR code bellow and see the product at your home!
              </span>
              <!-- a container for the qrcode -->
              <div id="r2u-qrcode"></div>
          </div>
        </div>
        <!-- a container for the viewer -->
        <div id="r2u-viewer"></div>
        <!-- a button or link to buy -->
      <button class="buy-button" style="width: 100%">BUY</button>
      </div>
    </div>
  </body>
</html>
```

And then, on your JS file, you can add this snippet:
```typescript
document.addEventListener('DOMContentLoaded', async (event) => { 
  // init
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

  // add analytics
  const addToCartButton  = document.querySelector('.buy-button')
  const price = document.getElementById('price').innerHTML
  addToCartButton.addEventListener('click', () =>
    R2U.analytics.send({
      event: 'add_to_cart',
      data: { price: price }
    })
  )

  // add viewer
  const viewerPosition = document.getElementById('r2u-viewer')
  await R2U.viewer.create({
    element: viewerPosition,
    popup: true,
    sku: sku,
    name: name
  })
  
  // add qrcode
  const node = document.getElementById('r2u-qrcode')
  await R2U.qrCode.create({
    element: node,
    sku: sku
  })

  // add open/close
  document.getElementById('ar-button').addEventListener('click', (e) => {
    const modal = document.getElementById('modal')
    modal.hidden = !modal.hidden
  })
})
```

![](./assets/web.png 'Webpage example')
![](./assets/web-modal.png 'Webpage example with QRCode modal')
