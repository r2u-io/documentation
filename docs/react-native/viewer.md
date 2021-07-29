---
title: 3D Viewer
---

After adding the dependency to your app, the methods for creating a 3D Viewer will be available through the `R2U` object.

<p float="left">
  <img src="https://sdk.r2u.io/documentation/react-native-viewer.png" title="3D Viewer" width="200"/>
</p>

## R2U.viewer.getLink

:::tip `mobile`
:::

Returns the 3D model viewer URL, to be used in a webview such as [react-native-webview](https://github.com/react-native-webview/react-native-webview).

```tsx
// Demo using React Hooks
// import react, etc.
import { WebView } from 'react-native-webview' // Needed to display the 3D model inside the app
import R2U from '@r2u/react-native-ar-sdk'
const customerId = '5e8e7580404328000882f4ae' // Remember to use your ID
const sku = 'RE000001' // Gather from your product page

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
