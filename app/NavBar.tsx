import styles from '../styles/NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
    return(
    <nav>
        <div className={styles.parent}>
            <div className={styles.child}>
                <Link href={"/"} style={{ textDecoration: 'none' }}>
                    <p className={styles.link_item}>The ToolBox.</p>
                </Link>
                <div>
                    <Link href={"/home"} style={{ textDecoration: 'none' }}>
                        <p className={styles.link_item}>Home</p>
                    </Link>
                </div>
            </div>

        </div>
    </nav>
    ) 
}