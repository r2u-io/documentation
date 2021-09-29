---
title: Augmented Reality
---

After adding the dependency to your app, the methods for creating the Augmented Reality experience will be available through the `R2U` object.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/react-native-ar.gif" title="AR" width="200"/>
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
import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-native'

import R2U from '@r2u/react-native-ar-sdk'

const customerId = '5e8e7580404328000882f4ae' // Remember to use your ID
const sku = 'RE000001' // Gather from your product page

const ARButton: React.FC = () => {
  const [init, setInit] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [canOpenAR, setCanOpenAR] = useState(false)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    R2U.init({ customerId }).then(() => {
      setInit(true)
    })
    R2U.ar.isSupported().then((supported) => setCanOpenAR(supported))
  }, [])

  useEffect(() => {
    if (!init) return
    R2U.sku.isActive(sku).then((active) => {
      setIsActive(active)
    })
  }, [init])

  useEffect(() => {
    if (opened)
      R2U.ar
        .open({ sku, resize: false })
        .then(() => setOpened(false))
        .catch(() => {
          Alert.alert('An error has occurred')
          setOpened(false)
        })
  }, [opened])

  return (
    <Button
      title={opened ? 'Loading ...' : 'View in your space'}
      onPress={() => setOpened(true)}
      disabled={!init || !isActive || !canOpenAR || opened}
    ></Button>
  )
}

export default ARButton
```
