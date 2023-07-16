
import Layout from '@/../../components/Layout/Layout'
import PolicyContent from '@/../../components/Policy/Policy'

export default function Home() {
    return (
        <>
            <Layout metaTitle={''} metaDescr=''>
                <main>
                <PolicyContent/>
                </main>
            </Layout>
        </>
    )
}
