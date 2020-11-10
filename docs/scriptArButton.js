// customerId e sku de teste -- lembre de substituir pelas suas informações
const arButton1 = document.getElementById('ar-button-default')
const arButton2 = document.getElementById('ar-button-alert')
const arButton3 = document.getElementById('ar-button-viewer')
const arButton4 = document.getElementById('ar-button-full')
const arButton5 = document.getElementById('ar-button-alert-viewer')

function addARButtons() {
  arButton1.onclick = () => R2U.ar.open({ sku })

  arButton2.onclick = () =>
    R2U.ar.open({
      sku,
      fallbackOptions: {
        alertMessage: 'AR not supported'
      }
    })

  arButton3.onclick = () =>
    R2U.ar.open({
      sku,
      fallbackOptions: {
        fallback: 'viewer'
      }
    })

  arButton4.onclick = () =>
    R2U.ar.open({
      sku,
      fallbackOptions: {
        fallback: 'full'
      }
    })

  arButton5.onclick = () =>
    R2U.ar.open({
      sku,
      fallbackOptions: {
        alertMessage: 'AR not supported',
        fallback: 'viewer'
      }
    })
}
