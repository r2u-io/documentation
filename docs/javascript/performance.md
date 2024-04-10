---
title: Performance SDK
---

The size of the SDK that will run on the client's page is directly linked to which features of it will be used. The more distinct functions called by the user's page, the greater the network traffic required to retrieve such features from the CDN. All of this happens **asynchronously** and **on demand**, which means that to use our services it is only necessary to download a tiny file of just **6KB** and, as needed, the SDK itself takes care of downloading the necessary features asynchronously **without affecting** the initial page load.

📢 By utilizing lazy loading technique, when a new SDK feature is requested, the system will need to download the corresponding package **only once**. After that, this function can be called as many times as necessary without additional downloads.

🌐 Additionally, the _bundles_ files, which are downloaded _on demand_, are also saved in **network cache** and **local cache** (on the user's computer). Therefore, after the first page load, where a few KB of the library are downloaded, future loads will already be pre-saved in _disk cache_ on the user's computer.

Below are the functionalities in question along with their respective bundle download size:

| Functionalities                                        | Description                                                                     | Download (KB) |
| ------------------------------------------------------ | ------------------------------------------------------------------------------- | ------------- |
| index.js                                               | Main file required to use the SDK (only part that will download synchronously). | 5.3           |
| R2U.init                                               | Initialize the SDK.                                                             | 161.3         |
| R2U.config.changeLanguage                              | Change the SDK language.                                                        | 2.2           |
| R2U.sku.isActive <br /> R2U.sku.getData                | Functions to return data referring to the SKU.                                  | 11.3          |
| R2U.ar.attach <br /> R2U.ar.open <br /> R2U.ar.getLink | Functions related to augmented reality.                                         | 334.9         |
| R2U.viewer.create                                      | Function to insert the 3D viewer on the page.                                   | 414.4         |
| R2U.qrCode.create                                      | Function to generate the augmented reality QR Code.                             | 153.5         |
| R2U.analytics.send                                     | Function to send an analytics event.                                            | 1.2           |
