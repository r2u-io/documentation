---
title: Introduction
slug: /
---

👋 Welcome to the R2U docs!

This documentation aims to provide a high-level overview of the company and its existing SDKs.

## What is R2U?

R2U helps e-commerce stores sell more by allowing users to try-out products at home with Augmented Reality. Our platform is composed of 3 main aspects:

1. Use of native solutions for iOS (ARKit) and Android (ARCore) through our SDKs
2. Storage and distribution of 3D models
3. Organization of product information by product/EAN code

<img src="https://sdk.r2u.io/documentation/r2u-architecture.png" alt="R2U architecture" title="R2U architecture"  width="600"/>

## What solutions does R2U offer?

We offer [Augmented Reality](/javascript/augmented-reality), a [3D Viewer](/javascript/viewer) and a [3D Customizer](/javascript/customizer).

<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/product-ar.gif" alt="AR" title="AR" width="200"/>
  </p>
</div>
<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/product-3d-desktop.gif" alt="viewer" title="viewer" width="600"/>
  </p>
</div>
<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/customizer.gif" alt="customizer" title="customizer" width="600"/>
  </p>
</div>

## What technologies does R2U support?

We currently have a [JavaScript SDK](/javascript/quickstart) for both mobile and desktop websites, and a [React Native](/react-native/quickstart) for mobile apps. If you wish to join our early access wait list for our [Swift/Kotlin SDKs](swift-kotlin/quickstart), please send us a message.

## What is the size of the SDKs? What is the impact on load time and bundle size?

Our SDKs are optimized to facilitate the use of native applications already present on devices and communicate with our infrastructure, so it is lightweight (less than 200kB transfer size when bundled) and should not interfere with the user experience.

## What do I need for my users to experience augmented reality?

Simply put, any user can experience augmented reality if they have a device that supports the technology, in addition to the 3D model of the product they would like to view. R2U's role is to simplify this process at scale through our unified platform.

## Which devices support augmented reality?

Today around [90% of all smartphones](https://arinsider.co/2021/07/12/are-90-of-smartphones-ar-ready/) already support augmented reality. In the beginning of 2020, this compatibility was close to 50%, which shows the evolution of adoption over time.

For iOS, devices starting from iPhone 6s and iPad 6 are supported. Official Apple supported devices list: [https://www.apple.com/us/augmented-reality/](https://www.apple.com/br/augmented-reality/)

For Android, only devices approved by Google's approval process are compatible, as they have undergone processor, sensor and camera quality tests, among other device hardware. Among the _non-approved_ models are some more _low-end_ devices from Samsung and Motorola and some models from Xiaomi. Official Google supported device list: [https://developers.google.com/ar/devices](https://developers.google.com/ar/devices)

## Does R2U host all 3D models?

Yes. We today have a proprietary database of 3D models that is ever growing with new products. As we are in direct contact with the product manufacturers, we are able to produce 3D models directly in the industry and offer AR of these products in different channels. Therefore, it is more efficient to use models directly from our storage.

<a href="https://github.com/r2u-io/documentation">
  <img src="https://sdk.r2u.io/documentation/github.png" alt="contribute github" width="20"/> &nbsp;
  Contribute
</a>
