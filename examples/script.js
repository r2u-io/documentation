const sku = '0409595'
const name = 'Cadeira Eames Iii Madeira/fibra Sintetica Preto Etna'

const element = document.getElementById('3d-viewer')
Real2U.create3DViewer({element, sku, name})

const arButton = document.getElementById('ar-button')
arButton.onclick = () => Real2U.openAR({sku, name})