import styles from './styles.module.scss'
import Link from 'next/link'

export default function UserMenu({ loggedIn }) {
    return (
        <div className={styles.menu}>
            <h4>Welcome to Shoppay !</h4>
            {loggedIn ?
                <div className={styles.flex}>
                    <img
                        src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
                        alt=""
                        className={styles.menu__img}
                    />
                    <div className={styles.col}>
                        <span>Welcome back,</span>
                        <h3>M74JJI</h3>
                        <span>Sign out</span>
                    </div>
                </div>
                :
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>Register</button>
                    <button className={styles.btn_outlined}>Login</button>
                </div>
            }
            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/wishlist">Whishlist</Link>
                </li>
            </ul>
        </div>

    )
}
