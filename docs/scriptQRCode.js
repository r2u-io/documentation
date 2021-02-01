const qrCode = document.getElementById('r2u-qrcode')

function addQRCode() {
  R2U.qrCode.create({
    element: qrCode,
  })
}
