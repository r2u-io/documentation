---
title: Solução de problemas
---

### (Android) Missing 'package' key attribute on element package at [com.google.ar:core:1.19.0] AndroidManifest.xml

Esse problema é devido a uma [versão antiga do gradle](https://android-developers.googleblog.com/2020/07/preparing-your-build-for-package-visibility-in-android-11.html) que não suporta ARCore, o SDK de Realidade Aumentada do Google para Android. Para resolver, basta atualizar para a versão 4.1 ou seguir o processo indicado para versões anteriores.
