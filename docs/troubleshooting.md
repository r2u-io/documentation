---
title: Troubleshooting
---

### Initialization

If you bump into an error in the initialization, you may have forgotten that the `R2U.init` function is asynchronous. The solution is to `await` the method before calling the others. Here are two implementation possibilities:

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

- Add the package with `yarn`
```bash
yarn add @r2u/javascript-ar-sdk
```

### R2U.viewer.create / R2U.ar.attach

Remember that these functions have specific parameters.
```typescript
// The next line:
R2U.viewer.create({ element, ... })
// is equivalent to:
R2U.viewer.create({ element: element, ... })
```

The correct implementation is to simply explicit the parameters:
```typescript
R2U.viewer.create({ element: fooBar, ... })
```

### Uncaught TypeError: Cannot read property 'assets' of undefined

This error means that the SKU that you are calling isn't in our database. If you think the SKU you are calling is correct, some common causes are listed here:

- the SKU wasn't created yet on our database
- the SKU you are calling doesn't match the one we have

Please enter in contact (contat@r2u.io) to have these aligned.

### 3D Viewer and AR Button don't appear 

If you didn't get any errors cited here, you may not have approved the model yet on our [console](https://console.r2u.io/).