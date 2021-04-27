---
title: Augmented Reality
---
After adding the script tag to your website, methods for creating the Augmented Reality experience will be available through the global object R2U.


## R2U.ar.attach

:::tip `mobile`
:::

The ar.attach method creates an "eventListener" to open the AR viewer on mobile devices (e.g.: on a button click).  

```typescript
  // test SKU -- remember to use your product information
  const arButton = document.getElementById('ar-button')
  const sku = 'RE000001'
  // creates an unsupported device alert
  const fallbackOptions = {
    //add message in the alert
    alertMessage: 'AR not supported by device',
    //opens a 3D viewer on the warning screen
    fallback: 'viewer'
  }

  R2U.ar.attach({
    element: arButton,
    sku,
    fallbackOptions
    /* resize defaults to `false` */
  })
```

### element

It is the element that will activate the AR experience through an event.

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
    }) => Promise<void>
  }
}

```

### SKU

It is the SKU of the product you want to see in AR.

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
    }) => Promise<void>
  }
}
```

### event

It is the event that will activate the AR experience.

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      event?: string
    }) => Promise<void>
  }
}
```

### resize 

Option to resize 3D model on AR experience

```typescript
interface R2U {
  ar: {
    attach: (params: {
      element: HTMLElement
      sku: string
      resize?: boolean
    }) => Promise<void>
  }
}
```


### showInstructions
:::tip  The instructions will be viewed only on the user's first AR experience.
:::

 When true, shows an image in full-screen view explaining how to place and manipulate a 3D object on AR before proceeding to the camera experience.
<div >
<div >

  ```typescript
  interface R2U {
    ar: {
      attach: (params: {
        element: HTMLElement
        sku: string
        showInstructions?: boolean
      }) => Promise<void>
    }
  }
  ```
</div>
<div>
<strong> Instructions example: </strong> 

<p float="left">
  <img src="../static/img/instruction-en.png" title="Instruction screen" width="200"/>
</p>
</div>
</div>


### fallbackOptions
:::tip  The `alertMessage` message can be customized
:::
Shows an image when the mobile device does not support the AR experience. If the instructions are entered, the fallback is displayed only when you click on the "See at your home" button.

<div >
<div >

```typescript
  interface R2U {
    ar: {
      attach: (params: {
        element: HTMLElement
        sku: string
        //device warning not compatible with AR
        fallbackOptions?: {
          //add alert message
          alertMessage?: string
          //opens a 3D viewer on the warning screen
          fallback?: 'viewer' | 'full'
          //modify the fallback text
          text?: {
            //change the page title
            title?: string
            //changes the top text of the page
            top?: string
            //change bottom page text
            bottom?: string
          }
        }
      }) => Promise<void>
    }
  }
  ```
</div>
<div>
<strong> Fallback example: </strong> 

<p float="left">
  <img src="../static/img/fallback.png" title="Fallback" width="200"/>
</p>
</div>

</div>


### AR demo on _iOS_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-1.png" title="iOS 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-2.png" title="iOS 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/ios-3.png" title="iOS 3" width="200"/>
</p>

### AR demo on _Android_

<p float="left">
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-1.png" title="Android 1" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-2.png" title="Android 2" width="200"/>
  <img src="https://scripts-ignition.real2u.com.br/real2u-integration/android-3.png" title="Android 3" width="200"/>
</p>

## R2U.ar.getlink
:::tip `mobile` `desktop`
:::

The method returns a shareable URL for the AR experience. 

```typescript
  //remember to use your product information
  R2U.ar.getLink('RE000001').then((url) => console.log(url))
```

