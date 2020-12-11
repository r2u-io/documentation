# Configuração Analytics

O SDK de Realidade Aumentada R2U por padrão gera eventos de utlização, como impressões e cliques dos viusalizadores 3D.

Os passos a seguir descrevem as configurações para que esses dados estejam disponíveis no Google Analytics.

#### 1. Configuração Google Tag Manager (GTM)

- Faça download do arquivo de configuração [GTM-R2U-setup.json](files/GTM-R2U-setup.json)
- Na aba **Administrador** clique em **Importar contêiner**

![](files/GTM-setup-screen-01-pt-br.png?raw=true 'Importar contêiner')

- Escolha o arquivo de configuração (`GTM-R2U-setup.json`)
- Em **Escolher área de trabalho**, selecione **Existente** e use a área de trabalho com a variável do Google Analytics
- Selecione a opção **Combinar** e confirme

![](files/GTM-setup-screen-02-pt-br.png?raw=true 'Importar arquivo de configuração')

- Configure as tags **UA - R2U attribution** e **UA - R2U events** para usar a variável do Google Analytics
  ![](files/GTM-setup-screen-03-pt-br.png?raw=true 'Configurar tags')

- Publique as mudanças

#### 2. Configuração Google Analytics (GA)

- Importe os segmentos e report da R2U via este [link](https://analytics.google.com/analytics/web/template?uid=-iO7xmcvTmazO7zlecWHIA) e aplique na _view_ com os dados do site
