import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PropsWithChildren, FC } from 'react';
type LayoutProps = {

    metaTitle: string;
    metaDescr?: string;

}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    metaTitle = 'Artway',
    metaDescr = 'Пока рандомный текст',
    children, }) => {
    return (
        <div className="content">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescr} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;