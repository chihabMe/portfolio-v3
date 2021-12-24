import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <div  id='container' className='container'>
        <Component {...pageProps}  />
  </div>
  )
}

export default MyApp
