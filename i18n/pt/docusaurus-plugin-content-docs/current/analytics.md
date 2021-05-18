---
title: Analytics
---

## Configuração Analytics

O SDK de Realidade Aumentada R2U por padrão gera eventos de utlização, como impressões e cliques dos viusalizadores 3D.

Os passos a seguir descrevem as configurações para que esses dados estejam disponíveis no Google Analytics.

### 1. Configuração Google Tag Manager (GTM)

- Faça download do arquivo de configuração [GTM-R2U-setup.json](https://raw.githubusercontent.com/r2u-io/documentation/master/gtm_setup/files/GTM-R2U-setup.json)
- Na aba Administrador clique em Importar contêiner

  <div>
    <p float="left">
      <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/GTM-setup-screen-01-pt-br.png" title="GTM-setup-1" width="600"/>
    </p>
  </div>

- Escolha o arquivo de configuração (GTM-R2U-setup.json)

- Em Escolher área de trabalho, selecione Existente e use a área de trabalho com a variável do Google Analytics

- Selecione a opção Combinar e confirme

  <div>
    <p float="left">
      <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/GTM-setup-screen-02-pt-br.png" title="GTM-setup-2" width="600"/>
    </p>
  </div>

- Configure as tags UA - R2U attribution e UA - R2U events para usar a variável do Google Analytics

   <div>
    <p float="left">
      <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/GTM-setup-screen-03-pt-br.png" title="GTM-setup-3" width="600"/>
    </p>
  </div>

- Publique as mudanças

### 2. Configuração Google Analytics (GA)

- Importe os segmentos e report da R2U via este [link](https://analytics.google.com/analytics/web/provision/?authuser=0&utm_source&utm_medium&utm_term&utm_content&utm_campaign#/provision) e aplique na view com os dados do site
