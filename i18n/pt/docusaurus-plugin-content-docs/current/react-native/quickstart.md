---
title: Início rápido
---

## Integração

A integração do módulo R2U AR no React Native é feita pela biblioteca [@r2u/react-native-ar-sdk](https://www.npmjs.com/package/@r2u/react-native-ar-sdk)

## Pre-requisitos

O SDK usa os pacotes `react-native-device-info` e `React Native Async Storage` para coletar informações e controlar a sessão para enviar dados ao Analytics. Certifique-se de tê-los instalados em seu aplicativo:

- Adicionar pacotes com `yarn`

```bash
yarn add react-native-device-info
yarn add @react-native-async-storage/async-storage
```

- O _link_ dos pacotes é feito automaticamente usando a [funcionalidade autolink da linha de comando](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md)

- No iOS, use CocoaPods para adicionar `RNAsyncStorage` ao seu projeto:

```bash
npx pod-install
```

- Se você estiver usando uma versão `react native` anterior a 0.60, faça o _link_ das bibliotecas manualmente

- Para mais informações, visite as documentações dos pacotes:
  - [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info)
  - [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)

## Instalação

Adicione o módulo ao seu projeto de aplicativo e siga as instruções adicionais para iOS e Android.

```
# com npm
npm install @r2u/react-native-ar-sdk

# com yarn
yarn add @r2u/react-native-ar-sdk
```

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

Aqui está um código de exemplo que o ajudará a começar a trabalhar com o mínimo de esforço. Certifique-se de conferir o restante da documentação para obter informações mais detalhadas.

```tsx
import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native'

import R2U from '@r2u/react-native-ar-sdk'

const customerId = '5e8e7580404328000882f4ae' // Lembre de usar o seu ID
const sku = 'RE000001' // Informação retirada da página do seu produto

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
