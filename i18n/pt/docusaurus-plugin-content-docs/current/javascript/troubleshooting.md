---
title: Solução de problemas
---

### Inicialização

Se um erro de inicialização aparecer, talvez você tenha se esquecido de que a função `R2U.init` é assíncrona. A solução é esperar (`await`) o método completar antes de chamar os outros. Aqui estão duas possibilidades de implementação:

```typescript
await R2U.init(...)
```

```typescript
R2U.init(...).then(() => R2U.ar.attach(...))
```

### Versão do SDK

Algumas vezes o erro pode ser causado por sua aplicação estar com uma versão muito antiga do SDK. Duas possíveis soluções são:

- Confira que você está usando a última versão do SDK
```html
<script src='https://unpkg.com/@r2u/javascript-ar-sdk/dist/index.js'></script>
```

- Adicionar o pacote com `yarn`
```bash
yarn add @r2u/javascript-ar-sdk
```


### R2U.viewer.create / R2U.ar.attach

Lembre-se de que essas funções possuem parâmetros específicos.
```typescript
// A próxima linha:
R2U.viewer.create({ element, ... })
// é equivalente a:
R2U.viewer.create({ element: element, ... })
```

A implementação correta é simplesmente explicitar os parâmetros:
```typescript
R2U.viewer.create({ element: fooBar, ... })
```

### Uncaught TypeError: Cannot read property 'assets' of undefined

Esse erro significa que o SKU que está sendo chamado não está na nossa base de dados. Se você considera que o SKU chamado está correto, algumas causas comuns deste erro são:

- o SKU ainda não foi criado na nossa base
- o SKU que foi chamado não corresponde àquele que nós temos

Por favor entre em contato (contato@r2u.io) para alinhar essas informações.

### Visualizador 3D e Botão RA não aparecem 

Se este é o caso e nenhum dos erros citados aqui te ajudaram, talvez sua equipe ainda não tenha aprovado o modelo no nosso [console](https://console.r2u.io/).