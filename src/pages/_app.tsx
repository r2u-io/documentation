import React from 'react'

import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { Provider } from '../contexts'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
