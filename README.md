<img src="https://www.real2u.com.br/static/media/logoDark2.2ff8cf38.png" title="logo" width="250"/>  

# Real2U Integration  

SKU de integração do UPlace em sites  

## Abrir AR  
Recomendado para Mobile por meio de um botão.  
Quando a função é chamada, abre o visualizador AR fullscreen.  
Reconhece se o aparelho é Android ou iOS.  
```
Real2U.openAR = function ({ sku, name }) 
```
### Exemplo  
```
const arButton = document.getElementById('ar-buton')
const sku = '42198124'
const name = 'Cadeira Eames Iii Madeira/fibra Sintetica Preto Etna'

arButton.onclick = () => openAR({sku, name})
```

## Criar visualizador 3D  
Recomendado para Desktop.  
Cria um visualizador 3D na posição do elemento HTML indicado na entrada.  
```
Real2U.create3DViewer = function ({ element, sku, name })
```
### Exemplo  
```
const element = document.getElementById('3d-viewer')
const sku = '42198124'
const name = 'Cadeira Eames Iii Madeira/fibra Sintetica Preto Etna'

create3DViewer({element, sku, name})
```