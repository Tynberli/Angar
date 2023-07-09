import { Link } from 'react-scroll';
import { useMediaQuery } from '../../hooks';
import { useState } from 'react';

import Logo from '../Logo/Logo';
import ModalButton from '../ModalButton/ModalButton';
import LinkButton from '../LinkButton/LinkButton';
import styles from './Header.module.scss';
import stylesMenu from './MobilMenu.module.scss';


const Header = () => {
    const isMobil = useMediaQuery(768)
    const [menuOpen, setMenuOpen] = useState(false)
    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;
    const currentMenuItemClass = isMobil ? stylesMenu.menu__item : styles.nav__item;

    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('fixed-page');
        setMenuOpen(!menuOpen);
    }
    const closeMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.remove('fixed-page');
        setMenuOpen(false);
    }
    return (
        <header className={styles.header}>
            <div className={styles.wrap}>
                <div className="flex gap-[40px] mobil:gap-[20px] items-center">
                    <Logo />
                    {isMobil && <button onClick={handleToggleMenu} className={`${styles.burger} ${menuOpen ? styles.open : ''}`}>
                        <span />
                        <span />
                        <span />
                    </button>}

                </div>
                <nav className={`${isMobil ? stylesMenu.menu : styles.navigation} ${menuOpen ? stylesMenu.open : ''}`}>
                    <ul className={`${styles.navigation__list}`}>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='mission'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.nav__link}
                            >Преимущества</Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='catalog'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.nav__link}
                            >Каталог</Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='material'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.nav__link}
                            >Материалы</Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='angars'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.nav__link}
                            >Виды ангаров</Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='warming'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.nav__link}
                            >Утепление</Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='steps'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.nav__link}
                            >Этапы постройки</Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='contacts'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.nav__link}
                            >Контакты</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.contact}>
                    <LinkButton
                        buttonText="+7 800 777 14 27"
                        buttonStyle="headerPhone"
                        textlink="tel:+78007771427" />
                    <ModalButton
                        buttonText="Оставить заявку"
                        buttonStyle="headerOrder"
                        modalTitle="Модальное окно"
                        modalContent={''} />
                </div>
            </div>
        </header>
    );
}
export default Header;