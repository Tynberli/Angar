import React from 'react';
import styles from './Form.module.scss';

import Link from 'next/link';
import Input from "./Input/Input";
import SelectAngar from "./Select/Type/SelectAngar";

const Form = () => {
    return (
        <form className={styles.form}>
            <h3>Заполните заявку на просчет стоимости ангара</h3>
            <label>Контактная информация</label>
            <Input
                text="Имя *"
                type="text"
                placeholder="Имя *"
                name="Имя"
            />
            <Input
                text="Телефон *"
                type="tel"
                placeholder="Телефон *"
                name="Телефон"
            />
            <Input
                text="E-mail (не обязательно)"
                type="email"
                placeholder="E-mail (не обязательно)"
                name="E-mail"
            />

            <label>Тип ангара</label>
            <div className="relative">
                <SelectAngar name="Ангар"/>
                <div className="absolute top-[60%] right-[25px]">
                    <svg width="12" height="7" viewBox="0 0 12 7"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M1 0.5L6 5.5L11 0.5" stroke="#323232"/>
                    </svg>
                </div>
            </div>

            <label>Габариты ангара</label>
            <div className={styles.gabarites}>
                <Input
                    text=""
                    type="text"
                    placeholder="Длина, м"
                    name="Длина"
                />
                <Input
                    text=""
                    type="text"
                    placeholder="Ширина, м"
                    name="Ширина"
                />
                <Input
                    text=""
                    type="text"
                    placeholder="Высота, м"
                    name="Высота"
                />
            </div>
            <div className={styles.agreement}>
                <input type="checkbox" checked className={styles.agreement_checkbox} name="" id=""
                       value=""/>
                <span className={styles.agreement_title}>Я согласен с обработкой
                            персональных данных и <Link href="/privacy-policy/" className="underline">политикой конфиденциальности</Link>
                        </span>
            </div>
            <Input
                text="Отправить"
                type="submit"
                placeholder="Высота, м"
                name="Высота"
            />
        </form>
    );
};

export default Form;
