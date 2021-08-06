---
title: Visualizador 3D
---

Após adicionar a dependência ao seu aplicativo, os métodos de criação de um visualizador 3D estarão disponíveis através do objeto `R2U`.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/react-native-viewer.png" title="Visualizador 3D" width="200"/>
</p>

## R2U.viewer.getLink

:::tip `mobile`
:::

Retorna a URL do visualizador do modelo 3D, para ser usado em uma webview como [react-native-webview](https://github.com/react-native-webview/react-native-webview).

```tsx
// Demo usando React Hooks
// import react, etc.
import { WebView } from 'react-native-webview' // Necessário para mostrar o modelo 3D dentro do app
import R2U from '@r2u/react-native-ar-sdk'
const customerId = '5e8e7580404328000882f4ae' // Lembre-se de usar o seu ID
const sku = 'RE000001' // Informação da sua página de produto

const App: React.FC = () => {
  const [init, setInit] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [canOpenAR, setCanOpenAR] = useState(false)
  const [uri, setUri] = useState('')

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

  useEffect(async () => {
    if (!init || !isActive) return
    const link = await R2U.viewer.getLink(sku)
    setUri(link)
  }, [isActive])

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {uri ? <WebView source={{ uri }} /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
```
