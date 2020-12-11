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

# Analytics Setup

The R2U Augmented Reality SDK by default generates usage events, such as impressions and clicks on 3D viewers.

The necessary configuration steps are described bellow such that the data is available in Google Analytics.

#### 1. Google Tag Manager setup

- Download the setup file <a download href="https://raw.githubusercontent.com/r2u-io/documentation/master/gtm_setup/files/GTM-R2U-setup.json">GTM-R2U-setup.json</a>
- In the **Admin** tab, click in **Import container**

![](files/GTM-setup-screen-01.png?raw=true 'Import container')

- Choose the configuration file (`GTM-R2U-setup.json`)
- In **Choose workspace**, select **Existing** and use the workspace with the Google Analytics variable
- Select **Merge** and confirm

![](files/GTM-setup-screen-02.png?raw=true 'Import setup file')

- Configure the tags **UA - R2U attribution** and **UA - R2U events** to use the Google Analytics variable
  ![](files/GTM-setup-screen-03.png?raw=true 'Setup tags')

- Publish the changes

#### 2. Google Analytics setup

- Import the R2U segments and report via this [link](https://analytics.google.com/analytics/web/template?uid=-iO7xmcvTmazO7zlecWHIA) and apply to the view with the website data
