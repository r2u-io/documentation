---
title: Quick Start
---

## Integration

The JavaScript SDK (also compatible with TypeScript) can be added to your website in two equivalent ways:

### JavaScript tag

To use this SDK, add the tag below on the HTML header of your website. This can be done through a tag management system such as the Google Tag Manager or through your e-commerce platform interface.

```html
<html lang=en>
  <head>
    <title>How to integrate the R2U SDK</title>
    <script src='https://unpkg.com/@r2u/javascript-ar-sdk/dist/index.js'></script>
  </head>

  <body> Your HTML code </body>
</html>
```

### JavaScript package manager integration

Add the SDK using `npm` or `yarn` on your JavaScript project.

```bash
# using npm
npm install @r2u/javascript-ar-sdk

# using yarn
yarn add @r2u/javascript-ar-sdk
```

Then import the sdk into your project and unstructure the R2U object from the window global object.

```typescript
import '@r2u/javascript-ar-sdk'
const { R2U } = window
```

## Getting started

Here's a sample code that will get you up and running with minimal effort. Be sure to check the rest of the documentation for more detailed information.

```javascript

;(async () => {
  await R2U.init({ customerId: '5e8e7580404328000882f4ae' })
  const isActive = await R2U.sku.isActive('RE000001')
  if(isActive) {
    const sku = 'RE000001'

    const arButton = document.getElementById('ar-button')
    await R2U.ar.attach({
      element: arButton,
      sku
    })

    const viewer = document.getElementById('3d-viewer')
    await R2U.viewer.create({
      element: viewer,
      sku
    })
  }
})();
```

We also have a Glitch project with a more detailed example. You can check the final result [here](https://r2u-example.glitch.me/). Or you can take a look at the code [here](https://glitch.com/edit/#!/r2u-example?path=README.md%3A15%3A14).
