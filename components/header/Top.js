import styles from './styles.module.scss'
import Link from 'next/link';
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri"
import { useState } from 'react';
import UserMenu from './UserMenu';

export default function Top() {
    const [loggedIn, setLoggedIn] = useState(true)
    const [visible, setVisible] = useState(false)

    return (
        <div className="styles.top">
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.li}>
                        <img src="https://www.seekpng.com/png/detail/866-8665424_morocco-employability-and-land-compact-maroc-flag-ball.png" alt="" />
                        <span>Morrocco / usd</span>
                    </li>
                    <li className={styles.li}>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.li}>
                        <span>Customer Service</span>
                    </li>
                    <li className={styles.li}>
                        <span>Hlep</span>
                    </li>
                    <li className={styles.li}>
                        <BsSuitHeart />
                        <Link href="/profile/wishlist">
                            <span>Wishlist</span>
                        </Link>
                    </li>
                    <li className={styles.li}
                        onMouseOver={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}>
                        {
                            loggedIn ? <li className={styles.li}>
                                <div className={styles.flex}>
                                    <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png" alt="" />
                                    <span>Samer</span>
                                    <RiArrowDropDownFill />
                                </div>
                            </li> :
                                <li className={styles.li}>
                                    <div className={styles.flex}>
                                        <RiAccountPinCircleLine />
                                        <span>Account</span>
                                        <RiArrowDropDownFill />
                                    </div>
                                </li>
                        }
                        {visible && <UserMenu loggedIn={loggedIn} />}
                    </li>
                </ul>
            </div>
        </div>
    )
}
