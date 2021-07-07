---
title: Configuring your products
---

## Importing our App

Firstly you have to import our App to your store. On your `manifest.json` file, add the following dependency:
```
"r2ubr.r2u-vtex-integration": "0.x"
```

## Add our solutions to your product page

To make our 3D Viewer and AR Experience Button to appear in your products page, you have to add some lines to your **products template json**.

### 3D Viewer
```
"responsive-layout.desktop": {
  "children": ["r2u-model-viewer"]
}
```
Note that the Viewer 3D must be displayed only on the desktop.


### AR Experience
```
"responsive-layout.phone": {
  "children": ["r2u-ar-button"]
}
```
Note that the AR button must be displayed only on the phone.