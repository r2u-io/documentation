// customerId e sku de teste -- lembre de substituir pelas suas informações
const progressBarPosition = 'top' // top | middle | bottom
const progressBarColor = '#c5c5c5'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

const viewer = document.getElementById('viewer-default')
const viewerNoPopup = document.getElementById('viewer-no-popup')

function addViewers() {
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
}
