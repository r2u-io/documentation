import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
  }

  h1, h2, h3, span, small {
    font-family: 'Montserrat', sans-serif;
    color: #6b6b69;
  }

  body {
    background-color: #ffff;
  }

  button {
    cursor: pointer
  }
`

export default GlobalStyle
