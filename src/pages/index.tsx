import Head from 'next/head'

import Header from '@/../components/Header/Header';
import Hero from '@/../components/Hero/Hero';
import Advantages from '@/../components/Advantages/Advantages';
import Footer from '@/../components/Footer/Footer';
import Steps from '@/../components/SwiperSteps/Steps';
export default function Home() {
  return (
    <>
      <Head>
        <title>Profi-Angar</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Steps/>
      </main>
      <Footer/>
    </>
  )
}