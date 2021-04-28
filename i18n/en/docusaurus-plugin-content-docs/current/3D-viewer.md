---
title: 3D Viewer
---

After adding a script tag to your website, methods for creating the 3D Viewer are available through the global object R2U.

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

### Demonstration of the 3D viewer

 <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer.gif" title="3D Viewer" width="600"/>
  </p>

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

:::danger Known issue: Android users scanning the QR Code without having an opened browser will receive a fallback message stating that the device is not supported.
:::

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
