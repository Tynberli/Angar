import Layout from '@/../../components/Layout/Layout'
import PolicyContent from '@/../../components/Policy/Policy'

export default function Home() {
    return (
        <>
            <Layout metaTitle={'Куки | Profi Angar'} metaDescr='Принять куки сайта'>
                <main>
                <PolicyContent/>
                </main>
            </Layout>
        </>
    )
}
