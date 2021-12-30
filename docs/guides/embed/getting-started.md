---
title: Getting started
---

You can easily integrate our solution on your website using the [`<iframe>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe) tag. All you need are the informations about your `CUSTOMER_ID` and your products' `SKU`.

## Viewer R2U

Our Viewer allows you to render a 3D model in full screen by passing the `CUSTOMER_ID` and the `SKU` as query parameters to the URL.

```
https://viewer.r2u.io/embed?customerId=CUSTOMER_ID&sku=SKU
```

## Integration

You just need provide the URL with the right parameters in the `src` property of the `<iframe>` tag.

```html
<iframe
  src="https://viewer.r2u.io/embed/?customerId=CUSTOMER_ID&sku=SKU"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="no"
  allowxr="yes"
  allow="xr-spatial-tracking;fullscreen;camera"
></iframe>
```

We recommend that you use these properties of the `<iframe>` tag to enjoy a better experience:

- `width=100%`
- `height=100%`
- `frameborder=0`
- `scrolling="no"`
- `allowxr="yes"`
- `allow="xr-spatial-tracking;fullscreen;camera"`


**Obs:** some of these properties will not affect the experience now, but we recommend that you keep them for future updates.
