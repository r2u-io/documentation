<img src="https://scripts-ignition.real2u.com.br/real2u-integration/logo.png" title="logo" width="250"/>  

# Real2U Integration  

SDK de integração da plataforma de Realidade Aumentada Real2U.
Para utilizar, adicione a seguinte script tag no HTML do site:

```html
<script src="https://real2u-ignition-scripts.s3.amazonaws.com/<CLIENT_SLUG>/script.js"></script>
```

Um exemplo de implementação pode ser visto na pasta **examples**.  

## Funções

### Abrir AR  
Recomendado para Mobile por meio de um botão.  
Quando a função é chamada, abre o visualizador AR fullscreen diretamente a partir do browser.

Reconhece se o aparelho é Android ou iOS.
```javascript
Real2U.openAR ({ sku, name }) 
```

#### Exemplo  
```javascript
const arButton = document.getElementById('ar-buton')
const sku = '123456'
const name = 'Cadeira Preta'

arButton.onclick = () => Real2U.openAR({sku, name})
```

*iOS*

<img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="250"/>  
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="250"/>  
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="250"/>  

*Android*

<img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="250"/>  
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="250"/>  
<img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="250"/>  

### Visualizador 3D 
Recomendado para Desktop.  
Cria um visualizador 3D na posição do elemento HTML indicado na entrada. O visualizador ocupa 100% da largura onde ele está posicionado e, após o clique, abre um popup para a interação com o objeto.

```javascript
Real2U.create3DViewer ({ element, sku, name })
```

*Desktop*

<img src="https://scripts-ignition.real2u.com.br/real2u-integration/desktop-1.png" title="Desktop 1" width="250"/>  

#### Exemplo  
```javascript
const element = document.getElementById('3d-viewer')
const sku = '123456'
const name = 'Cadeira Preta'

Real2U.create3DViewer({element, sku, name})
```