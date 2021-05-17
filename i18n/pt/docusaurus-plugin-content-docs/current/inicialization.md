---
title: Inicialização
slug:
---

Depois de adicionar a tag de script em seu site, os métodos de inicialização do SDK estarão disponíveis por meio do objeto global R2U.

## R2U.init

O método Init inicializa o SDK e se conecta ao servidor R2U e verifica se o customerId existe na nossa base de dados.

```typescript
// cliente de teste - lembre de substituir pelo seu `customerId`
R2U.init({
  customerId: '5e8e7580404328000882f4ae',
  analyticsParams: {
    dataLayerIntegration: true, // Ativar integração com "dataLayer" do Google Tag Manager (dafault: true)
    sessionDurationMinutes: 30 // Duração máxima de inatividade em minutos dentro de uma sessão. Usar mesmo valor que no Google Analytics (default: 30)
  }
})
  .then(() => console.log('Cliente ativo'))
  .catch((err) => console.error('Cliente inativo'))
```

## R2U.sku.isActive

O método sku.isActive indica se um produto está disponível na plataforma de RA.

```typescript
// cliente de teste -- lembre de substituir pelo seu `sku`
R2U.sku.isActive('RE000001').then((isActive) => console.log(`SKU active? ${isActive ? '✓' : '✗'}`))
```

## R2U.analytics.send

O método analítico envia eventos para a plataforma analítica R2U, para identificar os resultados da integração do nosso SDK.

```typescript
const addToCartButton = document.getElementById('add-to-cart')
addToCartButton.addEventListener('click', () =>
  R2U.analytics.send({
    event: 'add_to_cart',
    data: { price: 30 }
  })
)
```

### Parâmetros

```typescript
interface R2U {
  analytics: {
    send: (params: {
      event: string
      data: Record<string, string | number>
      scope?: 'event' | 'page' | 'session' | 'sku'
    }) => Promise<void>
  }
}
```

Outras métricas e dimensões (tais como SKU, customerId, sistema operacional, etc.) são enviadas automaticamente e não precisam ser especificadas.

Se `analyticsParams.dataLayerIntegration` for `true`, os seguintes eventos são enviados por padrão ao dataLayer:

- `product_page_view`: Enviado em uma vez por página quando `sku.isActive` é chamado, para marcar visualizações de página de produto
- `impression`: Enviado uma até uma vez por visualização de página em que RA / 3D é mostrado
- `click`: Enviado em todos os cliques em RA / visualização 3D

A documentação para enviar os dados do dataLayer para o Google Analytics está [aqui](https://github.com/r2u-io/documentation/blob/master/gtm_setup/Analytics_Setup_pt-br.md)
