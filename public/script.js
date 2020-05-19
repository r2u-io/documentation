// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'
const popup = false
const progressBarPosition = 'middle' // top | middle | bottom
const poster = 'cadeira.png'

Real2U.init({customerId})
  .then(() => {
    Real2U.isActive(sku).then(isActive => {
      console.log(`[Real2U] sku ${sku} ativo? ${isActive}`)
      if(isActive) {
        const element = document.getElementById('3d-viewer')
        Real2U.create3DViewer({element, sku, name, popup, progressBarPosition, poster})

        const arButton = document.getElementById('ar-button')
        arButton.onclick = () => Real2U.openAR({sku, name})
      }
    })
  })
