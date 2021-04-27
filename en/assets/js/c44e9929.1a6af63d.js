(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(87)),o={title:"3D Viewer"},s={unversionedId:"3D-viewer",id:"3D-viewer",isDocsHomePage:!1,title:"3D Viewer",description:"After adding a script tag to your website, methods for creating the 3D Viewer are available through the global object R2U.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/3D-viewer.md",slug:"/3D-viewer",permalink:"/documentation/en/3D-viewer",version:"current",sidebar:"docs",previous:{title:"Initialization",permalink:"/documentation/en/inicialization"},next:{title:"Augmented Reality",permalink:"/documentation/en/augmented-reality"}},c=[{value:"R2U.viewer.create",id:"r2uviewercreate",children:[{value:"Parameter popup",id:"parameter-popup",children:[]},{value:"Parameter progressBarPosition",id:"parameter-progressbarposition",children:[]},{value:"Parameter progressBarColor",id:"parameter-progressbarcolor",children:[]},{value:"Parameter poster",id:"parameter-poster",children:[]},{value:"Demonstration of the 3D viewer",id:"demonstration-of-the-3d-viewer",children:[]}]},{value:"Change sku R2U.viewer.create",id:"change-sku-r2uviewercreate",children:[]},{value:"R2U.qrCode.create",id:"r2uqrcodecreate",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"After adding a script tag to your website, methods for creating the 3D Viewer are available through the global object R2U."),Object(i.b)("h2",{id:"r2uviewercreate"},"R2U.viewer.create"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),Object(i.b)("inlineCode",{parentName:"h5"},"mobile")," ",Object(i.b)("inlineCode",{parentName:"h5"},"desktop"))),Object(i.b)("div",{parentName:"div",className:"admonition-content"})),Object(i.b)("p",null,"It is method for creates a 3D model viewer at the position of the HTML element indicated, by default expandable via popup"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"  // test SKU -- remember to use your product information\n\n  //HTML element that will receive the 3D model\n  const element = document.getElementById('3d-viewer')\n  //Desired product SKU\n  const sku = 'RE000001'\n  //name of the product that will be rendered\n  const name = 'Cadeira Eames'\n  //expandable 3D viewer \n  const popup = false\n  //3D model loading bar position\n  const progressBarPosition = 'middle'\n  //insert an image on top of the 3D model while loading the model\n  const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'\n\n  R2U.viewer.create({ element, sku, name, popup, progressBarPosition, poster })\n")),Object(i.b)("h3",{id:"parameter-popup"},"Parameter popup"),Object(i.b)("p",null,"Enables and disables the button to open the expandable 3D viewer with the model."),Object(i.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(i.b)("div",null,Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      name?: string\n      popup?: boolean\n    }) => Promise<void>\n  }\n  }\n"))),Object(i.b)("div",null,Object(i.b)("strong",null," Popup example: "),Object(i.b)("p",{float:"left"},Object(i.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-popup.gif",title:"popup",width:"600"})))),Object(i.b)("h3",{id:"parameter-progressbarposition"},"Parameter progressBarPosition"),Object(i.b)("p",null,"  Defines the position in which the progress bar will be inserted."),Object(i.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(i.b)("div",null,Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      progressBarPosition?: 'top' | 'middle' | 'bottom'\n    }) => Promise<void>\n  }\n  }\n"))),Object(i.b)("div",{style:{marginTop:"20px"}},Object(i.b)("strong",null," ProgressBarPosition example on the desktop: "),Object(i.b)("p",{float:"left",style:{display:"flex",flexDirection:"row"}},Object(i.b)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"15px",marginRight:"15px"}},Object(i.b)("a",null,"top"),Object(i.b)("img",{src:"https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-top.png",title:"Progress bar top",height:"150"})),Object(i.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(i.b)("a",null,"middle"),Object(i.b)("img",{src:"https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-middle.png",title:"Progress bar middle",height:"150"})),Object(i.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(i.b)("a",null,"bottom"),Object(i.b)("img",{src:"https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-bottom.png",title:"Progress bar bottom",height:"150"}))))),Object(i.b)("h3",{id:"parameter-progressbarcolor"},"Parameter progressBarColor"),Object(i.b)("p",null,"Sets the color of the progressBarPosition"),Object(i.b)("div",null,Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      progressBarColor?: string\n    }) => Promise<void>\n  }\n  }\n"))),Object(i.b)("h3",{id:"parameter-poster"},"Parameter poster"),Object(i.b)("p",null,"Define an image on top of the 3D model that will be displayed when loading the model. "),Object(i.b)("div",null,Object(i.b)("div",null,Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      poster?: string\n    }) => Promise<void>\n  }\n  }\n")))),Object(i.b)("h3",{id:"demonstration-of-the-3d-viewer"},"Demonstration of the 3D viewer"),Object(i.b)("p",{float:"left"},Object(i.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer.gif",title:"3D Viewer",width:"600"})),Object(i.b)("h2",{id:"change-sku-r2uviewercreate"},"Change sku R2U.viewer.create"),Object(i.b)("p",null,"The setSku method updates the product SKU."),Object(i.b)("div",null,Object(i.b)("div",null,Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"}," // test SKU -- remember to use your product information\n  const buttonChangeSku = document.getElementById('button-changeSku')\n  const changeSku = document.getElementById('viewer-changeSku')\n\n // create will return a handler with function to change  sku\n  const handler = R2U.viewer.create({\n    element: changeSku,\n    sku,\n    name,\n    popup,\n    progressBarPosition,\n    poster\n  })\n  //change the sku at the click of the button\n  buttonChangeSku.addEventListener('click', () => {\n    handler.setSku('RE000002')\n  })\n"))),Object(i.b)("div",null,Object(i.b)("strong",null," SetSku example: "),Object(i.b)("p",{float:"left"},Object(i.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-setSku.gif",title:"3D viewer setsku",width:"600"})))),Object(i.b)("h2",{id:"r2uqrcodecreate"},"R2U.qrCode.create"),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Known issue: Android users scanning the QR Code without having an opened browser will receive a fallback message stating that the device is not supported.")),Object(i.b)("div",{parentName:"div",className:"admonition-content"})),Object(i.b)("p",null,"Creates a QRCode that, when scanned, directs the user to the model in AR."),Object(i.b)("div",null,Object(i.b)("div",null,Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"  const element = document.getElementById('qrCode')\n  R2U.qrCode.create({ element, sku })\n"))),Object(i.b)("div",null,Object(i.b)("p",{float:"left"},Object(i.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-qrcode.png",title:"qrcode",width:"200"})))))}p.isMDXComponent=!0}}]);