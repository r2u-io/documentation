---
title: 3D Viewer
---

After adding the dependency to your app, the methods for creating a 3D Viewer will be available through the `R2U` object.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/react-native-viewer.png" title="3D Viewer" width="200"/>
</p>

## R2U.viewer.getLink

:::tip `mobile`
:::

Returns the 3D model viewer URL, to be used in a webview such as [react-native-webview](https://github.com/react-native-webview/react-native-webview).

```tsx
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { WebView } from 'react-native-webview'

import R2U from '@r2u/react-native-ar-sdk'

const customerId = '5e8e7580404328000882f4ae' // Remember to use your ID
const sku = 'RE000001' // Gather from your product page

const styles = StyleSheet.create({
  webview: {
    marginTop: 32,
    width: 400,
    height: 400,
    margin: 'auto',
    backgroundColor: '#ccc'
  }
})

const Viewer3D: React.FC = () => {
  const [init, setInit] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [uri, setUri] = useState('')

  useEffect(() => {
    R2U.init({ customerId }).then(() => {
      setInit(true)
    })
  }, [])

  useEffect(() => {
    if (!init) return
    R2U.sku.isActive(sku).then((active) => {
      setIsActive(active)
    })
  }, [init])

  useEffect(() => {
    if (!init || !isActive) return
    R2U.viewer.getLink(sku).then((link) => {
      setUri(link)
    })
  }, [isActive])

  return <View>{uri ? <WebView style={styles.webview} source={{ uri }} /> : null}</View>
}

export default Viewer3D
```
