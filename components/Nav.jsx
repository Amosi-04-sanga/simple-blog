import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <span className={styles.logo} >MD</span>
            <ul className={styles.list}>
                <li className={styles.item} >
                    <Link href="/" >
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.item} >
                    <Link href="/add-post" >
                    <a>Add post</a>
                    </Link>
                </li>
                
                <li className={styles.item} >
                    <Link href="/contacts" >
                    <a>Contacts</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav