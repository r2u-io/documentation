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

Sometimes you might end up in some trouble by getting an older version of the SDK. To fix this, either:

- Double check you are using the latest version latest version of the SDK

```html
<script src="https://unpkg.com/@r2u/javascript-ar-sdk/dist/index.js"></script>
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

Please get in touch (contact@r2u.io) to clear this issue.

### 3D Viewer and AR Button don't appear

If you didn't get any errors cited here, you may not have approved the model yet on our [console](https://console.r2u.io/).

### Performance SDK

If you want to check more about the size of our SDK and how it affects the loading performance of the webpage, see our notion page that details it [here](https://r2u.notion.site/Performance-SDK-af7a42626ba14c1bb264633f8932a222).
