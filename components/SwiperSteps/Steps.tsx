import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from './Steps.module.scss';

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Steps() {
    return (
        <section id="steps" className={styles.steps__angars}>
            <div className="container">
                <h2>Этапы постройки ангара</h2>
                <Swiper
                    autoHeight={true}
                    speed={2000}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        type: "progressbar",
                    }}
                    modules={[Navigation, Pagination]}
                    className={styles.mySwiper}>
                    <SwiperSlide>
                        <div>
                            <div
                                className={styles.descr__step}>
                                <p>Возведение фундамента</p>
                                <p>В зависимости от конструкции, на
                                    данном этапе заливаются разные виды фундамента.</p>
                            </div>
                            <div className={styles.picture}>
                                <Image width={940} height={320}
                                    src="/step-1.webp" alt="Возведение фундамента" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div
                                className={styles.descr__step}>
                                <p >Формирование каркаса</p>
                                <p >На установленном фундаменте возводится основная конструкция каркаса.</p>
                            </div>
                            <div className={styles.picture}>
                                <Image width={940} height={320}
                                    src="/step-2.webp" alt="Формирование каркаса" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div
                                className={styles.descr__step}>
                                <p >Обшивка</p>
                                <p >На данном этапе на конструкцию ангара
                                    закрепляется гидроизоляция, крепится профлист.</p>
                            </div>
                            <div className={styles.picture}>
                                <Image width={940} height={320}
                                    src="/step-3.webp" alt="Обшивка" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div
                                className={styles.descr__step}>
                                <p>Доп.борудование: двери, ворота, окна</p>
                                <p >Устанавлиевается дополнительное
                                    оборудование и инженерные сети.</p>
                            </div>
                            <div className={styles.picture}>
                                <Image width={940} height={320}
                                    src="/step-4.webp" alt="Доп.борудование: двери, ворота, окна" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div
                                className={styles.descr__step}>
                                <p >Утепление</p>
                                <p >При необходимости, производится
                                    дополнительное утепление готового ангара.</p>
                            </div>
                            <div className={styles.picture}>
                                <Image width={940} height={320}
                                    src="/step-5.webp" alt="Утепление" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="flex justify-between mt-[30px]  pad:hidden mobil:hidden">
                        <p className="max-w-[103px]">Возведение фундамента</p>
                        <p className="max-w-[129px]">Формирование каркаса</p>
                        <p>Обшивка</p>
                        <p className="max-w-[166px]">Доп.борудование: двери, ворота, окна</p>
                        <p>Утепление</p>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}
