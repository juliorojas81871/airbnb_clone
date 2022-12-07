import type { NextPage } from 'next'
import Head from 'next/head'
import {Header} from '../components'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/airbnb_icon.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  )
}

export default Home
