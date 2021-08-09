import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/chakra-theme'
import { AppHeader } from '@/components/layout/AppHeader'
import { Provider } from 'react-redux'
import { Box } from '@chakra-ui/layout'
import { createUsersStore } from '@/redux/users/index'

export const store = createUsersStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppHeader />
        <Box mx={20}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </Provider>
  )
}
export default MyApp
