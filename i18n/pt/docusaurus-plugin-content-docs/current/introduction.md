---
title: Introdução
slug: /
---

👋    Boas-vindas à documentação R2U!

Esta documentação tem o objetivo de fornecer uma visão de alto nível da nossa empresa e dos SDKs que nós fornecemos.

## O que é a R2U?

A R2U ajuda e-commerces a venderem mais permitindo que usuários experimentem produtos em casa com Realidade Aumentada. Nossa plataforma é composta por 3 aspectos principais:

1. Uso de soluções nativas para iOS (ARKit) e Android (ARCore) por meio de nossos SDKs
2. Armazenamento e distribuição de modelos 3D
3. Organização das informações do produto por produto / código EAN

<img src="https://sdk.r2u.io/documentation/r2u-architecture.png" title="Arquitetura R2U"  width="600"/>

## Que soluções a R2U oferece?

Nós oferecemos a [Realidade Aumentada](/javascript/augmented-reality), o [Visualizador 3D](/javascript/viewer) e o [Customizador 3D](/javascript/customizer).

<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/product-ar.gif" title="AR" width="200"/>
  </p>
</div>
<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/product-3d-desktop.gif" title="viewer" width="600"/>
  </p>
</div>
<div>
  <p float="left">
    <img src="https://sdk.r2u.io/documentation/customizer.gif" title="customizer" width="600"/>
  </p>
</div>

## Quais tecnologias vocês suportam?

Atualmente, nós temos um [SDK JavaScript](/javascript/quickstart) para sites mobile e desktop e um [SDK React Native](/react-native/quickstart) para aplicativos mobile. Se você tiver interesse em entrar em nossa lista de espera para nossos [SDKs Swift/Kotlin](/swift-kotlin/quickstart), envie-nos uma mensagem.

## Qual é o tamanho dos seus SDKs? Qual é o impacto no tempo de carregamento e no tamanho do bundle?

Nossos SDKs são otimizados para fazer uso de aplicativos nativos já presentes nos dispositivos iOS e Android e se comunicar com nossa infraestrutura, e por esse motivo ele é bastante leve e otimizado (tamanho de transferência inferior a 200kB, quando empacotado) e não deve interferir na experiência do usuário.

## O que preciso fazer para que meus usuários tenham acesso a experiência de realidade aumentada?

De forma resumida, qualquer usuário pode experimentar a realidade aumentada se possuir um dispositivo que dê suporte a tecnologia, além do modelo 3D do produto que deseja visualizar. A função da R2U é simplificar esse processo em escala por meio de nossa plataforma.

## Quais dispositivos suportam realidade aumentada?

Hoje, cerca de [90% de todos os smartphones](https://arinsider.co/2021/07/12/are-90-of-smartphones-ar-ready/) já suportam realidade aumentada. No início de 2020, essa compatibilidade era próxima a 50%, o que mostra a evolução da adoção da tecnologia ao longo do tempo.

Para iOS, há suporte para dispositivos a partir do iPhone 6s e iPad 6. Lista oficial de dispositivos suportados pela Apple: [https://www.apple.com/us/augmented-reality/](https://www.apple.com/br/augmented-reality/)

Para o Android, apenas dispositivos aprovados pelo processo de homologação do Google são compatíveis, pois passaram por testes de processador, sensor e qualidade de câmera, entre outros hardwares. Entre os modelos *não aprovados*, estão alguns dispositivos mais *low-end* da Samsung e Motorola e alguns modelos da Xiaomi. Lista oficial de dispositivos suportados pelo Google: [https://developers.google.com/ar/devices](https://developers.google.com/ar/devices)

## A R2U faz hospedagem de todos os modelos 3D?

Sim. Hoje temos um banco de dados proprietário de modelos 3D que está sempre crescendo com novos produtos. Como estamos em contato direto com os fabricantes dos produtos, podemos produzir modelos 3D diretamente na indústria e oferecer RA desses produtos em diferentes canais. Portanto, é mais eficiente usar modelos diretamente da nossa database.

<a href="https://github.com/r2u-io/documentation">
  <img src="https://sdk.r2u.io/documentation/github.png" width="20"/> &nbsp;
  Contribuir
</a>