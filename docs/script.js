// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'
const progressBarPosition = 'top' // top | middle | bottom
const progressBarColor = '#c5c5c5'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

R2U.init({ customerId }).then(() => {
  R2U.isActive(sku).then((isActive) => {
    console.log(`[R2U] sku ${sku} ativo? ${isActive}`)
    if (isActive) {
      const element = document.getElementById('3d-viewer')
      R2U.create3DViewer({ element, sku, name, progressBarPosition, poster, progressBarColor })

      const arButton = document.getElementById('ar-button')
      arButton.onclick = () => R2U.openAR({ sku })
    }
  })
})
