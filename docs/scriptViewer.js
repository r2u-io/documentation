// customerId e sku de teste -- lembre de substituir pelas suas informações
const viewer = document.getElementById('viewer-default')
const viewerNoPopup = document.getElementById('viewer-no-popup')

R2U.init({ customerId }).then(() => {
  R2U.isActive(sku).then((isActive) => {
    console.log(`[R2U] sku ${sku} ativo? ${isActive}`)
    if (isActive) {
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
  })
})
