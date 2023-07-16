import styles from "./Warming.module.scss";
import Image from "next/image";
const Warming = () => {
    return (
        <section id="warming" className="pt-[180px] pad:pt-[120px] mobil:pt-[80px] relative bg-[#F5F5F5]">
            <div className="absolute w-[100%] h-[100%] top-0 pointer-events-none z-10" /* style="background-image: url('img/img-7.png'); 
                     background-repeat: no-repeat; background-size: cover; mix-blend-mode: screen; -webkit-mix-blend-mode: screen;
                    transform: matrix(-1, 0, 0, 1, 0, 0); -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);" */></div>
            <div className="container">
                <p
                    className="text-[28px] leading-[39px] mobil:text-[22px] mobil:leading-[29px] max-w-[920px] text-center mx-auto text-[#323232] relative z-10">
                    Все ангары могут сооружаться без утепления и с утеплением. В сооружениях второго типа в стены
                    кровли устанавливается теплоизоляция, что позволяет сократить потери тепла в холодное время года
                    до 30%</p>

                <div className="tab-insulation flex flex-col items-center mt-[60px]">
                    <div className="flex items-center p-[5px] rounded-[5px]  max-w-fit relative z-10 bg-[#ffffff]">
                        <button className="tab-insulation_btn  flex items-center gap-[10px] text-left p-[23.5px_35px] mobil:p-[15px_20px]
                                 rounded-[5px] whitespace-nowrap duration-500" data-tabs-path="insulation-no">Без
                            утепления
                        </button>
                        <button className="tab-insulation_btn tab-insulation_btn--active flex items-center gap-[10px] text-left p-[23.5px_35px] 
                            mobil:p-[15px_20px] rounded-[5px] whitespace-nowrap duration-500"
                            data-tabs-path="insulation-yes">С
                            утеплением
                        </button>
                    </div>

                    <div data-tabs-target="insulation-no"
                        className="tab-insulation_content flex mt-[40px]  duration-500">
                        <div className="relative ">
                            <div className=" flex-col gap-[10px] hidden mobil:flex">
                                <div className="bg-[#ffffff] rounded-[5px] p-[25px_40px_35px_30px]  invis"
                                        /* style="transition: all 1s;" */>
                                    <p className="font-bold text-[20px] leading-[26px] ">Профлист</p>
                                    <p className="max-w-[283px] mt-[10px]">
                                        Описание материала в несколько строк, например модификация стали
                                        используемая для профнастила</p>
                                </div>
                                <div className="bg-[#ffffff] rounded-[5px] p-[25px_40px_35px_30px]  invis"
                                     >
                                    <p className="font-bold text-[20px] leading-[26px] ">Гидроизоляция</p>
                                    <p className="max-w-[283px] mt-[10px]">
                                        Описание материала в несколько строк, например модификация стали
                                        используемая для профнастила</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Image width={1757} height={874} src="/img-8-2.webp" alt="" className="relative pad:left-[-20%] w-100% invis"/>
                                <div
                                    className="bg-[#1A81FA] rounded-[50%] p-[6px] max-w-fit absolute top-[20px] left-[60%] hidden mobil:block">
                                    <div className="bg-[#FFFFFF] rounded-[50%] p-[10px_13.7px_9px_12px]"><svg width="7"
                                        height="13" viewBox="0 0 7 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.63073 0C5.85873 0 6.01473 0.0480001 6.09873 0.144C6.19473 0.228 6.24273 0.384 6.24273 0.612V12.168C6.24273 12.396 6.19473 12.558 6.09873 12.654C6.01473 12.738 5.85873 12.78 5.63073 12.78H4.60473C4.37673 12.78 4.21473 12.738 4.11873 12.654C4.03473 12.558 3.99273 12.396 3.99273 12.168V2.736L1.47273 4.14C1.23273 4.272 1.04673 4.32 0.914727 4.284C0.782727 4.236 0.662727 4.11 0.554727 3.906L0.104727 3.096C0.00872727 2.892 -0.0212727 2.736 0.0147273 2.628C0.0627273 2.508 0.188727 2.388 0.392727 2.268L3.90273 0.252C4.17873 0.084 4.46673 0 4.76673 0H5.63073Z"
                                            fill="#1A81FA" />
                                    </svg>
                                    </div>
                                </div>
                                <div
                                    className="bg-[#1A81FA] rounded-[50%] p-[6px] max-w-fit absolute top-[100px] left-[10%] hidden mobil:block">
                                    <div className="bg-[#FFFFFF] rounded-[50%] p-[9px_11.45px_9.6px_11px]">
                                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.09 2.97C0.906 0.99 2.484 0 4.824 0C6.144 0 7.2 0.396 7.992 1.188C8.796 1.968 9.198 2.91 9.198 4.014C9.198 5.31 8.838 6.306 8.118 7.002C7.398 7.698 6.084 8.424 4.176 9.18C4.152 9.192 4.062 9.228 3.906 9.288C3.762 9.336 3.672 9.372 3.636 9.396C3.6 9.408 3.51 9.444 3.366 9.504C3.234 9.552 3.144 9.594 3.096 9.63C3.048 9.666 2.97 9.714 2.862 9.774C2.766 9.834 2.694 9.894 2.646 9.954C2.61 10.002 2.562 10.062 2.502 10.134C2.442 10.206 2.4 10.284 2.376 10.368C2.364 10.452 2.358 10.536 2.358 10.62V10.944H8.37C8.598 10.944 8.754 10.992 8.838 11.088C8.934 11.172 8.982 11.328 8.982 11.556V12.438C8.982 12.666 8.934 12.828 8.838 12.924C8.754 13.008 8.598 13.05 8.37 13.05H0.612C0.384 13.05 0.222 13.008 0.126 12.924C0.042 12.828 0 12.666 0 12.438V11.088C0 10.5 0.09 9.99 0.27 9.558C0.462 9.114 0.75 8.742 1.134 8.442C1.518 8.13 1.878 7.884 2.214 7.704C2.55 7.524 2.994 7.326 3.546 7.11C4.722 6.654 5.496 6.282 5.868 5.994C6.504 5.514 6.822 4.89 6.822 4.122C6.822 3.558 6.624 3.084 6.228 2.7C5.844 2.304 5.346 2.106 4.734 2.106C3.546 2.106 2.718 2.64 2.25 3.708C2.154 3.936 2.052 4.08 1.944 4.14C1.836 4.188 1.674 4.176 1.458 4.104L0.486 3.744C0.078 3.588 -0.054 3.33 0.09 2.97Z"
                                                fill="#1A81FA" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1A81FA] absolute rounded-[50%] p-[6px] max-w-fit top-[300px] left-[200px] pad:top-[150px] pad:left-[100px]
                                     netbook:top-[200px] netbook:left-[230px] mobil:hidden invis"
                                    /* style="transition: all 1.5s;" */>
                                <div className="bg-[#ffffff] h-[12px] w-[12px] rounded-[50%] relative">
                                    <p
                                        className="bg-[#ffffff] p-[17px_40px_17px_30px] font-bold text-[20px] leading-[26px] 
                                            rounded-[5px] absolute top-[-70px] left-[-200px] pad:top-[30px] pad:left-[-100px]">
                                        Гидроизоляция</p>
                                </div>
                            </div>
                            <div className="bg-[#1A81FA] absolute  rounded-[50%] p-[6px] max-w-fit top-[180px] left-[700px]
                                     netbook:left-[330px] netbook:top-[30px] pad:left-[15%] pad:top-[30px]  mobil:hidden invis"
                                    /* style="transition: all 1.5s;" */>
                                <div className="bg-[#ffffff] h-[12px] w-[12px] rounded-[50%] relative ">
                                    <div className="bg-[#ffffff]  absolute  z-20 top-[-200px] netbook:top-0 pad:top-[-60px] left-[20px] pad:left-[40px] rounded-[5px]
                                             p-[25px_40px_35px_30px] ">
                                        <p className="font-bold text-[20px] leading-[26px] w-[283px]">Профлист</p>
                                        <p className="max-w-[283px] mt-[10px] relative ">
                                            Описание материала в несколько строк, например модификация стали
                                            используемая для профнастила</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-tabs-target="insulation-yes"
                        className="tab-insulation_content tab-insulation_content--active flex  mt-[40px] duration-500">
                        <div className="relative ">
                            <div className=" flex-col gap-[10px] hidden mobil:flex invis" /* style="transition: all 1s;" */>
                                <div className="bg-[#ffffff] rounded-[5px] p-[25px_40px_35px_30px] ">
                                    <p className="font-bold text-[20px] leading-[26px] ">Профлист</p>
                                    <p className="max-w-[283px] mt-[10px]">
                                        Описание материала в несколько строк, например модификация стали
                                        используемая для профнастила</p>
                                </div>
                                <div className="bg-[#ffffff] rounded-[5px] p-[25px_40px_35px_30px] invis"
                                        /* style="transition: all 1.2s;" */>
                                    <p className="font-bold text-[20px] leading-[26px] ">Гидроизоляция</p>
                                    <p className="max-w-[283px] mt-[10px]">
                                        Описание материала в несколько строк, например модификация стали
                                        используемая для профнастила</p>
                                </div>
                                <div className="bg-[#ffffff] rounded-[5px] p-[25px_40px_35px_30px] invis">
                                    <p className="font-bold text-[20px] leading-[26px] ">Утеплитель</p>
                                    <p className="max-w-[283px] mt-[10px]">
                                        Описание материала в несколько строк, например модификация стали
                                        используемая для профнастила</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Image width={1757} height={874}  src="/img-8.webp" alt="" className="relative pad:left-[-20%] w-100% invis"/>
                                <div
                                    className="bg-[#1A81FA] rounded-[50%] p-[6px] max-w-fit absolute top-[20px] left-[60%] hidden mobil:block">
                                    <div className="bg-[#FFFFFF] rounded-[50%] p-[10px_13.7px_9px_12px]"><svg width="7"
                                        height="13" viewBox="0 0 7 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.63073 0C5.85873 0 6.01473 0.0480001 6.09873 0.144C6.19473 0.228 6.24273 0.384 6.24273 0.612V12.168C6.24273 12.396 6.19473 12.558 6.09873 12.654C6.01473 12.738 5.85873 12.78 5.63073 12.78H4.60473C4.37673 12.78 4.21473 12.738 4.11873 12.654C4.03473 12.558 3.99273 12.396 3.99273 12.168V2.736L1.47273 4.14C1.23273 4.272 1.04673 4.32 0.914727 4.284C0.782727 4.236 0.662727 4.11 0.554727 3.906L0.104727 3.096C0.00872727 2.892 -0.0212727 2.736 0.0147273 2.628C0.0627273 2.508 0.188727 2.388 0.392727 2.268L3.90273 0.252C4.17873 0.084 4.46673 0 4.76673 0H5.63073Z"
                                            fill="#1A81FA" />
                                    </svg>
                                    </div>
                                </div>
                                <div
                                    className="bg-[#1A81FA] rounded-[50%] p-[6px] max-w-fit absolute top-[100px] left-[10%] hidden mobil:block">
                                    <div className="bg-[#FFFFFF] rounded-[50%] p-[9px_11.45px_9.6px_11px]">
                                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.09 2.97C0.906 0.99 2.484 0 4.824 0C6.144 0 7.2 0.396 7.992 1.188C8.796 1.968 9.198 2.91 9.198 4.014C9.198 5.31 8.838 6.306 8.118 7.002C7.398 7.698 6.084 8.424 4.176 9.18C4.152 9.192 4.062 9.228 3.906 9.288C3.762 9.336 3.672 9.372 3.636 9.396C3.6 9.408 3.51 9.444 3.366 9.504C3.234 9.552 3.144 9.594 3.096 9.63C3.048 9.666 2.97 9.714 2.862 9.774C2.766 9.834 2.694 9.894 2.646 9.954C2.61 10.002 2.562 10.062 2.502 10.134C2.442 10.206 2.4 10.284 2.376 10.368C2.364 10.452 2.358 10.536 2.358 10.62V10.944H8.37C8.598 10.944 8.754 10.992 8.838 11.088C8.934 11.172 8.982 11.328 8.982 11.556V12.438C8.982 12.666 8.934 12.828 8.838 12.924C8.754 13.008 8.598 13.05 8.37 13.05H0.612C0.384 13.05 0.222 13.008 0.126 12.924C0.042 12.828 0 12.666 0 12.438V11.088C0 10.5 0.09 9.99 0.27 9.558C0.462 9.114 0.75 8.742 1.134 8.442C1.518 8.13 1.878 7.884 2.214 7.704C2.55 7.524 2.994 7.326 3.546 7.11C4.722 6.654 5.496 6.282 5.868 5.994C6.504 5.514 6.822 4.89 6.822 4.122C6.822 3.558 6.624 3.084 6.228 2.7C5.844 2.304 5.346 2.106 4.734 2.106C3.546 2.106 2.718 2.64 2.25 3.708C2.154 3.936 2.052 4.08 1.944 4.14C1.836 4.188 1.674 4.176 1.458 4.104L0.486 3.744C0.078 3.588 -0.054 3.33 0.09 2.97Z"
                                                fill="#1A81FA" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="bg-[#1A81FA] rounded-[50%] p-[6px] max-w-fit absolute top-[80px] left-[60%] hidden mobil:block">
                                    <div className="bg-[#FFFFFF] rounded-[50%] p-[9px_11.45px_9.6px_11px]"><svg
                                        width="10" height="14" viewBox="0 0 10 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.1395 3.654C9.1395 4.926 8.6715 5.832 7.7355 6.372C8.9475 6.924 9.5535 7.938 9.5535 9.414C9.5535 10.614 9.1635 11.568 8.3835 12.276C7.6035 12.972 6.4515 13.32 4.9275 13.32C2.3835 13.32 0.7575 12.312 0.0495 10.296C-0.0825 9.912 0.0495 9.648 0.4455 9.504L1.4175 9.162C1.6335 9.09 1.7955 9.084 1.9035 9.144C2.0115 9.192 2.1135 9.324 2.2095 9.54C2.4255 10.128 2.7255 10.554 3.1095 10.818C3.4935 11.082 4.0995 11.214 4.9275 11.214C6.4395 11.214 7.1955 10.602 7.1955 9.378C7.1955 8.178 6.5715 7.578 5.3235 7.578H3.4515C3.2235 7.578 3.0615 7.536 2.9655 7.452C2.8815 7.368 2.8395 7.206 2.8395 6.966V6.156C2.8395 5.928 2.8815 5.772 2.9655 5.688C3.0615 5.592 3.2235 5.544 3.4515 5.544H4.9995C5.5755 5.544 6.0315 5.394 6.3675 5.094C6.7155 4.782 6.8895 4.368 6.8895 3.852C6.8895 2.688 6.2175 2.106 4.8735 2.106C4.0935 2.106 3.5235 2.232 3.1635 2.484C2.8155 2.736 2.5335 3.162 2.3175 3.762C2.2335 3.978 2.1375 4.116 2.0295 4.176C1.9215 4.224 1.7535 4.212 1.5255 4.14L0.5535 3.798C0.1575 3.654 0.0255 3.39 0.1575 3.006C0.5055 1.998 1.0575 1.248 1.8135 0.756C2.5695 0.252 3.6015 0 4.9095 0C6.2535 0 7.2915 0.324 8.0235 0.972C8.7675 1.62 9.1395 2.514 9.1395 3.654Z"
                                            fill="#1A81FA" />
                                    </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1A81FA] absolute rounded-[50%] p-[6px] max-w-fit top-[300px] left-[200px] pad:top-[150px] pad:left-[100px]
                                     netbook:top-[200px] netbook:left-[230px] mobil:hidden invis">
                                <div className="bg-[#ffffff] h-[12px] w-[12px] rounded-[50%] relative">
                                    <p
                                        className="bg-[#ffffff] p-[17px_40px_17px_30px] font-bold text-[20px] leading-[26px] 
                                            rounded-[5px] absolute top-[-70px] left-[-200px] pad:top-[30px] pad:left-[-100px]">
                                        Гидроизоляция</p>
                                </div>
                            </div>
                            <div className="bg-[#1A81FA] absolute rounded-[50%] p-[6px] max-w-fit top-[180px] left-[700px]
                                     netbook:left-[330px] netbook:top-[30px] pad:left-[15%] pad:top-[30px]  mobil:hidden invis">
                                <div className="bg-[#ffffff] h-[12px] w-[12px] rounded-[50%] relative">
                                    <div className="bg-[#ffffff]  absolute  z-20 top-[-200px] netbook:top-0 pad:top-[-60px] left-[20px] pad:left-[40px] rounded-[5px]
                                             p-[25px_40px_35px_30px] ">
                                        <p className="font-bold text-[20px] leading-[26px] w-[283px]">Профлист</p>
                                        <p className="max-w-[283px] mt-[10px]">
                                            Описание материала в несколько строк, например модификация стали
                                            используемая для профнастила</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1A81FA] absolute rounded-[50%] p-[6px] max-w-fit top-[280px] left-[650px] pad:top-[180px]
                                     pad:left-[50%]  mobil:hidden invis">
                                <div className="bg-[#ffffff] h-[12px] w-[12px] rounded-[50%] relative">
                                    <p className="bg-[#ffffff] p-[17px_40px_17px_30px] font-bold text-[20px] leading-[26px]
                                             rounded-[5px] absolute top-[30px] left-[10px]">
                                        Утеплитель</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Warming;