---

title: Getting started

---

  

Through the Viewer website, it's possible to visualize and interact with models registered on the platform, testing animations and variations. To access a model, it's necessary to access the `viewer.r2u.io` link passing the query parameters `customerId`, with the related client id, and `sku`, with the SKU corresponding to the model. For example:

`https://viewer.r2u.io/?customerId=id&sku=sku`

## Customization parameters
It's also possible to pass query parameters to customize the experience on the Viewer website:

| Parameter | Description | Type | Default |
| :-: | - | :-: | :-: |
| `showPdpButton` | Sets whether the viewer should or should not display a product page button. If no product page link is specified either in the product registration on the platform or by the `pdpUrl` parameter, the button will never be shown. | *boolean* <br /> `0` \| `1` | `1`
| `pdpUrl` | Defines the URL to which the product page button should direct. | *link* | *registered on the platform*
| `pdpButtonText` | Customizes the text inside the product page button. If not informed, it will use the default value in the language used (Spanish, Portuguese or English). | *text* | See product page
| `logoUrl` | Customizes the logo that is displayed on the Viewer. | *link to image* | *registered on the platform*
| `showLogo` | Sets whether a logo should or should not appear. By default, it displays if there is any specified link, either by registration on the platform or by the `logoUrl` parameter; otherwise, it does not display. If no link has been specified but showLogo parameter is true (`1`), the Viewer generates a logo. | *boolean* <br /> `0` \| `1` | *see description* |
