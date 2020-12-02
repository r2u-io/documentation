// customerId e sku de teste -- lembre de substituir pelas suas informações
const arButton1 = document.getElementById('ar-button-default')
const arButton2 = document.getElementById('ar-button-alert')
const arButton3 = document.getElementById('ar-button-viewer')
const arButton4 = document.getElementById('ar-button-full')
const arButton5 = document.getElementById('ar-button-all')

function addARButtons() {
  R2U.ar.create({ element: arButton1, sku })

  R2U.ar.create({
    element: arButton2,
    sku,
    fallbackOptions: {
      alertMessage: 'AR not supported'
    }
  })

  R2U.ar.create({
    element: arButton3,
    sku,
    fallbackOptions: {
      fallback: 'viewer'
    }
  })

  R2U.ar.create({
    element: arButton4,
    sku,
    fallbackOptions: {
      fallback: 'full'
    }
  })

  R2U.ar.create({
    element: arButton5,
    sku,
    fallbackOptions: {
      alertMessage: 'Oops, RA não suportada',
      fallback: 'viewer',
      text: {
        title: 'Oops 😢',
        top: 'Infelizmente não conseguimos abrir a experiência de RA no seu dispositivo',
        bottom: 'Mas aproveite o modelo acima para ver todos os lados do produto!'
      }
    }
  })
}
