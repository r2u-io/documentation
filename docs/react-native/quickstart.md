---
title: Quick Start
---

## Integration

The integration of R2U AR module in React Native is made by the library [@r2u/react-native-ar-sdk](https://www.npmjs.com/package/@r2u/react-native-ar-sdk)

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
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import R2U from '@r2u/react-native-ar-sdk'

const customerId = '5e8e7580404328000882f4ae' // Remember to use your ID
const sku = 'RE000001' // Gather from your product page

const App: React.FC = () => {
  const [init, setInit] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [canOpenAR, setCanOpenAR] = useState(false)

  useEffect(async () => {
    await R2U.init({ customerId })
    const isSupported = await R2U.ar.isSupported()
    setCanOpenAR(supported)
  }, [])

  useEffect(async () => {
    if (!init) return
    const active = await R2U.sku.isActive(sku)
    setIsActive(active)
  }, [init])

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button
          title="View in your space"
          onPress={() => R2U.ar.open({ sku, resize: false })}
          disabled={!init || !isActive || !canOpenAR}
        ></Button>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
```
