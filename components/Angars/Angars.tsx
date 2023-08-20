import Image from "next/image";

import styles from "./Angars.module.scss";

import {useState} from "react";

const Tab1 = () => {
    return (
        <div
            className={styles.tab}>
            <div className={styles.img}>
                <Image src="/img-4-2.webp"
                       width={460}
                       height={460}
                       alt="Прямостенный односкатный"/>
            </div>
            <ul>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Относительно небольшой вес"/>
                    <p>Относительно небольшой вес</p>
                </li>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20} alt="Наименьший расход
                                        стройматериалов в сравнении с другими типами крыш"/>
                    <p>Наименьший расход
                        стройматериалов в сравнении с другими типами крыш</p>
                </li>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20} alt="Простой и быстрый монтаж,
                                        сокращающий общие сроки строительства"/>
                    <p>Простой и быстрый монтаж,
                        сокращающий общие сроки строительства</p>
                </li>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20} alt="Равномерное распределение
                                        нагрузки на несущие элементы"/>
                    <p>Равномерное распределение
                        нагрузки на несущие элементы</p>
                </li>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Удобство в эксплуатации"/>
                    <p>Удобство в эксплуатации</p>
                </li>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Низкая себестоимость"/>
                    <p>Низкая себестоимость</p>
                </li>
            </ul>
        </div>

    )
}

const Tab2 = () => {
    return (
        <div
            className={styles.tab}>
            <div className={styles.img}>
                <Image src="/img-4.webp"
                       height={460}
                       width={460}
                       alt="Двухскатный"/>
            </div>
            <ul>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Быстрота устранения выпавших осадков"/>
                    <p>Быстрота устранения выпавших осадков</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Хорошие показатели теплоизоляции"/>
                    <p>Хорошие показатели теплоизоляции</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Возможность обустройства мансарды"/>
                    <p>Возможность обустройства мансарды</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20} alt="Равномерное распределение нагрузки на несущие
                                        элементы"/>
                    <p>Равномерное распределение нагрузки на несущие
                        элементы</p>
                </li>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Простота ремонта и обслуживания"/>
                    <p>Простота ремонта и обслуживания</p>
                </li>
                <li>
                    <Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Высокая степень надежности"/>
                    <p>Высокая степень надежности</p>
                </li>
            </ul>
        </div>
    )
}
const Tab3 = () => {
    return (
        <div
            className={styles.tab}>
            <div className={styles.img}>
                <Image src="/img-4-3.webp"
                       height={460}
                       width={460}
                       alt="Прямостенный с уклоном"/>
            </div>
            <ul>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Относительно небольшой вес"/>
                    <p>Относительно небольшой вес</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Наименьший расход стройматериалов в сравнении с другими типами крыш"/>
                    <p>Наименьший расход
                        стройматериалов в сравнении с другими типами крыш</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Простой и быстрый монтаж,
                                        сокращающий общие сроки строительства"/>
                    <p>Простой и быстрый монтаж,
                        сокращающий общие сроки строительства</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Равномерное распределение
                                        нагрузки на несущие элементы"/>
                    <p>Равномерное распределение
                        нагрузки на несущие элементы</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Удобство в эксплуатации"/>
                    <p>Удобство в эксплуатации</p>
                </li>
                <li><Image src="/img-5.svg"
                           width={20}
                           height={20}
                           alt="Низкая себестоимость"/>
                    <p>Низкая себестоимость</p>
                </li>
            </ul>
        </div>
    )
}

const Angars = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };
    return (

        <section id="angars" className={styles.angars}>
            <div className="container relative">
                <div className={styles.tabs}>
                    <div
                        className={styles.top}>
                        <div className={styles.descr}>
                            <h2>Виды ангаров, которые мы изготавливаем</h2>
                            <p>Ангары подразделяются на три группы по конфигурации и конструктивным особенностям.</p>
                        </div>
                        <div
                            className={styles.buttons}>
                            <button onClick={handleTab1}
                                    className={activeTab === "tab1" ? "active text-[#323232]" : " "}>
                                <div></div>
                                Прямостенный односкатный
                            </button>
                            <button onClick={handleTab2}
                                    className={activeTab === "tab2" ? "active text-[#323232]" : " "}>
                                <div></div>
                                Двухскатный
                            </button>
                            <button onClick={handleTab3}
                                    className={activeTab === "tab3" ? "active text-[#323232]" : " "}>
                                <div></div>
                                Прямостенный с уклоном
                            </button>
                        </div>
                    </div>
                    {activeTab === "tab1" ? <Tab1/> : activeTab === "tab2" ? <Tab2/> : <Tab3/>}


                    {/*<div className="flex flex-col gap-[15px] relative left-[65%] top-[-50px] max-w-fit pad:max-w-[100%] mobil:max-w-[100%]
                                     netbook:left-[65%] netbook:top-[-150px] pad:left-0 pad:top-0 pad:mt-[30px] mobil:left-0 mobil:top-0
                                     mobil:mt-[30px]">
                            <button
                                className=" text-[#ffffff] bg-[#1A81FA]
                                     rounded-[100px] p-[20px_69px] max-w-fit pad:max-w-[100%]  mobil:max-w-[100%] hover:bg-[#ffffff]
                                     hover:text-[#1A81FA] hover:outline outline-[#1A81FA] duration-500 ">Заказать
                                ангар
                            </button>
                            <button
                                className=" text-[#323232] bg-[#F5F5F5] rounded-[100px] p-[20px_32px] max-w-fit pad:max-w-[100%]
                                         mobil:max-w-[100%] hover:bg-[#1A81FA] hover:text-[#ffffff] duration-500 ">Показать
                                схему каркаса
                            </button>
                        </div>*/}
                </div>
                {/*<div
                    className="flex justify-between items-start  scheme py-[200px] pad:pb-[350px] mobil:pb-[240px] absolute
                         top-[170px] mobil:top-[180px] left-0 z-10 bg-[#ffffff] w-[100%] netbook:flex-col netbook:gap-[30px] netbook:items-center
                         pad:flex-col pad:gap-[30px] pad:items-center mobil:flex-col mobil:gap-[30px] mobil:items-center">
                    <Image src="/img-6.png" height={271} width={588} alt="Каркас"/>
                    <div>
                        <p
                            className="leading-[25px] max-w-[445px] netbook:max-w-[100%] netbook:text-center pad:text-center mobil:text-center">
                            Сборка рам
                            в цельную
                            конструкцию осуществляется
                            дополнительными компонентами:
                            вертикальными связями по стенам и горизонтальными связями по кровле,
                            кровельными прогонами. В отдельных случаях вертикальные связи могут
                            заменяться горизонтальными стеновыми прогонами. В работе используем
                            профильные трубы из оцинкованной стали высокого качества</p>
                        <button
                            className="mt-[70px] mobil:mt-[30px] pad:mt-[50px]  text-[#323232] bg-[#F5F5F5] rounded-[100px] p-[20px_32px] max-w-fit hover:bg-[#1A81FA]
                             hover:text-[#ffffff] duration-500 flex gap-[10px] items-center group closebtn netbook:mx-auto pad:mx-auto mobil:mx-auto">
                            <div
                                className="bg-[#ADADAD] rounded-[50%] p-[6px] group-hover:bg-[#ffffff] duration-500">
                                <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.5L9 8.5M9 0.5L1 8.5" stroke="white"
                                          className="group-hover:stroke-[#1A81FA] duration-500"/>
                                </svg>
                            </div>
                            Скрыть схему каркаса
                        </button>
                    </div>
                </div>*/}
            </div>
        </section>
    );
}
export default Angars;