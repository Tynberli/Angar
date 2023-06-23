import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ title, onClose, children }: {
    title: string,
    onClose: any,
    children: string,
}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <svg width="18" height="18" viewBox="0 0 18 18"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M1 1L17 17M17 1L1 17" stroke="#323232" />
                        </svg>
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
                <form action="#" className="form flex flex-col " method="POST" encType="multipart/form-data">
                    <p className="font-bold text-[28px] leading-[32px] ">Заполните заявку на просчет
                        стоимости ангара</p>
                    <label className="text-[16px] leading-[21px] mt-[30px]">Контактная информация
                        <input type="text" placeholder="Имя *" data-validate-field="name" name="Имя"
                            className="input input-name mt-[15px]" />
                        <input className="input input-tel mt-[10px]" type="tel" placeholder="Телефон *"
                            data-validate-field="tel" name="Телефон" />
                        <input className="input input-tel mt-[10px]" type="tel" placeholder="E-mail (не обязательно)"
                            name="E-mail" /></label>
                    <label className="text-[16px] leading-[21px] mt-[30px]">Тип ангара
                        <div className="relative">
                            <select name="Ангар" className="input relative">
                                <option value="Выберите тип ангара" className="text-[rgba(50,50,50,0.5)]">Выберите тип ангара
                                </option>
                                <option value="Прямостенный односкатный">Прямостенный односкатный</option>
                                <option value="Двухскатный">Двухскатный</option>
                                <option value="Прямостенный с уклоном">Прямостенный с уклоном</option>
                            </select>
                            <div className="absolute top-[60%] right-[25px]"><svg width="12" height="7" viewBox="0 0 12 7"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M1 0.5L6 5.5L11 0.5" stroke="#323232" />
                            </svg></div>
                        </div>
                    </label>
                    <p className="text-[16px] leading-[21px] mt-[35px]">Габариты ангара</p>
                    <label className="text-[16px] leading-[21px] mt-[15px] grid grid-cols-2 gap-[10px]">
                        <input type="text" placeholder="Длина, м" name="Длина" className="input col-span-1 mt-0" />
                        <input type="text" placeholder="Ширина, м" name="Ширина" className="input  col-span-1 mt-0" />
                        <input type="text" placeholder="Высота в коньке, м" name="Высота в коньке"
                            className="input col-span-1 mt-0" />
                        <input type="text" placeholder="Высота стен, м" name="Высота стен" className="input  col-span-1 mt-0" />
                    </label>
                    <label className="agreement relative flex gap-8 items-center mt-[35px] ">
                        <input type="checkbox" checked className="agreement-checkbox form-check" name="" id=""
                             value=""  />
                        <span className="agreement-title form-check-span">Я согласен с обработкой
                            персональных данных и <a href="#" className="underline">политикой конфиденциальности</a>
                        </span>
                    </label>
                    <input type="submit" value="Отправить"
                        className="mt-[40px] text-[#ffffff] bg-[#1A81FA] rounded-[100px] p-[20px_35px] hover:bg-[#ffffff]
                        hover:text-[#1A81FA] border border-[#1A81FA] hover:border-[#1A81FA] duration-500 cursor-pointer"/>
                </form>
            </div>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
