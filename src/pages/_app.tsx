import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (<>
        <Script 
        id="Cookiebot" 
        src="https://consent.cookiebot.com/uc.js" 
        data-cbid="3220e69b-f1a4-4a26-8638-7d1c815fe5b3" 
        data-blockingmode="auto" 
        type="text/javascript"
        />

      <Script 
      id='gtm'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T3S7HCS9');`
          }}
/>
  <Component {...pageProps} />
  </>)

}
