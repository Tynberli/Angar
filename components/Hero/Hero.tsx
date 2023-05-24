import styles from "./Hero.module.scss";
import ModalButton from "../ModalButton/ModalButton";
const Hero = () => {
    return (
        <section
            className={styles.wrap}>
            <div className="container flex flex-col">
                <h1>Индивидуальные конструкции для вашего бизнеса</h1>
                <p>Большой выбор решений</p>
                <ModalButton
                    buttonText="Заказать ангар"
                    buttonStyle="primary"
                    modalTitle="Модальное окно"
                    modalContent={''}
                />
            </div>
        </section>
    );
}
export default Hero;