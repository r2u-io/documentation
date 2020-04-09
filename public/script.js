const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'

Real2U.init({customerId})
  .then(() => {
    const element = document.getElementById('3d-viewer')
    Real2U.create3DViewer({element, sku, name})

    const arButton = document.getElementById('ar-button')
    arButton.onclick = () => Real2U.openAR({sku, name})
  })
