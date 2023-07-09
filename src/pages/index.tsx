import Head from 'next/head'

import Header from '@/../components/Header/Header';
import Hero from '@/../components/Hero/Hero';
import Advantages from '@/../components/Advantages/Advantages';
import Footer from '@/../components/Footer/Footer';
import Steps from '@/../components/SwiperSteps/Steps';
import Warming from '@/../components/warming/Warming';
import Material from '@/../components/Material/Material';
import AngarFilter from '@/../components/Catalog/Catalog';
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
        <AngarFilter/>
        {/* <Warming/> */}
        <Material/>
        <Steps/>
      </main>
      <Footer/>
    </>
  )
}
