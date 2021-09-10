---
title: Início rápido
---

## Integração

A integração do módulo R2U AR no React Native é feita pelo pacote [flutter_r2u](https://pub.dev/packages/flutter_r2u), **atualmente in beta**.

## Instalação

1. Adicione o pacote `flutter_r2u` ao seu `pubspec.yaml` abaixo de `dependencies`.
2. Instale com `fluter pub get`

### iOS

1. Adicione a solicitação de permissão de acesso à câmera em seu [`Info.plist`](https://developer.apple.com/documentation/arkit/verifying_device_support_and_user_permission#2970474)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "___">
<plist version="1.0">
<dict>
  <key>NSCameraUsageDescription</key>
  <string>Câmera usada para exibir o produto em Realidade Aumentada</string>
  ...
</dict>
</plist>
```

2. Instale o pod React Native

```
cd ios
pod install
```

### Android

1. Adicione a solicitação de permissão de acesso à câmera em seu [`AndroidManifest.xml`](https://developers.google.com/ar/develop/java/enable-arcore#ar_optional_apps)

```xml
<uses-permission android:name="android.permission.CAMERA" />

<application …>
    ...
    <!-- Aplicativo "AR Optional", contém funcionalidades não-RA que podem ser usadas quando
         o "Google Play Services for AR" (ARCore) não estiver disponível. -->
    <meta-data android:name="com.google.ar.core" android:value="optional" />
</application>
```

## Início rápido

Confira o [código de exemplo](https://pub.dev/packages/flutter_r2u/example) presente no pacote para começar a trabalhar com o mínimo de esforço. Certifique-se de conferir o restante da documentação para obter informações mais detalhadas.
