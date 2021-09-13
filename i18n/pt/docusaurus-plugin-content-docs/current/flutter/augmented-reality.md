---
title: Realidade Aumentada
---

Após adicionar a dependência ao seu aplicativo, os métodos para criar a experiência de Realidade Aumentada estarão disponíveis através do objeto `R2U`.

<!-- TODO: Insert gif here -->

## R2U.deviceSupportsAR

:::tip `mobile`
:::

Retorna verdadeiro se o dispositivo suportar Realidade Aumentada. Veja a lista de dispositivos suportados para [iOS](https://www.apple.com/augmented-reality/) e [Android](https://developers.google.com/ar/devices).

## R2U.openAR

:::tip `mobile`
:::

O método `ar.open` exibe o modelo `sku` fornecido dentro da experiência AR. Por padrão, o parâmetro `resize` é `false`. Certifique-se de exibir o botão RA apenas em dispositivos compatíveis