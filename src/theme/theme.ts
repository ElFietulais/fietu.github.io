import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        background: {
            dark: {
                '1':'#13274f',
                '2':'#0f1e3d',
            },
            light: {
                '1':'#CAF0F8',
                '2':'#ADE8F4'
            }
        },
        navBar: {
            background: {
                'dark':'#10254f',
                'light':'#CAF0F8'
            },
            bottom: {
                'dark':'rgba(255, 255, 255, 0.16)',
                'light':'#90e0ef'
            }
        },
        project: {
            background: {
                'dark': 'rgba(255, 255, 255, 0.05)',
                'light': 'rgba(283, 283, 283, 0.2)'
            },
            border: {
                'dark': 'rgba(255, 255, 255, 0.16)',
                'light': 'rgba(56, 60, 66, 0.16)',
            }
        },
        hover: {
            socialButtons: {
                'dark': 'gray',
                'light': '#74bbe8'
            }
        }
    },
    config: {
        initialColorMode: 'dark'
    },
})
export default theme