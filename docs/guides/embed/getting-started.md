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

You just need provide the URL with the right parameters (`CUSTOMER_ID` and `SKU`) in the `src` property of the `<iframe>` tag.

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

## Customization parameters

It's also possible to pass some query parameters to customize the experience via iframe:

|      Parameter       | Description                                                                                                                                                                                                                                                                                                                                            |             Type              |           Default            |
| :------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------: | :--------------------------: |
|   `showPdpButton`    | Defines whether the viewer should display a product page button or not. If no product page link is specified either in the product registration on the platform or via query parameters, the button will not be shown.                                                                                                                                 |  _boolean_ <br /> `0` \| `1`  |             `0`              |
|       `pdpUrl`       | Defines the URL to which the product page button should direct to.                                                                                                                                                                                                                                                                                     |            _link_             | _registered on the platform_ |
|   `pdpButtonText`    | Customizes the text inside the product page button. If not informed, it will use the default value in the language used (Spanish, Portuguese, or English).                                                                                                                                                                                             |            _text_             |       See product page       |
|      `logoUrl`       | Customizes the client logo displayed alongside the product page button.                                                                                                                                                                                                                                                                                |        _link to image_        | _registered on the platform_ |
|      `showLogo`      | Defines whether a logo should or should not appear inside the product page button. By default, it displays if there is any specified link, either by platform registration or by the `logoUrl` parameter; otherwise, it does not display. If no link has been specified but the `showLogo` parameter is still true (`1`), the Viewer generates a logo. |  _boolean_ <br /> `0` \| `1`  |      _see description_       |
| `pdpButtonPositionH` | Specifies the horizontal position of the product page button.                                                                                                                                                                                                                                                                                          | `left` \| `center` \| `right` |           `right`            |
| `pdpButtonPositionV` | Specifies the vertical position of the product page button.                                                                                                                                                                                                                                                                                            |       `top` \| `bottom`       |            `top`             |

The following example displays a product page button with a logo and the text "See product":

`viewer.r2u.io/embed?customerId=...&sku=...&showPdpButton=1&showLogo=1&pdpButtonText=See%20product`
