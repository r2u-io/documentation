---
title: Analytics
---

## Analytics Setup

The R2U Augmented Reality SDK by default generates usage events, such as impressions and clicks on 3D viewers.

The necessary configuration steps are described bellow such that the data is available in Google Analytics.

### 1. Google Tag Manager setup

- Download the setup file [GTM-R2U-setup.json](https://raw.githubusercontent.com/r2u-io/documentation/master/gtm_setup/files/GTM-R2U-setup.json)

- In the Admin tab, click in Import container

  <div>
    <p float="left">
      <img src="https://sdk.r2u.io/documentation/GTM-setup-screen-01.png" title="GTM-setup-1" width="600"/>
    </p>
  </div>

- Choose the configuration file (GTM-R2U-setup.json)

- In Choose workspace, select Existing and use the workspace with the Google Analytics variable

- Select Merge and confirm

  <div>
    <p float="left">
      <img src="https://sdk.r2u.io/documentation/GTM-setup-screen-02.png" title="GTM-setup-2" width="600"/>
    </p>
  </div>

- Configure the tag UA - R2U events to use the Google Analytics variable

   <div>
    <p float="left">
      <img src="https://sdk.r2u.io/documentation/GTM-setup-screen-03.png" title="GTM-setup-3" width="600"/>
    </p>
  </div>

- Configure the tag GA4 - R2U events to use the GA4 Tag configuration

   <div>
    <p float="left">
      <img src={require('./assets/GTM-setup-screen-04.png').default} title="GTM-setup-4" width="600"/>
    </p>
  </div>

- Publish the changes

### 2. Google Analytics setup

- Import the R2U segments and report via this [link](https://analytics.google.com/analytics/web/provision/?authuser=0&utm_source&utm_medium&utm_term&utm_content&utm_campaign#/provision) and apply to the view with the website data

## Send analytics to R2U platform

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
