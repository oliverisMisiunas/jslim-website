import Head from 'next/head'
import Navbar from './global-components/Navbar'
import Homefront from './homepage-components/Homefront'
import Aboutfront from './homepage-components/Aboutfront'
import Contributefront from './homepage-components/Contributefront'
import Bottom from './global-components/Bottom'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>JSlim library</title>
        <meta name="description" content="JSlim library for JavaScript. Write less code, make your project slimmer." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

      <Homefront />

      <Aboutfront />

      <Contributefront />

      <Bottom />
    </div>
  )
}
