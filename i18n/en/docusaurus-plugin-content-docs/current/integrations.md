---
title: Integration
slug: /
---

With the R2U SDK integrated into the website, you will have access to the `3D Viewer`,` 3D Customizer` and the `AR Experience`.
The integration of the R2U Augmented Reality SDK can be done in two equivalent ways:

## JavaScript tag integration

To use this SDK, add the tag below on the HTML header of your website. This can be done through a tag management system such as the Google Tag Manager or through your e-commerce platform interface.

```typescript
  <html lang=en>
    <head>
      <title>How to integrate the R2U SDK</title>
      <script src='https://unpkg.com/@r2u/javascript-ar-sdk@6.2.4/dist/index.js'></script>
    </head>

      <body> /* Your HTML code */ </body>
  </html>
```

## JavaScript package manager integration

Add the SDK using npm or yarn on your JavaScript project.

```typescript
  # using npm
  npm install @r2u/javascript-ar-sdk

  # using yarn
  yarn add @r2u/javascript-ar-sdk">
```

Then import the sdk into your project and unstructure the R2U object from within the window.

```typescript
import '@r2u/javascript-ar-sdk'
const { R2U } = window
```
