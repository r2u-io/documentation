// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'
const popup = false
const progressBarPosition = 'top' // top | middle | bottom
const progressBarColor='#c5c5c5'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

Real2U.init({customerId})
  .then(() => {
    Real2U.isActive(sku).then(isActive => {
      console.log(`[Real2U] sku ${sku} ativo? ${isActive}`)
      if(isActive) {
        const element = document.getElementById('3d-viewer')
        Real2U.create3DViewer({element, sku, name, popup, progressBarPosition, poster, progressBarColor})

        const arButton = document.getElementById('ar-button')
        arButton.onclick = () => Real2U.openAR({sku, name})
      }
    })
  })