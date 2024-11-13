import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Parse from 'parse/react-native'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Parse.initialize(
      process.env.NEXT_PUBLIC_APPLICATION_ID!,
      process.env.NEXT_PUBLIC_JAVASCRIPT_KEY!
    );
    Parse.serverURL = process.env.NEXT_PUBLIC_BACKEND_URL!;
  }, [])

  return <Component {...pageProps} />
}