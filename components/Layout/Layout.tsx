import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {PropsWithChildren, FC} from 'react';

type LayoutProps = {

    metaTitle: string;
    metaDescr?: string;

}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
                                                        metaTitle = 'Artway',
                                                        metaDescr = 'Пока рандомный текст',
                                                        children,
                                                    }) => {
    return (
        <div className="content">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescr}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/ico"/>
                {/* Вставляем код Яндекс Метрики */}
                {/*<script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function (m, e, t, r, i, k, a) {
                  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                  m[i].l = 1 * new Date();
                  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
                  k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
              })
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(92316183, "init", {
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true
              });
            `,
                    }}
                />
                <noscript>
                    <div><img src="https://mc.yandex.ru/watch/92316183" style={{position: 'absolute', left: '-9999px'}}
                              alt=""/></div>
                </noscript>*/}
                {/* /Yandex.Metrika counter */}
            </Head>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;