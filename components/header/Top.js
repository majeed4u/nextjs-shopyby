/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src='https://cdn.countryflags.com/thumbs/sudan/flag-round-250.png'
              alt='country-flag'
            />
            <span>Sudan /usd</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href='/profile/wishlist'>
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
  );
}
export default Top;
