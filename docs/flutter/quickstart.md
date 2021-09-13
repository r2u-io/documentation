---
title: Quick Start
---

## Integration

The integration of the R2U augmented reality package in Flutter is made by the library [flutter_r2u](https://pub.dev/packages/flutter_r2u), **currently in beta**.

## Installation

1. Add the package `flutter_r2u` to your `pubspec.yaml` under `dependencies`.
2. Install it with `fluter pub get`

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

Check out the [sample code](https://pub.dev/packages/flutter_r2u/example) on the package to get you up and running with minimal effort. Be sure to check the rest of the documentation for more detailed information.
