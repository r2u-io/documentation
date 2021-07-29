---
title: 3D Viewer
---

After adding the script tag to your website, the methods for creating the 3D Viewer will be available through the global `R2U` object.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/3D-viewer.gif" title="3D Viewer" width="600"/>
</p>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

Creates a 3D viewer on the website in the position of the indicated HTML element.

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


| parameter             | description                                                              | default                      |
| --------------------- | ------------------------------------------------------------------------ | ---------------------------- |
| `element`             | HTML element that will receive the 3D viewer                             | `''`                         |
| `sku`                 | product SKU                                                              | `''`                         |
| `name`                | product name                                                             | product name on R2U platform |
| [`popup`](#popup)               | allows the 3D viewer to be expandable through a popup button             | `true`                       |
| [`progressBarPosition`](#progressbarposition) | defines the _progress bar_ position (`'top'`, ` 'middle'` or `'bottom'`) | `'top'`                      |
| `progressBarColor`    | progress bar color (`'gray'`, `'rgba(89, 84, 84, 0.6)'`, `'#c5c5c5'`)    | `null`                       |
| `poster`              | allows an image to be exhibited while the 3D model is loading            | `null`                       |


### popup

Enables and disables the button to open the expandable 3D viewer with the model.

<div>
  <strong> Popup example: </strong>
  <p float="left">
  <img src="https://sdk.r2u.io/documentation/3D-viewer-popup.gif" title="popup" width="600"/>
  </p>
</div>

### progressBarPosition

Defines the position in which the progress bar will be inserted.

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


## Change R2U.viewer's sku

The `setSku` method updates the product SKU.

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
  <strong> setSku example:</strong>

  <p float="left">
    <img src="https://sdk.r2u.io/documentation/3D-viewer-setSku.gif" title="3D viewer setsku" width="600"/>
  </p>

  </div>

</div>

## R2U.qrCode.create

Creates a QRCode that, when scanned, directs the user to the model in AR.

<div>
  <div>

```typescript
const element = document.getElementById('qrCode')
R2U.qrCode.create({ element, sku })
```

  </div>

  <div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/3D-viewer-qrcode.png" title="qrcode" width="200"/>
  </p>
  </div>
</div>
