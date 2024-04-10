---
title: Desempenho SDK
---

O tamanho do SDK que rodará na página do cliente está diretamente ligado com quais funcionalidades dele serão utilizadas. Quanto mais funções distintas chamadas pela página do usuário, maior será o tráfego de rede necessário para recuperar tais features da CDN. Tudo isso ocorre de maneira **assíncrona** e **on demand**, o que significa que para utilizar nossos serviços é necessário apenas baixar um arquivo ínfimo de apenas **6KB** e, conforme necessário, o próprio SDK se encarrega de baixar as funcionalidades necessárias assincronamente **sem afetar** o carregamento inicial da página.

📢 Utilizando a técnica de lazy loading, quando uma nova funcionalidade do SDK é requisitada, o sistema precisará fazer o download do pacote correspondente **apenas 1 vez**. Após isso, essa função poderá ser chamada quantas vezes necessário sem downloads adicionais.

🌐 Além disso, os arquivos _bundles_, que são baixados _on demand_, também são salvos em **cache de rede** e em **cache local** (no computador do usuário). Dessa forma, após o primeiro carregamento da página, onde são baixados alguns KB da biblioteca, futuros carregamentos já estarão pré-salvos em _disk cache_, no computador do usuário.

Abaixo podem ser conferidas as funcionalidades em questão junto com seu respectivo tamanho de bundle para download:

| Funcionalidades                                        | Descrição                                                                                     | Download (KB) |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------- |
| index.js                                               | Arquivo principal necessário para utilização do SDK (única parte que fará download síncrono). | 5.3           |
| R2U.init                                               | Inicializa o SDK.                                                                             | 161.3         |
| R2U.config.changeLanguage                              | Muda o idioma do SDK.                                                                         | 2.2           |
| R2U.sku.isActive <br /> R2U.sku.getData                | Funções para retornar dados referentes ao SKU.                                                | 11.3          |
| R2U.ar.attach <br /> R2U.ar.open <br /> R2U.ar.getLink | Funções relacionadas à realidade aumentada.                                                   | 334.9         |
| R2U.viewer.create                                      | Função para inserir o visualizador 3D na página.                                              | 414.4         |
| R2U.qrCode.create                                      | Função para gerar o QR Code da realidade aumentada.                                           | 153.5         |
| R2U.analytics.send                                     | Função para enviar algum evento de analytics.                                                 | 1.2           |
