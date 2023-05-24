import styles from "./Advantages.module.scss";
const Advantages = () => {
    return (
        <section id="mission"
            className="p-[0_0_200px_0] netbook:p-[50px_0] pad:p-[100px_0_200px_0] mobil:p-[80px_0_150px_0] relative z-0">
            <div className="container">
                <div
                    className="flex justify-between netbook:flex-wrap pad:flex-wrap mobil:flex-wrap items-center relative top-[-90px] netbook:top-0 pad:top-0 mobil:top-0">
                    <h2 className="max-w-[220px]">Почему стоит заказать ангар у нас</h2>
                    <div
                        className="flex gap-[30px] netbook:mt-[30px] pad:mt-[40px] mobil:mt-[40px] pad:overflow-x-scroll mobil:overflow-x-scroll">
                        <div className="group bg-[#F5F5F5] hover:bg-[#1A81FA] duration-500 p-[45px_35px_50px_30px] cursor-pointer rounded-[5px] invis"
                            /* style="transition: all 0.5s;" */>
                            <div
                                className="p-[30px] rounded-[50%] bg-[#FFFFFF] group-hover:bg-[#3E97FF] duration-500 max-w-fit">
                                <svg width="41" height="39" viewBox="0 0 41 39" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.45823 16.3648H3.0568V36.2724H8.45823V16.3648ZM0.356079 13.6501V38.987H11.1589V13.6501H0.356079Z"
                                        fill="#1A81FA" className="group-hover:fill-[#FFFFFF] duration-500" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.1338 12.6969L20.7654 16.3648H34.2715C36.9483 16.3648 38.6894 19.1964 37.4923 21.6031L30.4441 35.7722C30.2916 36.0787 29.9799 36.2724 29.6389 36.2724H25.5628V38.987H29.6389C31.0029 38.987 32.2498 38.2124 32.8597 36.9862L39.9079 22.8171C42.0028 18.6055 38.956 13.6501 34.2715 13.6501H24.6625C24.6625 13.6501 25.0525 12.6048 25.6928 10.9354C26.2439 9.49847 26.9805 7.59911 27.8134 5.5061C29.6138 0.981629 22.8621 -2.18549 18.811 2.79143C14.7599 7.76835 8.45823 18.1746 8.45823 18.1746V38.987H17.4606V36.2724H11.1589V18.9416C11.3258 18.67 11.5413 18.3204 11.7972 17.9082C12.4451 16.8648 13.3506 15.4225 14.3808 13.8274C16.462 10.6045 18.9794 6.87155 20.9012 4.51046C22.223 2.88654 23.7185 2.81408 24.5662 3.13055C25.0204 3.30012 25.2512 3.55458 25.3405 3.72696C25.4023 3.84614 25.4785 4.06405 25.3058 4.4979C24.4001 6.77402 23.6079 8.82164 23.0421 10.3003C22.7591 11.0398 22.5325 11.6376 22.3765 12.0511C22.2985 12.2579 22.2381 12.4186 22.197 12.528L22.1338 12.6969ZM22.8621 38.987V36.2724H20.1613V38.987H22.8621Z"
                                        fill="#1A81FA" className="group-hover:fill-[#FFFFFF] duration-500" />
                                </svg>
                            </div>
                            <p className="group-hover:text-[#FFFFFF] duration-500 max-w-[200px] mt-[100px]">
                                Более 10 лет
                                опыта в сфере
                                производства металлоконструкций</p>
                        </div>
                        <div className="group bg-[#F5F5F5] hover:bg-[#1A81FA] duration-500 p-[45px_35px_50px_30px] cursor-pointer rounded-[5px] invis "
                            /* style="transition: all 0.7s;" */>
                            <div
                                className="p-[30px] rounded-[50%] bg-[#FFFFFF] group-hover:bg-[#3E97FF] duration-500 max-w-fit">
                                <svg width="41" height="39" viewBox="0 0 41 39" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.45823 16.3648H3.0568V36.2724H8.45823V16.3648ZM0.356079 13.6501V38.987H11.1589V13.6501H0.356079Z"
                                        fill="#1A81FA" className="group-hover:fill-[#FFFFFF] duration-500" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.1338 12.6969L20.7654 16.3648H34.2715C36.9483 16.3648 38.6894 19.1964 37.4923 21.6031L30.4441 35.7722C30.2916 36.0787 29.9799 36.2724 29.6389 36.2724H25.5628V38.987H29.6389C31.0029 38.987 32.2498 38.2124 32.8597 36.9862L39.9079 22.8171C42.0028 18.6055 38.956 13.6501 34.2715 13.6501H24.6625C24.6625 13.6501 25.0525 12.6048 25.6928 10.9354C26.2439 9.49847 26.9805 7.59911 27.8134 5.5061C29.6138 0.981629 22.8621 -2.18549 18.811 2.79143C14.7599 7.76835 8.45823 18.1746 8.45823 18.1746V38.987H17.4606V36.2724H11.1589V18.9416C11.3258 18.67 11.5413 18.3204 11.7972 17.9082C12.4451 16.8648 13.3506 15.4225 14.3808 13.8274C16.462 10.6045 18.9794 6.87155 20.9012 4.51046C22.223 2.88654 23.7185 2.81408 24.5662 3.13055C25.0204 3.30012 25.2512 3.55458 25.3405 3.72696C25.4023 3.84614 25.4785 4.06405 25.3058 4.4979C24.4001 6.77402 23.6079 8.82164 23.0421 10.3003C22.7591 11.0398 22.5325 11.6376 22.3765 12.0511C22.2985 12.2579 22.2381 12.4186 22.197 12.528L22.1338 12.6969ZM22.8621 38.987V36.2724H20.1613V38.987H22.8621Z"
                                        fill="#1A81FA" className="group-hover:fill-[#FFFFFF] duration-500" />
                                </svg>
                            </div>
                            <p className="group-hover:text-[#FFFFFF] duration-500 max-w-[200px] mt-[100px]">Работаем с
                                физическимии с юридическимим лицами</p>
                        </div>
                        <div className="group bg-[#F5F5F5] hover:bg-[#1A81FA] duration-500 p-[45px_35px_50px_30px] cursor-pointer rounded-[5px] invis "
                            /* style="transition: all 1s;" */>
                            <div
                                className="p-[30px] rounded-[50%] bg-[#FFFFFF] group-hover:bg-[#3E97FF] duration-500 max-w-fit">
                                <svg width="41" height="39" viewBox="0 0 41 39" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.45823 16.3648H3.0568V36.2724H8.45823V16.3648ZM0.356079 13.6501V38.987H11.1589V13.6501H0.356079Z"
                                        fill="#1A81FA" className="group-hover:fill-[#FFFFFF] duration-500" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.1338 12.6969L20.7654 16.3648H34.2715C36.9483 16.3648 38.6894 19.1964 37.4923 21.6031L30.4441 35.7722C30.2916 36.0787 29.9799 36.2724 29.6389 36.2724H25.5628V38.987H29.6389C31.0029 38.987 32.2498 38.2124 32.8597 36.9862L39.9079 22.8171C42.0028 18.6055 38.956 13.6501 34.2715 13.6501H24.6625C24.6625 13.6501 25.0525 12.6048 25.6928 10.9354C26.2439 9.49847 26.9805 7.59911 27.8134 5.5061C29.6138 0.981629 22.8621 -2.18549 18.811 2.79143C14.7599 7.76835 8.45823 18.1746 8.45823 18.1746V38.987H17.4606V36.2724H11.1589V18.9416C11.3258 18.67 11.5413 18.3204 11.7972 17.9082C12.4451 16.8648 13.3506 15.4225 14.3808 13.8274C16.462 10.6045 18.9794 6.87155 20.9012 4.51046C22.223 2.88654 23.7185 2.81408 24.5662 3.13055C25.0204 3.30012 25.2512 3.55458 25.3405 3.72696C25.4023 3.84614 25.4785 4.06405 25.3058 4.4979C24.4001 6.77402 23.6079 8.82164 23.0421 10.3003C22.7591 11.0398 22.5325 11.6376 22.3765 12.0511C22.2985 12.2579 22.2381 12.4186 22.197 12.528L22.1338 12.6969ZM22.8621 38.987V36.2724H20.1613V38.987H22.8621Z"
                                        fill="#1A81FA" className="group-hover:fill-[#FFFFFF] duration-500" />
                                </svg>
                            </div>
                            <p className="group-hover:text-[#FFFFFF] duration-500 max-w-[200px] mt-[100px]">Собственное
                                производство</p>
                        </div>
                    </div>
                </div>
                <p /* style="transition: all 1s;" */
                    className="text-[28px] leading-[39px] mobil:text-[22px] mobil:leading-[29px] max-w-[920px] text-center mx-auto mt-[100px] pad:mt-[120px] mobil:mt-[80px] invis">
                    Перед тем, как
                    приступить к строительству, необходимо узнать о наиболее распространенных типах
                    сооружений. Знание об особенностях ангаров, их достоинствах и недостатках поможет сделать
                    правильный выбор конструкции. Вы можете самостоятельно ознакомиться с ассортиментом, а так же
                    заказать подробную консультацию у нашего специалиста. </p>
            </div>
        </section>
    );
}
export default Advantages;