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
            <Layout metaTitle={'Изготовление ангаров любой сложности | Profi Angar'}
                    metaDescr='Изготавливаем ангары под ключ с прочным каркасом и возможностью утепления. Прямостенные и двухскатные конструкции, а также индивидуальные решения по вашим требованиям.'>
                <main>
                    <Hero/>
                    <Advantages/>
                    <AngarFilter/>
                    <Material/>
                    <Angars/>
                    <Warming/>

                    <Steps/>
                </main>
            </Layout>
        </>
    )
}
