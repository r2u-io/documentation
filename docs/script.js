// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'
const progressBarPosition = 'top' // top | middle | bottom
const progressBarColor = '#c5c5c5'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

const viewer = document.getElementById('viewer-3d')
const modal = document.getElementById('modal')
const expandButton = document.getElementsByClassName('expand-button')[0]
const exitButton = document.getElementsByClassName('exit-button')[0]

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
      }).then(initializeElements)
    }
  })
})

const initializeElements = () => {
  expandButton.classList.remove('hide')
  exitButton.classList.remove('hide')

  expandButton.onclick = onClickExpand
  exitButton.onclick = onClickExit

  const expandViewer = viewer.cloneNode(true)
  modal.appendChild(expandViewer)
  expandViewer.getElementsByTagName('model-viewer')[0].classList.add('big')

  viewer.firstChild.appendChild(expandButton)
  expandViewer.firstChild.appendChild(exitButton)

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
