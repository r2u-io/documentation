// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'
const progressBarPosition = 'top' // top | middle | bottom
const progressBarColor = '#c5c5c5'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

const viewer = document.getElementById('viewer-default')
const viewerNoPopup = document.getElementById('viewer-no-popup')

const openCustomizer = document.getElementById('open-customizer')
const customizer = document.getElementById('customizer')
const customizerBackground = document.getElementById('customizer-background')

const fallbackOptions2 = {
  alertMessage: 'AR not supported'
}
const fallbackOptions3 = {
  fallback: 'viewer'
}
const fallbackOptions4 = {
  fallback: 'full'
}
const fallbackOptions5 = {
  alertMessage: 'AR not supported',
  fallback: 'viewer'
}

const onClickExpand = () => {
  customizerBackground.classList.remove('hide')
}

const onClickExit = () => {
  customizerBackground.classList.add('hide')
}

const onClickViewer = (e) => {
  e.preventDefault()
  e.stopPropagation()
  e.stopImmediatePropagation()
  return false
}

R2U.init({ customerId }).then(() => {
  openCustomizer.onclick = onClickExpand
  customizerBackground.addEventListener('mousedown', onClickExit)
  customizer.addEventListener('mousedown', onClickViewer)

  R2U.customizer.create({
    element: customizer,
    sku,
    onConfirm: (e) => console.log(e)
  })

  R2U.isActive(sku).then((isActive) => {
    console.log(`[R2U] sku ${sku} ativo? ${isActive}`)
    if (isActive) {
      R2U.viewer.create({
        element: viewer,
        sku,
        name,
        progressBarPosition,
        poster,
        progressBarColor
      })

      R2U.viewer.create({
        element: viewerNoPopup,
        sku,
        name,
        progressBarPosition,
        popup: false,
        poster,
        progressBarColor
      })

      const arButton1 = document.getElementById('ar-button-default')
      arButton1.onclick = () => R2U.ar.open({ sku })

      const arButton2 = document.getElementById('ar-button-alert')
      arButton2.onclick = () => R2U.ar.open({ sku, fallbackOptions: fallbackOptions2 })

      const arButton3 = document.getElementById('ar-button-viewer')
      arButton3.onclick = () => R2U.ar.open({ sku, fallbackOptions: fallbackOptions3 })

      const arButton4 = document.getElementById('ar-button-full')
      arButton4.onclick = () => R2U.ar.open({ sku, fallbackOptions: fallbackOptions4 })

      const arButton5 = document.getElementById('ar-button-alert-viewer')
      arButton5.onclick = () => R2U.ar.open({ sku, fallbackOptions: fallbackOptions5 })
    }
  })
})
