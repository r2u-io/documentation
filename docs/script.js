// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'
const progressBarPosition = 'top' // top | middle | bottom
const progressBarColor = '#c5c5c5'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

const viewer = document.getElementById('viewer-3d')
const viewerPopup = document.getElementById('viewer-3d-popup')
const viewerCustom = document.getElementById('viewer-3d-custom')
const expandViewer = document.getElementById('viewer-3d-expand')
const modal = document.getElementById('modal')
const expandButton = document.getElementsByClassName('expand-button')[0]
const exitButton = document.getElementsByClassName('exit-button')[0]

R2U.init({ customerId }).then(() => {
  R2U.isActive(sku).then((isActive) => {
    console.log(`[R2U] sku ${sku} ativo? ${isActive}`)
    if (isActive) {
      const arButton = document.getElementById('ar-button')
      arButton.onclick = () => R2U.openAR({ sku })

      R2U.create3DViewer({
        element: viewer,
        sku,
        name,
        progressBarPosition,
        poster,
        progressBarColor
      })

      R2U.create3DViewer({
        element: viewerPopup,
        sku,
        name,
        progressBarPosition,
        popup: true,
        poster,
        progressBarColor
      })

      R2U.create3DViewer({
        element: viewerCustom,
        sku,
        name,
        progressBarPosition,
        poster,
        progressBarColor
      })

      R2U.create3DViewer({
        element: expandViewer,
        sku,
        name,
        progressBarPosition,
        poster,
        progressBarColor
      }).then(initializeElements)
    }
  })
})

const initializeElements = () => {
  expandButton.classList.remove('hide')
  exitButton.classList.remove('hide')

  expandButton.onclick = onClickExpand
  exitButton.onclick = onClickExit

  expandViewer.getElementsByTagName('model-viewer')[0].classList.add('big')

  viewerCustom.getElementsByTagName('model-viewer')[0].appendChild(expandButton)
  expandViewer.getElementsByTagName('model-viewer')[0].appendChild(exitButton)

  modal.addEventListener('mousedown', onClickExit)
  expandViewer.addEventListener('mousedown', onClickViewer)
}

const onClickExpand = () => {
  modal.style.display = 'block'
}

const onClickExit = () => {
  modal.style.display = 'none'
}

const onClickViewer = (e) => {
  e.preventDefault()
  e.stopPropagation()
  e.stopImmediatePropagation()
  return false
}
