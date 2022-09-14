import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        background: {
            'dark1':'#13274F',
            'dark2':'#0f1e3d',
            'ligth1':'white',
            'ligth2':'#dbdbdb'
        },
        navBar: {
            'dark':'#10254f',
            'darkBottom':'rgba(255, 255, 255, 0.16)',
            'ligth':'#b2b6bf',
            'ligthBottom':'rgba(255, 255, 255, 0.16)'
        },
        project: {
            'darkBorder': 'rgba(255, 255, 255, 0.16)',
            'ligthBorder': 'rgba(56, 60, 66, 0.16)',
            background: {
                'dark': 'rgba(255, 255, 255, 0.05)',
                'ligth': 'rgba(283, 283, 283, 0.2)'
            }
        }
    },
    text: {
        'default':'white'
    },
    config: {
        initialColorMode: 'dark'
    },
})
export default theme