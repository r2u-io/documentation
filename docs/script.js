// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'
const progressBarPosition = 'top' // top | middle | bottom
const progressBarColor = '#c5c5c5'
const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'

const viewer = document.getElementById('viewer-3d')
const modal = document.getElementById('modal')
const container = document.getElementById('viewer-container')
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

  expandButton.onclick = onClickExpand
  exitButton.onclick = onClickExit

  viewer.firstChild.appendChild(expandButton)
  viewer.firstChild.appendChild(exitButton)

  modal.addEventListener('mousedown', onClickExit)
  viewer.addEventListener('mousedown', onClickViewer)
}

const onClickExpand = () => {
  expandButton.classList.add('hide')
  exitButton.classList.remove('hide')

  modal.style.display = 'block'

  modal.appendChild(viewer)

  document.getElementsByTagName('model-viewer')[0].classList.add('big')
}

const onClickExit = () => {
  expandButton.classList.remove('hide')
  exitButton.classList.add('hide')

  modal.style.display = 'none'

  container.appendChild(viewer)

  document.getElementsByTagName('model-viewer')[0].classList.remove('big')
}

const onClickViewer = (e) => {
  e.preventDefault()
  e.stopPropagation()
  e.stopImmediatePropagation()
  return false
}
