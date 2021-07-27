---
title: Analytics
---

## Analytics Setup

The R2U Augmented Reality SDK by default generates usage events, such as impressions and clicks on 3D viewers.

The necessary configuration steps are described bellow such that the data is available in Google Analytics.

### 1. Google Tag Manager setup

- Download the setup file [GTM-R2U-setup.json](https://raw.githubusercontent.com/r2u-io/documentation/master/gtm_setup/files/GTM-R2U-setup.json)

- In the Admin tab, click in Import container

  <div>
    <p float="left">
      <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/GTM-setup-screen-01.png" title="GTM-setup-1" width="600"/>
    </p>
  </div>

- Choose the configuration file (GTM-R2U-setup.json)

- In Choose workspace, select Existing and use the workspace with the Google Analytics variable

- Select Merge and confirm

  <div>
    <p float="left">
      <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/GTM-setup-screen-02.png" title="GTM-setup-2" width="600"/>
    </p>
  </div>

- Configure the tags UA - R2U attribution and UA - R2U events to use the Google Analytics variable

   <div>
    <p float="left">
      <img src="https://storage.googleapis.com/r2u-sdk-bucket/documentation/GTM-setup-screen-03.png" title="GTM-setup-3" width="600"/>
    </p>
  </div>

- Publish the changes

### 2. Google Analytics setup

- Import the R2U segments and report via this [link](https://analytics.google.com/analytics/web/provision/?authuser=0&utm_source&utm_medium&utm_term&utm_content&utm_campaign#/provision) and apply to the view with the website data
