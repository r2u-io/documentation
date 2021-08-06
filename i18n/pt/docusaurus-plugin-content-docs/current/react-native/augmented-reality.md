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
  const [init, setInit] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [canOpenAR, setCanOpenAR] = useState(false)

  useEffect(async () => {
    await R2U.init({ customerId })
    setInit(true)
    const isSupported = await R2U.ar.isSupported()
    setCanOpenAR(isSupported)
  }, [])


  // certifique-se de exibir o botão RA apenas em dispositivos compatíveis
  <Button
    title="Veja no seu espaço"
    onPress={() => R2U.ar.open({ sku })}
    disabled={!init || !isActive || !canOpenAR}
  ></Button>
```
