---
title: Getting started
---

Through the Viewer website, it's possible to visualize and interact with models registered on the platform, testing animations and variations. To access a model, it's necessary to access the `viewer.r2u.io` link passing the query parameters `customerId`, with the related client id, and `sku`, with the SKU corresponding to the model. For example:

`https://viewer.r2u.io/?customerId=id&sku=sku`

## Customization parameters

It's also possible to pass query parameters to customize the experience on the Viewer website:

|      Parameter      | Description                                                                                                                                                                                                                                                                                                     |            Type             |           Default            |
| :-----------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :--------------------------: |
|   `showPdpButton`   | Sets whether the viewer should or should not display a product page button. If no product page link is specified either in the product registration on the platform or by the `pdpUrl` parameter, the button will never be shown.                                                                               | _boolean_ <br /> `0` \| `1` |             `1`              |
|      `pdpUrl`       | Defines the URL to which the product page button should direct.                                                                                                                                                                                                                                                 |           _link_            | _registered on the platform_ |
|   `pdpButtonText`   | Customizes the text inside the product page button. If not informed, it will use the default value in the language used (Spanish, Portuguese or English).                                                                                                                                                       |           _text_            |       See product page       |
|      `logoUrl`      | Customizes the logo that is displayed on the Viewer.                                                                                                                                                                                                                                                            |       _link to image_       | _registered on the platform_ |
|     `showLogo`      | Sets whether a logo should or should not appear. By default, it displays if there is any specified link, either by registration on the platform or by the `logoUrl` parameter; otherwise, it does not display. If no link has been specified but showLogo parameter is true (`1`), the Viewer generates a logo. | _boolean_ <br /> `0` \| `1` |      _see description_       |
| `animationSelector` | Sets whether the animation selection menu should or should not appear.                                                                                                                                                                                                                                          | _boolean_ <br /> `0` \| `1` |             `1`              |
