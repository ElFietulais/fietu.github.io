import { ColorModeScript } from '@chakra-ui/react'
import Component, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends Component {
    render() {
        return (
            <Html lang='en'>
            <Head />
            <body>
              <ColorModeScript/>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
    }
}