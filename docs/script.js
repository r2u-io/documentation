// customerId e sku de teste -- lembre de substituir pelas suas informações
const customerId = '5e8e7580404328000882f4ae'
const sku = 'RE000001'
const name = 'Cadeira Eames'

setupR2U = () =>
  window.R2U.init({ customerId }).then(() => {





    R2U.sku.isActive(sku).then((isActive) => {
      console.log(`[R2U] sku ${sku} ativo? ${isActive}`)
      if (isActive) {
        addARButtons()
        addCustomizer()
        addViewers()
      }
    })
  })

if ('R2U' in window) {
  setupR2U()
} else {
  document.addEventListener('R2USkdLoaded', setupR2U)
}
