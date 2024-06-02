import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  )
}
