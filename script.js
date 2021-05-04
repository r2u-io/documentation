// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5dd82edbc79e040008e8f8b9'
const sku = '38034'
const name = 'Cadeira Eames'

async function addViewers() {
  const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

  const element = document.getElementById('viewer')
  const buttonChangeSku = document.getElementById('sku')

  const handler = R2U.viewer.create({
    element,
    sku,
    name,
    poster
  })

  buttonChangeSku.addEventListener('click', () => {
    handler.setSku('RE000002')
  })
}

function addARButtons() {
  const element = document.getElementById('ar')
  R2U.ar.attach({
    element,
    sku,
    showInstructions: true,
    fallbackOptions: {
      fallback: 'viewer',
      text: {
        title: 'Oops 😢',
        top: 'Infelizmente não conseguimos abrir a experiência de RA no seu dispositivo',
        bottom: 'Mas aproveite o modelo acima para ver todos os lados do produto!'
      }
    }
  })
}

function addCustomizer() {
  const openCustomizer = document.getElementById('open-customizer')
  const customizer = document.getElementById('customizer')
  const customizerBackground = document.getElementById('customizer-background')

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
  openCustomizer.onclick = onClickExpand
  customizerBackground.addEventListener('mousedown', onClickExit)
  customizer.addEventListener('mousedown', onClickViewer)

  R2U.customizer.create({
    element: customizer,
    sku,
    onConfirm: (e) => console.log(e)
  })
}

function addQRCode() {
  const element = document.getElementById('qrcode')
  R2U.qrCode.create({
    element
  })
}

const setupR2U = () =>
  window.R2U.init({ customerId }).then(() => {
    R2U.sku.isActive(sku).then((isActive) => {
      console.log(`[R2U] sku ${sku} ativo? ${isActive}`)
      if (isActive) {
        // addARButtons()
        addCustomizer()
        // addViewers()
        // addQRCode()
      }
    })
  })

if ('R2U' in window) {
  console.log('test')
  setupR2U()
} else {
  console.log('test2')

  document.addEventListener('R2USkdLoaded', setupR2U)
}
