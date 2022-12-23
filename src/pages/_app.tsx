import type { AppProps } from 'next/app'
import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from '@/lib/theme/theme'
import Navbar from '@/components/navbar/navbar'
import MobileNavbar from '@/components/navbar/mobileNavbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Fietu</title>
				<link
					rel='shortcut icon'
					href='https://cdn.discordapp.com/avatars/780876656352559125/c89c766ef2e00991c45a661845402e17.png'
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<MobileNavbar />
		</ChakraProvider>
	)
}

export default MyApp
