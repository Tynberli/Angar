import Link from "next/link";
import styles from './Logo.module.scss'

const Logo = () =>
    <Link href='/' className={styles.logo}>
        Profi
    </Link>
export default Logo;