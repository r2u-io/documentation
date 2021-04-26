(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(87)),s={title:"Initialization",slug:null},o={unversionedId:"inicialization",id:"inicialization",isDocsHomePage:!1,title:"Initialization",description:"After adding the script tag to your site, the SDK's initialization methods will be available through the global R2U object.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/inicialization.md",slug:"/inicialization",permalink:"/documentation/en/inicialization",version:"current",sidebar:"docs",previous:{title:"Integration",permalink:"/documentation/en/"},next:{title:"3D Viewer",permalink:"/documentation/en/3D-viewer"}},c=[{value:"R2U.init",id:"r2uinit",children:[]},{value:"R2U.sku.isActive",id:"r2uskuisactive",children:[]},{value:"R2U.analytics.send",id:"r2uanalyticssend",children:[{value:"Parameters",id:"parameters",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"After adding the script tag to your site, the SDK's initialization methods will be available through the global R2U object."),Object(r.b)("h2",{id:"r2uinit"},"R2U.init"),Object(r.b)("p",null,"The init method initializes the SDK and connects to the R2U server and checks whether the customerId exists in our database."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"}," // test client -- remember to use your own `customerId`\nR2U.init({\n  customerId: '5e8e7580404328000882f4ae',\n  analyticsParams: {\n    dataLayerIntegration: true, // Activate integration with Google Tag Manager (dafault: true)\n    sessionDurationMinutes: 30 // Maximum minutes of inactivity within a single session. Use same value as in Google Analytics (default: 30)\n  }\n})\n  .then(() => console.log('Client active'))\n  .catch((err) => console.error('Client inactive'))\n")),Object(r.b)("h2",{id:"r2uskuisactive"},"R2U.sku.isActive"),Object(r.b)("p",null,"The sku.isActive method indicates if a product is available on the Augmented Reality platform."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"  // test client -- remember to use your own `sku`\n  R2U.sku.isActive('RE000001').then((isActive) => console.log(`SKU active? ${isActive ? '\u2713' : '\u2717'}`))\n")),Object(r.b)("h2",{id:"r2uanalyticssend"},"R2U.analytics.send"),Object(r.b)("p",null,"The analytical method sends events to the R2U analytical platform, to identify the results of the integration of our SDK."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const addToCartButton = document.getElementById('add-to-cart')\naddToCartButton.addEventListener('click', () =>\n  R2U.analytics.send({\n    event: 'add_to_cart',\n    data: { price: 30 }\n  })\n)\n")),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"interface R2U {\n  analytics: {\n    send: (params: {\n      event: string\n      data: Record<string, string | number>\n      scope?: 'event' | 'page' | 'session' | 'sku'\n    }) => Promise<void>\n  }\n}\n")),Object(r.b)("p",null,"Other metrics and dimensions (such as SKU, customerId, operating system, etc.) are sent by default and do not need to be specified."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"analyticsParams.dataLayerIntegration")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the following events are sent by default to the dataLayer:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"product_page_view"),": Triggers once per page when ",Object(r.b)("inlineCode",{parentName:"li"},"sku.isActive")," is called, to mark product page views"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"impression"),": Triggers at most once per page view where AR / 3D viewer is shown"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"click"),": Measure all clicks on AR / 3D viewer")),Object(r.b)("p",null,"The documentation to send the events in dataLayer to Google Analytics is ",Object(r.b)("a",{parentName:"p",href:"https://github.com/r2u-io/documentation/blob/master/gtm_setup/Analytics_Setup_pt-br.md"},"aqui")))}u.isMDXComponent=!0}}]);