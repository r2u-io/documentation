---
title: 3D Customizer
---

After adding the script tag to your website, the methods for creating the 3D Customizer will be available through the global object R2U.

## 3D Customizer Demo
<div>
  <p float="left">
    <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/customizer.gif" title="customizer" width="600"/>
  </p>

</div>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

The method para creates a 3D customizer at the position of the HTML element indicated.

```typescript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) =>
  console.log('customization selected', productCustomization)
R2U.customizer.create({ element, onConfirm })
```

The onConfirm function is triggered after the user clicks on the "Confirm" button on the Customizer screen. It returns a key-value pair containing the product customization (e.g. key "model" value "Eames chair", key "color" value "Black", etc.)


