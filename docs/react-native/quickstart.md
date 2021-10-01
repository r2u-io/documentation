---
title: Quick Start
---

## Integration

The integration of R2U AR module in React Native is made by the library [@r2u/react-native-ar-sdk](https://www.npmjs.com/package/@r2u/react-native-ar-sdk)

## Requirements

The SDK uses both `react-native-device-info` and `React Native Async Storage` packages to collect information and control session in order to send data to Analytics. Be sure to have them installed in your application:

- Add the packages with `yarn`

```bash
yarn add react-native-device-info
yarn add @react-native-async-storage/async-storage
```

- Linking the packages is made automatically using [CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md)

- On iOS, use CocoaPods to add `RNAsyncStorage` to your project:

```bash
npx pod-install
```

- If you're using a `react native` version previous to 0.60, link the libraries manually

- For more information, visit the packages' documentations:
  - [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info)
  - [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)

## Installation

Add the module to your app project and follow the additional instructions for iOS and Android.

```
# with npm
npm install @r2u/react-native-ar-sdk

# with yarn
yarn add @r2u/react-native-ar-sdk
```

### iOS

1. Add camera access permission request on your [`Info.plist`](https://developer.apple.com/documentation/arkit/verifying_device_support_and_user_permission#2970474)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "___">
<plist version="1.0">
<dict>
  <key>NSCameraUsageDescription</key>
  <string>Camera used to display product in Augmented Reality</string>
  ...
</dict>
</plist>
```

2. Install the React Native pod

```
cd ios
pod install
```

### Android

1. Add camera access permission request on your [`AndroidManifest.xml`](https://developers.google.com/ar/develop/java/enable-arcore#ar_optional_apps)

```xml
<uses-permission android:name="android.permission.CAMERA" />

<application …>
    ...
    <!-- "AR Optional" app, contains non-AR features that can be used when
         "Google Play Services for AR" (ARCore) is not available. -->
    <meta-data android:name="com.google.ar.core" android:value="optional" />
</application>
```

## Getting started

Here's a sample code that will get you up and running with minimal effort. Be sure to check the rest of the documentation for more detailed information.

```tsx
import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native'

import R2U from '@r2u/react-native-ar-sdk'

const customerId = '5e8e7580404328000882f4ae' // Remember to use your ID
const sku = 'RE000001' // Gather from your product page

const App: React.FC = () => {
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
    if (opened) R2U.ar.open({ sku, resize: false }).then(() => setOpened(false))
  }, [opened])

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Button
          title={opened ? 'Loading ...' : 'View in your space'}
          onPress={() => setOpened(true)}
          disabled={!init || !isActive || !canOpenAR || opened}
        ></Button>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
```
