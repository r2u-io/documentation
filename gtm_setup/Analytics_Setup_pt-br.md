<h1 align="center">
    <a href="Analytics_Setup.md">
        <img height="20px" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/gb.svg">
    </a>
    <a href="Analytics_Setup_pt-br.md">
        <img height="20px" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/br.svg">
    </a>
    <br/>
    <img src="https://real2u-public-assets.s3.amazonaws.com/images/logo-r2u.png" title="logo" width="200"/>
</h1>

# Configuração Analytics

O SDK de Realidade Aumentada R2U por padrão gera eventos de utlização, como impressões e cliques dos viusalizadores 3D.

Os passos a seguir descrevem as configurações para que esses dados estejam disponíveis no Google Analytics.

#### 1. Configuração Google Tag Manager (GTM)

- Faça download do arquivo de configuração <a download href="https://raw.githubusercontent.com/r2u-io/documentation/master/gtm_setup/files/GTM-R2U-setup.json">GTM-R2U-setup.json</a>
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
