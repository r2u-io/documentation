---
title: Augmented Reality
---

After adding the dependency to your app, the methods for creating the Augmented Reality experience will be available through the `R2U` object.

<p float="left">
  <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/react-native-ar.gif" title="AR" width="200"/>
</p>

## R2U.ar.isSupported

:::tip `mobile`
:::

Returns true if the device supports Augmented Reality. See list of supported devices for [iOS](https://www.apple.com/augmented-reality/) and [Android](https://developers.google.com/ar/devices).


## R2U.ar.open

:::tip `mobile`
:::

The `ar.open` method displays the given `sku` model inside the AR experience. By default, the `resize` parameter is `false`.

```tsx
  const [init, setInit] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [canOpenAR, setCanOpenAR] = useState(false)

  useEffect(async () => {
    await R2U.init({ customerId })
    setInit(true)
    const isSupported = await R2U.ar.isSupported()
    setCanOpenAR(isSupported)
  }, [])


  // be sure to only display the AR button on supported devices
  <Button
    title="View in your space"
    onPress={() => R2U.ar.open({ sku })}
    disabled={!init || !isActive || !canOpenAR}
  ></Button>
```
