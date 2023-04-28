---
title: Primeiros passos
---

Você pode facilmente integrar nossa solução em seu site usando uma tag [`<iframe>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe), tudo que você precisa são as informações sobre o seu `CUSTOMER_ID` e o `SKU` dos seus produtos.

## Viewer R2U

Nosso Viewer permite que você renderize um modelo 3D em tela cheia, passando o `CUSTOMER_ID` e o `SKU` como parâmetros de consulta para a URL.

```
https://viewer.r2u.io/embed?customerId=CUSTOMER_ID&sku=SKU
```

## Integração

Para realizar essa integração, você precisa preencher a propriedade `src` da tag `<iframe>` com a URL do Viewer, lembrando de passar os parâmetros (`CUSTOMER_ID` e `SKU`) preenchidos corretamente.

```html
<iframe
  src="https://viewer.r2u.io/embed/?customerId=CUSTOMER_ID&sku=SKU"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="no"
  allowxr="yes"
  allow="xr-spatial-tracking;fullscreen;camera"
></iframe>
```

Nós recomendamos que você utilize estas propriedades, em sua tag `<iframe>`, para desfrutar de uma melhor experiência:

- `width=100%`
- `height=100%`
- `frameborder=0`
- `scrolling="no"`
- `allowxr="yes"`
- `allow="xr-spatial-tracking;fullscreen;camera"`

**Obs:** algumas dessas propriedades não surtirão efeito no momento, porém, recomendamos que você as mantenha para futuras atualizações.

## Parâmetros adicionais
Também é possível passar alguns parâmetros de consulta para personalizar a experiência via iframe:

### showPdpButton
Define se o viewer deve ou não exibir um botão de página de produto. Por padrão, não exibe.
**Valores aceitos:**
0 (esconder) ou 1 (exibir)
**Exemplo:**
`https://viewer.r2u.io/?...&showPdpButton=1`
**Obs.:** Caso nenhum link de página de produto seja especificado nem no cadastro do produto na plataforma nem via parâmetros de consulta, o botão não será mostrado.

### pdpUrl
Define a URL para onde o botão de página de produto deve linkar. Por padrão, utiliza o link cadastrado na plataforma, a menos que especificado por parâmetro de consulta.
**Valores aceitos:**
Links
**Exemplo:**
`https://viewer.r2u.io/?...&pdpUrl=https://www.google.com`

### pdpButtonText
Personaliza o texto dentro do botão da página de produto. Caso não seja informado, exibirá "Ver página de produto" na linguagem utilizada (português, espanhol ou inglês).
**Valores aceitos:**
Texto
**Exemplo:**
`https://viewer.r2u.io/?...&pdpButtonText=Ver%20produto`

### logoUrl
Personaliza a logo de cliente que é exibida junto ao botão da página de produto. Por padrão, utiliza a imagem cadastrada pelo cliente (customerId) na plataforma da R2U.
**Valores aceitos:**
Link para uma imagem
**Exemplo:**
`https://viewer.r2u.io/?...&logoUrl=https://www.example.com/image.jpg`

### showLogo
Define se uma logo deverá ou não aparecer dentro do botão de página de produto. Por padrão, exibe somente se existir algum link especificado, seja pelo cadastro na plataforma ou por parâmetro de consulta. Caso nenhum link seja especificado e mesmo assim o parâmetro showLogo seja especificado como verdadeiro, a experiência gera uma logo automaticamente.
**Valores aceitos:**
0 (não exibir) ou 1 (exibir)
**Exemplo:**
`https://viewer.r2u.io/?...&showLogo=0`

### pdpButtonPositionH
Especifica a posição horizontal do botão de página de produto. Por padrão, fica à direita.
**Valores aceitos:**
`left`, `center` ou `right`
**Exemplo:**
`https://viewer.r2u.io/?...&pdpButtonPositionH=left`

### pdpButtonPositionV
Especifica a posição vertical do botão de página de produto. Por padrão, fica no topo.
**Valores aceitos:**
`top` ou `bottom`
**Exemplo:**
`https://viewer.r2u.io/?...&pdpButtonPositionV=bottom`