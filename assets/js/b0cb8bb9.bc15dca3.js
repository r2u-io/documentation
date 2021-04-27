(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{77:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(3),a=o(7),n=(o(0),o(87)),i={title:"Visualizador 3D"},s={unversionedId:"3D-viewer",id:"3D-viewer",isDocsHomePage:!1,title:"Visualizador 3D",description:"Depois de adicionar a tag de script em seu site, os m\xe9todos para criar o Visualizador 3D estar\xe3o dispon\xedveis por meio do objeto global R2U.",source:"@site/docs/3D-viewer.md",slug:"/3D-viewer",permalink:"/documentation/3D-viewer",version:"current",sidebar:"docs",previous:{title:"Inicializa\xe7\xe3o",permalink:"/documentation/inicialization"},next:{title:"Realidade Aumentada",permalink:"/documentation/augmented-reality"}},c=[{value:"R2U.viewer.create",id:"r2uviewercreate",children:[{value:"Par\xe2metro popup",id:"par\xe2metro-popup",children:[]},{value:"Par\xe2metro progressBarPosition",id:"par\xe2metro-progressbarposition",children:[]},{value:"Par\xe2metro progressBarColor",id:"par\xe2metro-progressbarcolor",children:[]},{value:"Par\xe2metro poster",id:"par\xe2metro-poster",children:[]},{value:"Demonstra\xe7\xe3o do visualizador 3D",id:"demonstra\xe7\xe3o-do-visualizador-3d",children:[]}]},{value:"Mudar sku R2U.viewer.create",id:"mudar-sku-r2uviewercreate",children:[]},{value:"R2U.qrCode.create",id:"r2uqrcodecreate",children:[]}],d={toc:c};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Depois de adicionar a tag de script em seu site, os m\xe9todos para criar o Visualizador 3D estar\xe3o dispon\xedveis por meio do objeto global R2U."),Object(n.b)("h2",{id:"r2uviewercreate"},"R2U.viewer.create"),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),Object(n.b)("inlineCode",{parentName:"h5"},"mobile")," ",Object(n.b)("inlineCode",{parentName:"h5"},"desktop"))),Object(n.b)("div",{parentName:"div",className:"admonition-content"})),Object(n.b)("p",null,"\xc9 o m\xe9todo para criar o visualizador 3D no site de acordo com a posi\xe7\xe3o do elemento HTML indicado. "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"  //Lembre de substituir pelas informa\xe7\xf5es do seu produto\n\n  //elemento HTML que ir\xe1 receber o modelo 3D\n  const element = document.getElementById('3d-viewer')\n  //SKU do produto desejado\n  const sku = 'RE000001'\n  //nome do produto que ser\xe1 renderizado\n  const name = 'Cadeira Eames'\n  //visualizador 3D expans\xedvel \n  const popup = false\n  //posi\xe7\xe3o da barra de carregamento do modelo 3D\n  const progressBarPosition = 'middle'\n  //inserir uma imagem sobre o modelo 3D durante o carregamento do modelo\n  const poster = 'https://real2u-public-assets.s3.amazonaws.com/images/cadeira.png'\n\n  R2U.viewer.create({ element, sku, name, popup, progressBarPosition, poster })\n")),Object(n.b)("h3",{id:"par\xe2metro-popup"},"Par\xe2metro popup"),Object(n.b)("p",null,"Habilita e desabilita o bot\xe3o para abrir o visualizador 3D expans\xedvel com o modelo."),Object(n.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(n.b)("div",null,Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      name?: string\n      popup?: boolean\n    }) => Promise<void>\n  }\n  }\n"))),Object(n.b)("div",null,Object(n.b)("strong",null," Exemplo do popup: "),Object(n.b)("p",{float:"left"},Object(n.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-popup.gif",title:"popup",width:"600"})))),Object(n.b)("h3",{id:"par\xe2metro-progressbarposition"},"Par\xe2metro progressBarPosition"),Object(n.b)("p",null,"  Define a posi\xe7\xe3o que o progress bar ser\xe1 inserido."),Object(n.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(n.b)("div",null,Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      progressBarPosition?: 'top' | 'middle' | 'bottom'\n    }) => Promise<void>\n  }\n  }\n"))),Object(n.b)("div",{style:{marginTop:"20px"}},Object(n.b)("strong",null," Exemplo do progressBarPosition no desktop: "),Object(n.b)("p",{float:"left",style:{display:"flex",flexDirection:"row"}},Object(n.b)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"15px",marginRight:"15px"}},Object(n.b)("a",null,"top"),Object(n.b)("img",{src:"https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-top.png",title:"Progress bar top",height:"150"})),Object(n.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(n.b)("a",null,"middle"),Object(n.b)("img",{src:"https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-middle.png",title:"Progress bar middle",height:"150"})),Object(n.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(n.b)("a",null,"bottom"),Object(n.b)("img",{src:"https://real2u-public-assets.s3.amazonaws.com/images/cadeira-progressbar-bottom.png",title:"Progress bar bottom",height:"150"}))))),Object(n.b)("h3",{id:"par\xe2metro-progressbarcolor"},"Par\xe2metro progressBarColor"),Object(n.b)("p",null,"Define a cor do progressBarPosition"),Object(n.b)("div",null,Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      progressBarColor?: string\n    }) => Promise<void>\n  }\n  }\n"))),Object(n.b)("h3",{id:"par\xe2metro-poster"},"Par\xe2metro poster"),Object(n.b)("p",null,"Define uma imagem sobre o modelo 3D que ser\xe1 exibida durante o carregamento do modelo. "),Object(n.b)("div",null,Object(n.b)("div",null,Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"  interface R2U {\n    viewer: {\n    create: (params: {\n      element: HTMLElement\n      sku: string\n      poster?: string\n    }) => Promise<void>\n  }\n  }\n")))),Object(n.b)("h3",{id:"demonstra\xe7\xe3o-do-visualizador-3d"},"Demonstra\xe7\xe3o do visualizador 3D"),Object(n.b)("p",{float:"left"},Object(n.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer.gif",title:"3D viewer",width:"600"})),Object(n.b)("h2",{id:"mudar-sku-r2uviewercreate"},"Mudar sku R2U.viewer.create"),Object(n.b)("p",null,"O m\xe9todo setSku atualiza o SKU do produto."),Object(n.b)("div",null,Object(n.b)("div",null,Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"}," // SKU de teste -- lembre de substituir pelas informa\xe7\xf5es do seu produto\n  const buttonChangeSku = document.getElementById('button-changeSku')\n  const changeSku = document.getElementById('viewer-changeSku')\n\n  // O create ir\xe1 retornar um objeto que ter\xe1 o m\xe9todo setSku\n  const handler = R2U.viewer.create({\n    element: changeSku,\n    sku,\n    name,\n    popup,\n    progressBarPosition,\n    poster\n  })\n  //muda o sku no click do bot\xe3o\n  buttonChangeSku.addEventListener('click', () => {\n    handler.setSku('RE000002')\n  })\n"))),Object(n.b)("div",null,Object(n.b)("strong",null," Exemplo do setSku: "),Object(n.b)("p",{float:"left"},Object(n.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-setSku.gif",title:"3D viewer setSku",width:"600"})))),Object(n.b)("h2",{id:"r2uqrcodecreate"},"R2U.qrCode.create"),Object(n.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Problemas conhecidos: Usu\xe1rios Android escaneando o QR Code sem ter o browser aberto receber\xe3o uma mensagem de fallback avisando que o dispositivo n\xe3o \xe9 suportado.")),Object(n.b)("div",{parentName:"div",className:"admonition-content"})),Object(n.b)("p",null,"Cria um QRCode que ao scannear direciona o usu\xe1rio para o modelo em RA."),Object(n.b)("div",null,Object(n.b)("div",null,Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"  const element = document.getElementById('qrCode')\n  R2U.qrCode.create({ element, sku })\n"))),Object(n.b)("div",null,Object(n.b)("p",{float:"left"},Object(n.b)("img",{src:"https://storage.googleapis.com/r2u-sdk-bucket/documentation/3D-viewer-qrcode.png",title:"qrcode",width:"200"})))))}l.isMDXComponent=!0}}]);