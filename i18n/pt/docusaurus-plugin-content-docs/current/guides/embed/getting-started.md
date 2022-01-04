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
