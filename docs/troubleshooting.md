---
title: Troubleshooting
---

### Initialization

If you bump into an error in the initialization, you may have forgotten that the `R2U.init` function is asynchronous. The solution is to `await` the method before calling the others. Here are two possibilities:

```typescript
await R2U.init(...)
```

```typescript
R2U.init(...).then(() => R2U.ar.attach(...))
```

### SDK version

Sometimes you might end up in some trouble by getting an older version of the SDK. There are two possible solutions when calling the script:

- Manually get the latest version
```html
<script src='https://unpkg.com/@r2u/javascript-ar-sdk@6.5.4/dist/index.js'></script>
```

- Don't put the version (this way you automatically get the latest version)
```html
<script src='https://unpkg.com/@r2u/javascript-ar-sdk/dist/index.js'></script>
```

### R2U.viewer.create / R2U.ar.attach

Remember that these functions have specific parameters. This next line
```typescript
R2U.viewer.create({ element, ... })
```

is equivalent to:
```typescript
R2U.viewer.create({ element: element, ... })
```

The solution is simply explicit the parameter:
```typescript
R2U.viewer.create({ element: fooBar, ... })
```

### Error 404 - customer.json

Erro 404 no arquivo customer.json  - Quer dizer que o cliente não tem nenhum texto que sobrepõe ao nosso default. Podemos trocar os textos ou criar o arquivo vazio para dar erro (na real erro meu de nunca ter colocado de criar esse JSON quando cria um customer, vou fazer uma task assim). Mas pessoal ficava preocupado que tava com erro no SDK

### Uncaught TypeError: Cannot read property 'assets' of undefined

This error means that the SKU that you are calling isn't in our database. If you think the SKU you are calling are correct, some common causes are listed here:

- it wasn't created yet
- the SKU you are calling doesn't match the one we have

Please enter in contact (contato@r2u.io) to have these aligned.

### 3D Viewer and AR Button don't appear 

If you didn't get any errors cited here, you may not have approved the model yet on our [console](https://console.r2u.io/).