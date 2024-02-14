import ModalButton from "../ModalButton/ModalButton";
import LinkButton from '../LinkButton/LinkButton';
import Logo from '../Logo/Logo';
import Link from 'next/link';

import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <footer id="contacts">
            <div className="container">
                <div className={styles.wrap}>
                    <h3>Закажите проект ангара уже сейчас</h3>
                    <p>Для этого позвоните по номеру</p>
                    <LinkButton
                        buttonText="+7 800 777 14 27"
                        buttonStyle="footerPhone"
                        textlink="tel:+78007771427" />
                    <div>
                        <span>или</span>
                        <ModalButton
                            buttonText="заполните форму"
                            buttonStyle="footerOrder"
                            modalTitle="Модальное окно"
                            modalContent={''}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="container">
                    <div className={styles.copyright}>
                        <Link href="/privacy-policy/" className={styles.privacy}>© Название. Все права защищены.</Link>
                        <Logo />
                        <LinkButton
                            buttonText="Разработано в Artway studio."
                            buttonStyle="footer"
                            textlink="https://artwaystyle.ru/" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;