import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/chakra-theme'
import { AppHeader } from '@/components/layout/AppHeader'
import { Box } from '@chakra-ui/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppHeader />
      <Box mx={20}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
export default MyApp
