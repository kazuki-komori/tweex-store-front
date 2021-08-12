import { AppHeader } from '@/components/layout/AppHeader'
import { persistor, store } from '@/redux/store'
import { theme } from '@/styles/chakra-theme'
import { Box } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <AppHeader />
          <Box color="main-text-black" mx={[8, 20, 150]}>
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}
export default MyApp
