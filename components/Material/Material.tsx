import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from './Material.module.scss';

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Material() {
    return (
        <section id="material" className={styles.material}>
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
                    <div className="container ">
                        <div className={styles.slide__content}>
                            <div className={styles.descr}>
                                <h2>Каркас</h2>
                                <p>В работе используем профильные трубы из оцинкованной стали высокого качества</p>
                                <div className={styles.items}>
                                    <div className={styles.item}>
                                        <Image width={16} height={15} src="/icon-1.svg" alt="40*40*2 мм" />
                                        <p>40*40*2 мм</p>
                                    </div>
                                    <div className={styles.item}>
                                        <Image width={16} height={15} src="/icon-1.svg" alt="60*60*3 мм" />
                                        <p>60*60*3 мм</p>
                                    </div>
                                    <div className={styles.item}>
                                        <Image width={16} height={15} src="/icon-1.svg" alt="80*80*4 мм" />
                                        <p>80*80*4 мм</p>
                                    </div>
                                    <div className={styles.item}>
                                        <Image width={16} height={15} src="/icon-1.svg" alt="100*100*7 мм" />
                                        <p>100*100*7 мм</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.picture}>
                                <Image src="/img-2.webp" width={801} height={531} alt="Каркас"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container ">
                        <div className={styles.slide__content}>
                            <div className={styles.descr}>
                                <h2>Основание для металлоконструкции</h2>
                                <p>Подбираем фундамент для ангара только после изучения почвы на месте строительства</p>
                                <div className={styles.items}>
                                    <div className={styles.item}>Ленточный фундамент
                                    </div>
                                    <div className={styles.item}>Монолитный фундамент
                                    </div>
                                    <div className={styles.item}>Свайный фундамент
                                    </div>
                                    <div className={styles.item}>Каркасный фундамент
                                    </div>
                                    <div className={styles.item}>Блочный фундамент
                                    </div>
                                </div>
                            </div>
                            <div className={styles.picture}>
                                <Image src="/img-3.webp" width={875} height={429} alt="Основание для металлоконструкции"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
