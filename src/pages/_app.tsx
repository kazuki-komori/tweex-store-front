import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/chakra-theme'
import { AppHeader } from '@/components/layout/AppHeader'
import { Provider } from 'react-redux'
import { Box } from '@chakra-ui/layout'
import { persistor, store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <AppHeader />
          <Box mx={20}>
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}
export default MyApp
