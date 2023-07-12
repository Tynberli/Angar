import Head from 'next/head'

import Hero from '@/../components/Hero/Hero';
import Advantages from '@/../components/Advantages/Advantages';
import Steps from '@/../components/SwiperSteps/Steps';
import Warming from '@/../components/warming/Warming';
import Material from '@/../components/Material/Material';
import AngarFilter from '@/../components/Catalog/Catalog';
import Layout from '@/../components/Layout/Layout';
export default function Home() {
  return (
    <>
      <Head>
        <title>Profi-Angar</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <main>
          <Hero />
          <Advantages />
          <AngarFilter />
          {/* <Warming/> */}
          <Material />
          <Steps />
        </main>
      </Layout>
    </>
  )
}
