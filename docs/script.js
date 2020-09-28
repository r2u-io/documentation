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
      const arButton = document.getElementById('ar-button')
      arButton.onclick = () => R2U.openAR({ sku })

      const element = document.getElementById('viewer-3d')
      R2U.create3DViewer({
        element,
        sku,
        name,
        progressBarPosition,
        poster,
        progressBarColor
      }).then(() => {

        const button = document.createElement('button')
        const img = document.createElement('img')
        img.src = './ExpandButtonImage.png'
        img.style = 'width:36px;'
        button.appendChild(img)
        button.style = 'bottom:0;right:0;position:fixed;padding:0;border:none;background:none;margin:12px;'
        element.firstChild.appendChild(button)

      })
    }
  })
})
