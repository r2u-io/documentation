---
title: Configurando seus produtos
---

## Importando nosso App

Primeiramente, deve-se importar nosso App para a sua loja. No arquivo `manifest.json`, adicione a seguinte dependência:
```
"r2ubr.r2u-vtex-integration": "0.x"
```

## Adicionando nossas soluções à página do seu produto

Para fazer nosso Visualizador 3D e o botão de Experiência RA aparecerem na sua página de produto, insira alguma linhas no arquivo de **template de produto json**.

### Visualizador 3D
```
"responsive-layout.desktop": {
  "children": ["r2u-model-viewer"]
}
```
Observe que o visualizador 3D deve ser exibido somente em desktops.


### Experiência RA
```
"responsive-layout.phone": {
  "children": ["r2u-ar-button"]
}
```
Observe que o botão de RA deve ser exibido somente em dispositivos móveis.