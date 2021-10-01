---
title: Augmented Reality
---

After adding the dependency to your app, the methods for creating the Augmented Reality experience will be available through the `R2U` object.

<!-- TODO: Insert gif here -->

## R2U.deviceSupportsAR

:::tip `mobile`
:::

Returns true if the device supports Augmented Reality. See list of supported devices for [iOS](https://www.apple.com/augmented-reality/) and [Android](https://developers.google.com/ar/devices).

## R2U.openAR

:::tip `mobile`
:::

The `openAR` method displays the given `sku` model inside the AR experience. By default, the `resize` parameter is `false`. Be sure to only display the AR button on supported devices
