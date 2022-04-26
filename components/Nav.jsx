import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <span className={styles.logo} >MD</span>
            <ul className={styles.list}>
                <li className={styles.item} >
                    <Link href="/" >
                        {"Home"}
                    </Link>
                </li>
                <li className={styles.item} >
                    <Link href="/add-post" >
                        {"add post"}
                    </Link>
                </li>
                
                <li className={styles.item} >
                    <Link href="/contacts" >
                        {"contacts"}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav