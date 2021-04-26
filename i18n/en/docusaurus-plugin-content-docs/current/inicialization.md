---
title: Initialization
slug: 
---
After adding the script tag to your site, the SDK's initialization methods will be available through the global R2U object.


## R2U.init

The init method initializes the SDK and connects to the R2U server and checks whether the customerId exists in our database.


```typescript
 // test client -- remember to use your own `customerId`
R2U.init({
  customerId: '5e8e7580404328000882f4ae',
  analyticsParams: {
    dataLayerIntegration: true, // Activate integration with Google Tag Manager (dafault: true)
    sessionDurationMinutes: 30 // Maximum minutes of inactivity within a single session. Use same value as in Google Analytics (default: 30)
  }
})
  .then(() => console.log('Client active'))
  .catch((err) => console.error('Client inactive'))
```


## R2U.sku.isActive

The sku.isActive method indicates if a product is available on the Augmented Reality platform.

```typescript
  // test client -- remember to use your own `sku`
  R2U.sku.isActive('RE000001').then((isActive) => console.log(`SKU active? ${isActive ? '✓' : '✗'}`))
```

## R2U.analytics.send

The analytical method sends events to the R2U analytical platform, to identify the results of the integration of our SDK.


```typescript
const addToCartButton = document.getElementById('add-to-cart')
addToCartButton.addEventListener('click', () =>
  R2U.analytics.send({
    event: 'add_to_cart',
    data: { price: 30 }
  })
)
```
### Parameters 

```typescript
interface R2U {
  analytics: {
    send: (params: {
      event: string
      data: Record<string, string | number>
      scope?: 'event' | 'page' | 'session' | 'sku'
    }) => Promise<void>
  }
}
```

Other metrics and dimensions (such as SKU, customerId, operating system, etc.) are sent by default and do not need to be specified.

If `analyticsParams.dataLayerIntegration` is set to `true`, the following events are sent by default to the dataLayer:

- `product_page_view`: Triggers once per page when `sku.isActive` is called, to mark product page views
- `impression`: Triggers at most once per page view where AR / 3D viewer is shown
- `click`: Measure all clicks on AR / 3D viewer

The documentation to send the events in dataLayer to Google Analytics is [aqui](https://github.com/r2u-io/documentation/blob/master/gtm_setup/Analytics_Setup_pt-br.md)