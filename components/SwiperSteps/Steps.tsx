/* eslint-disable react/jsx-key */
import React, { useRef, useState } from "react";
// импортируем свайпер
import { Swiper, SwiperSlide } from "swiper/react";
// импортируем стили свайпера
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Step from "./Step/Step";//импортирую компонент контента в слайдере
import { stepData } from './Step/Step.data'//импортирую  контент для слайдеров

import styles from './Steps.module.scss';//общие стили для компонента 

// импорт модулей для свайпер
import { Navigation, Pagination } from "swiper";

export default function Steps() {
    return (
        <section id="steps" className={styles.steps__angars}>
            <div className="container">
                <h2>Этапы постройки ангара</h2>
                <Swiper
                    autoHeight={true}
                    speed={2000}//
                    navigation={true}//
                    pagination={{
                        clickable: true,
                        type: "progressbar",
                    }}
                    modules={[Navigation, Pagination]}
                    className={styles.mySwiper}>
                    {/* тут передаю данные для слайдера */}
                    {stepData.map(({ title, descr, img }) => (
                        <SwiperSlide>
                            {/* тут сам компонент контена */}
                            <Step key={title} title={title} descr={descr} img={img} />

                        </SwiperSlide>))}
                    {/* тут я вывожу описание для этапа */}
                    <div className={styles.step__descr}>
                        {stepData.map(({ title }) => (<p>{title}</p>))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
}
