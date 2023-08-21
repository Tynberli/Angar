import Hero from '@/../components/Hero/Hero';
import Advantages from '@/../components/Advantages/Advantages';
import Steps from '@/../components/SwiperSteps/Steps';
import Warming from '@/../components/warming/Warming';
import Material from '@/../components/Material/Material';
import AngarFilter from '@/../components/Catalog/Catalog';
import Angars from "@/../../components/Angars/Angars";
import Layout from '@/../components/Layout/Layout';

export default function Home() {
    return (
        <>
            <Layout metaTitle={'123'} metaDescr='asd'>
                <main>
                    <Hero/>
                    <Advantages/>
                    <AngarFilter/>
                    <Material/>
                    <Angars/>
                   {/* <Warming/>*/}

                    <Steps/>
                </main>
            </Layout>
        </>
    )
}
