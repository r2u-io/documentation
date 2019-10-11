<img src="https://www.real2u.com.br/static/media/real2u.d8b1b394.png" title="logo" width="250"/>

# Real2U Integration

Real2U Integration SKU

## Abrir AR

```
Real2U.openAR = function ({ sku, name }) 
```
### Exemplo
```
const arButton = document.getElementById('id')
arButton.onclick = () => openAR({42198124, 'Cadeira Eames Iii Madeira/fibra Sintetica Preto Etna'})
```

## Criar visualizador 3D
Recomendado para Desktop
Cria um visualizador 3D conforme a imagem
```
Real2U.create3DViewer = function ({ element, sku, name })
```
### Exemplo
```
const element = document.getElementById('id')
create3DViewer({element, 42198124, 'Cadeira Eames Iii Madeira/fibra Sintetica Preto Etna'})
```