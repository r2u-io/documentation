---
title: Getting started
---

You can easily integrated our solution on your website using [iframe](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe) tag. All of you need is the informations about your `custumerId` and `sku` of your products.

## Viewer R2U

Our Viewer allow you to render a 3D model in full screen by passing the `custumerId` and `sku` as query parameters to the URL.

```
https://viewer.r2u.io/embed?customerId=:custumerId&sku=:sku
```

## Integration

You just need provide the URL with the right parameters in the `src` property of the iframe tag.

```html
<iframe
  src="https://viewer.r2u.io/embed/?customerId=:customerId&sku=:sku"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="no"
  allowxr="yes"
  allow="xr-spatial-tracking;fullscreen;camera"
></iframe>
```

We recommend that you use this properties of the iframe tag to enjoy a better experience:

- `width=100%`
- `height=100%`
- `frameborder=0`
- `scrolling="no"`
- `allowxr="yes"`
- `allow="xr-spatial-tracking;fullscreen;camera"`
