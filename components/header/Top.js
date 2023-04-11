import styles from './styles.module.scss'
import Link from 'next/link';
import { MdSecurity } from 'react-icons/md'
import {BsSuitHeart} from "react-icons/bs"
import {RiAccountPinCircleLine,RiArrowDropDownFill} from "react-icons/ri"

export default function Top() {
  return (
      <div className="styles.top">
          <div className={styles.top__container}>
                  <div></div>
                  <ul className={styles.top__list}>
                      <li>
                          <img src="https://www.seekpng.com/png/detail/866-8665424_morocco-employability-and-land-compact-maroc-flag-ball.png" alt="" />
                      <span>Morrocco / usd</span>
                      </li>
                      <li>
                          <MdSecurity />    
                          <span>Buyer Protection</span>
                      </li>
                      <li>
                          <span>Customer Service</span>
                      </li>
                      <li>
                          <span>Hlep</span>
                      </li>
                      <li>
                      <BsSuitHeart />
                      <Link href="/profile/wishlist">
                          <span>Wishlist</span>
                       </Link>
                      </li>
                      <li>
                          <div className={styles.flex}>
                              <RiAccountPinCircleLine /> 
                              <span>Account</span>
                              <RiArrowDropDownFill />
                          </div>
                      </li>
                </ul>  
          </div>
    </div>
  )
}
