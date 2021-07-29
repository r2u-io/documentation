---
title: 3D Customizer
---

After adding the script tag to your website, the methods for creating the 3D Customizer will be available through the global object R2U ([live demo](https://customizer.r2u.io)).

<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/customizer.gif" title="customizer" width="600"/>
  </p>
</div>

## R2U.viewer.create

:::tip `mobile` `desktop`
:::

Creates a 3D customizer on the website in the position of the indicated HTML element.

```typescript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) => console.log('customization selected', productCustomization)
R2U.customizer.create({ element, onConfirm })
```

The `onConfirm` function is triggered after the user clicks on the "Confirm" button on the Customizer screen. It returns a key-value pair containing the product customization (e.g. key _model_ value _Eames chair_, key _color_ value _Black_, etc.)

```typescript
const element = document.getElementById('3d-customizer')
const onConfirm = (productCustomization) => console.log('customization selected', productCustomization)
const resultContainer = document.getElementById('createViewerCustomization')
R2U.customizer.create({ element, onConfirm, resultContainer})
```
The `resultContainer` element (optional) is created after the user clicks the "Confirm" button in the Customizer screen. It returns an HTML element that renders the 3D customization result.
