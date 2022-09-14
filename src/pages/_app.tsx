import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme/theme'
import Navbar from '@/components/navbar/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Fietu</title>
        <link rel="shortcut icon" href='https://cdn.discordapp.com/avatars/780876656352559125/c89c766ef2e00991c45a661845402e17.png' />
      </ Head>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
