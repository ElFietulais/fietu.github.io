import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/m-plus-code-latin'

const theme = extendTheme({
	fonts: {
		body: `'M PLUS Code Latin', sans-serif`,
		heading: `'M PLUS Code Latin', sans-serif`,
		p: `sans-serif`,
	},
	colors: {
		background: {
			dark: '#1b1d1e',
			light: '#ffffff',
		},
		navBar: {
			background: {
				dark: '#1b1d1e',
				light: '#CAF0F8',
			},
			bottom: {
				dark: 'rgba(255, 255, 255, 0.16)',
				light: 'rgba(25, 25, 25, 0.16)',
			},
		},
		project: {
			background: {
				dark: 'rgba(255, 255, 255, 0.05)',
				light: 'rgba(283, 283, 283, 0.2)',
			},
			border: {
				dark: 'rgba(255, 255, 255, 0.1)',
				light: 'rgba(25, 25, 25, 0.1)',
			},
		},
		hover: {
			socialButtons: {
				dark: 'gray',
				light: '#74bbe8',
			},
		},
	},
	components: {
		Popover: {
			'padding-top': '52',
		},
	},
	styles: {
		global: (props: Record<string, any>) => ({
			body: {
				bg: mode('#ffffff', '#1b1d1e')(props),
			},
		}),
	},
	config: {
		initialColorMode: 'dark',
	},
})
export default theme
