---
title: Primeiros passos
---

Veja como é fácil integrar nossa solução em seu site usando uma tag [`<iframe>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe), tudo que você precisa são das informações de seu `CUSTOMER_ID` e `SKU` de seus produtos.

## Viewer R2U

Nosso Viewer permite que você renderize um modelo 3D em tela cheia, passando dois parâmetros através da URL:
- `CUSTOMER_ID`
- `SKU`

```
https://viewer.r2u.io/embed?customerId=CUSTOMER_ID&sku=SKU
```

## Integração com Iframe

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

Nós recomendamos que você utilize essas propriedades, em sua tag `<iframe>`, para desfrutar de uma melhor experiência:

- `width=100%`
- `height=100%`
- `frameborder=0`
- `scrolling="no"`
- `allowxr="yes"`
- `allow="xr-spatial-tracking;fullscreen;camera"`

**Obs:** algumas dessas propriedades não surtirão efeito no momento, porém, recomendamos que você as mantenha para futuras atualizações.