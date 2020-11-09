// customerId e sku de teste -- lembre de substituir pelas suas informações
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

function addCustomizer() {
  openCustomizer.onclick = onClickExpand
  customizerBackground.addEventListener('mousedown', onClickExit)
  customizer.addEventListener('mousedown', onClickViewer)

  R2U.customizer.create({
    element: customizer,
    sku,
    onConfirm: (e) => console.log(e)
  })
}
