---
title: Troubleshooting
---

### (Android) Missing 'package' key attribute on element package at [com.google.ar:core:1.19.0] AndroidManifest.xml

This issue is due to an [old version of gradle](https://android-developers.googleblog.com/2020/07/preparing-your-build-for-package-visibility-in-android-11.html) which does not support ARCore, Google's Augmented Reality SDK for Android. Just update to version 4.1 or follow the indicated process for previous versions.

### Analytics dependencies

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
- For more information, visit the packages documentations:
  - [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info)
  - [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)
