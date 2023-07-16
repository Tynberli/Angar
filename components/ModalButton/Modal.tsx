import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

import Link from 'next/link';
import CustomInput from './Input/Input';

const Modal = ({ title, onClose, children }: {
    title: string,
    onClose: any,
    children: any,
}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width={18} height={18} viewBox="0 0 18 18"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity={0.5} d="M1 1L17 17M17 1L1 17" stroke="#323232" />
                    </svg>
                </button>
                <div className={styles.content}>{children}</div>
                <form action="#" className={styles.form} method="POST" encType="multipart/form-data">
                    <h3>Заполните заявку на просчет стоимости ангара</h3>
                    {/* контактные данные */}
                    <label>Контактная информация</label>
                    <input type="text" placeholder="Имя *" data-validate-field="name" name="Имя"
                        className={styles.input} />
                    <input className={styles.input} type="tel" placeholder="Телефон *"
                        data-validate-field="tel" name="Телефон" />
                    <input className={styles.input} type="tel" placeholder="E-mail (не обязательно)"
                        name="E-mail" />
                    <CustomInput
                        placeholder="Введите значение"
                        pattern="[A-Za-z]{3}"
                        name="myInput"
                        required={true}
                    />
                    {/* селект с выбором типа и цвета */}
                    <label>Тип ангара</label>
                    <div className="relative">

                        <select name="Ангар" className="input relative">
                            <option value="Выберите тип ангара" className="text-[rgba(50,50,50,0.5)]">Выберите тип ангара
                            </option>
                            <option value="Прямостенный односкатный">Прямостенный односкатный</option>
                            <option value="Двухскатный">Двухскатный</option>
                            <option value="Прямостенный с уклоном">Прямостенный с уклоном</option>
                        </select>

                        <div className="absolute top-[60%] right-[25px]">
                            <svg width="12" height="7" viewBox="0 0 12 7"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M1 0.5L6 5.5L11 0.5" stroke="#323232" />
                            </svg>
                        </div>
                    </div>

                    {/* размеры */}
                    <label>Габариты ангара</label>
                    <div className={styles.gabarites}>

                        <input type="text" placeholder="Длина, м" name="Длина" className={styles.input} />
                        <input type="text" placeholder="Ширина, м" name="Ширина" className={styles.input} />
                        <input type="text" placeholder="Высота в коньке, м" name="Высота в коньке"
                            className={styles.input} />
                        <input type="text" placeholder="Высота стен, м" name="Высота стен" className={styles.input} />

                    </div>
                    {/* чекбокс на согласие */}
                    <div className={styles.agreement}>

                        <input type="checkbox" checked className={styles.agreement_checkbox} name="" id=""
                            value="" />
                        <span className={styles.agreement_title}>Я согласен с обработкой
                            персональных данных и <Link href="/privacy-policy/" className="underline">политикой конфиденциальности</Link>
                        </span>

                    </div>
                    {/* кнопка отправки */}
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
