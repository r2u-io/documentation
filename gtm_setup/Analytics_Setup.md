# Analytics Setup

The R2U Augmented Reality SDK by default generates usage events, such as impressions and clicks on 3D viewers.

The necessary configuration steps are descibeg bellow such that the data is available in Google Analytics.


#### 1. Google Tag Manager setup

- Download the setup file [GTM-R2U-setup.json](files/GTM-R2U-setup.json)
- In the **Admin** tab, click in **Import container**

![](files/GTM-setup-screen-01.png?raw=true "Import container")

- Choose the configuration file (`GTM-R2U-setup.json`)
- In **Choose workspace**, select **Existing** and use the workspace with the Google Analytics variable
- Select **Merge** and confirm

![](files/GTM-setup-screen-02.png?raw=true "Import setup file")

- Configure the tags **UA - R2U attribution** and **UA - R2U events** to use the Google Analytics variable
![](files/GTM-setup-screen-03.png?raw=true "Setup tags")

- Publish the changes

#### 2. Google Analytics setup

- Import the R2U segments and report via this [link](https://analytics.google.com/analytics/web/template?uid=-iO7xmcvTmazO7zlecWHIA) and apply to the view with the website data
