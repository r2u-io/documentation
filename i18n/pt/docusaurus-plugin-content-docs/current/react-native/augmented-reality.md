---
title: Realidade Aumentada
---

Após adicionar a dependência ao seu aplicativo, os métodos para criar a experiência de Realidade Aumentada estarão disponíveis através do objeto `R2U`.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/react-native-ar.gif" title="AR" width="200"/>
</p>

## R2U.ar.isSupported

:::tip `mobile`
:::

Retorna verdadeiro se o dispositivo suportar Realidade Aumentada. Veja a lista de dispositivos suportados para [iOS](https://www.apple.com/augmented-reality/) e [Android](https://developers.google.com/ar/devices).

## R2U.ar.open

:::tip `mobile`
:::

O método `ar.open` exibe o modelo `sku` fornecido dentro da experiência AR. Por padrão, o parâmetro `resize` é `false`.

```tsx
import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-native'

import R2U from '@r2u/react-native-ar-sdk'

const customerId = '5e8e7580404328000882f4ae' // Lembre-se de usar seu ID
const sku = 'RE000001' // Retirado da sua página de produto

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
