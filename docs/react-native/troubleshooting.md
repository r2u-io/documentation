---
title: Troubleshooting
---

### (Android) Missing 'package' key attribute on element package at [com.google.ar:core:1.19.0] AndroidManifest.xml

This issue is due to an [old version of gradle](https://android-developers.googleblog.com/2020/07/preparing-your-build-for-package-visibility-in-android-11.html) which does not support ARCore, Google's Augmented Reality SDK for Android. Just update to version 4.1 or follow the indicated process for previous versions.

### Analytics dependencies

The SDK uses both `react-native-device-info` and `React Native Async Storage` packages to collect information and control session in order to send data to Analytics. Be sure to have them installed in your application.