import '../styles/globals.css'
import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> home </title>  
      </Head>      
      < Nav />      
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp


