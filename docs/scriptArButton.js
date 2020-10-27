// customerId e sku de teste -- lembre de substituir pelas suas informações
R2U.init({ customerId }).then(() => {
  R2U.isActive(sku).then((isActive) => {
    console.log(`[R2U] sku ${sku} ativo? ${isActive}`)
    if (isActive) {
      const arButton1 = document.getElementById('ar-button-default')
      arButton1.onclick = () => R2U.ar.open({ sku })

      const arButton2 = document.getElementById('ar-button-alert')
      arButton2.onclick = () =>
        R2U.ar.open({
          sku,
          fallbackOptions: {
            alertMessage: 'AR not supported'
          }
        })

      const arButton3 = document.getElementById('ar-button-viewer')
      arButton3.onclick = () =>
        R2U.ar.open({
          sku,
          fallbackOptions: {
            fallback: 'viewer'
          }
        })

      const arButton4 = document.getElementById('ar-button-full')
      arButton4.onclick = () =>
        R2U.ar.open({
          sku,
          fallbackOptions: {
            fallback: 'full'
          }
        })

      const arButton5 = document.getElementById('ar-button-alert-viewer')
      arButton5.onclick = () =>
        R2U.ar.open({
          sku,
          fallbackOptions: {
            alertMessage: 'AR not supported',
            fallback: 'viewer'
          }
        })
    }
  })
})
