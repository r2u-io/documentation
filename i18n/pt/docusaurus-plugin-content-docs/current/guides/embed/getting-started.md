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

## Parâmetros de consulta de customização
Também é possível passar alguns parâmetros de consulta para personalizar a experiência via iframe:

| Parâmetro | Descrição | Tipo | Padrão |
| :-: | - | :-: | :-: |
| `showPdpButton` | Define se o viewer deve ou não exibir um botão de página de produto. Caso nenhum link de página de produto seja especificado nem no cadastro do produto na plataforma nem via parâmetros de consulta, o botão não será mostrado. | *booleano* <br /> `0` \| `1` | `0`
| `pdpUrl` | Define a URL para onde o botão de página de produto deve direcionar. | *link* | *cadastrado na plataforma*
| `pdpButtonText` | Personaliza o texto dentro do botão da página de produto. Caso não seja informado, utilizará o valor padrão na língua utilizada (Espanhol, Português ou Inglês) | *texto* | Ver página de produto
| `logoUrl` | Personaliza a logo de cliente que é exibida junto ao botão da página de produto. | *link para imagem* | *cadastrado na plataforma*
| `showLogo` | Define se uma logo deverá ou não aparecer dentro do botão de página de produto. Por padrão, exibe se existir algum link especificado, seja pelo cadastro na plataforma ou por parâmetro `logoUrl`; caso contrário, não exibe. Caso nenhum link tenha sido especificado mas ainda assim o parâmetro showLogo seja verdadeiro (`1`), o Viewer gera uma logo. | *booleano* <br /> `0` \| `1` | *ver descrição* |
| `pdpButtonPositionH` | Especifica a posição horizontal do botão de página de produto. |  `left` \| `center` \| `right` | `right` |
| `pdpButtonPositionV` | Especifica a posição vertical do botão de página de produto. |  `top` \| `bottom` | `top` |
O exemplo a seguir exibe um botão de página de produto com logo e escrito "Ver produto":

`viewer.r2u.io/embed?customerId=...&sku=...&showPdpButton=1&showLogo=1&pdpButtonText=Ver%20produto`