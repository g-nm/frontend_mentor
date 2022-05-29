import React, { useContext, useState } from 'react';
import logo from '../../images/logo.svg';
import profileImage from '../../images/image-avatar.png';
import styles from './Navbar.module.css';
import { CartContext } from '../../Store/Context';
import CartItem from '../CartItem/CartItem';

export default function Navbar() {
  const data = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const sum = data.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  const cartItems = data.map((cartItem) => {
    return <CartItem {...cartItem} key={cartItem.id} />;
  });

  return (
    <nav className={` container ${styles.nav} `}>
      <button
        className={styles.nav__hamburger_btn}
        onClick={() => setShowNav(!showNav)}
      >
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
          />
        </svg>
      </button>
      <a href="#home">
        <img src={logo} alt="sneaker store logo" />
      </a>
      <div className={styles.nav__list_container}>
        <ul
          className={`${styles.nav__list} ${styles.nav__list_main}`}
          style={{ transform: showNav && 'translateX(0)' }}
        >
          <li className={styles.nav__close}>
            <button onClick={() => setShowNav(!showNav)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                />
              </svg>
            </button>
          </li>
          <li className={styles.nav__list_item}>
            <a href="#collection" className={styles.nav__item_link}>
              Collections
            </a>
          </li>
          <li className={styles.nav__list_item}>
            <a href="#men" className={styles.nav__item_link}>
              Men
            </a>
          </li>
          <li className={styles.nav__list_item}>
            <a href="#women" className={styles.nav__item_link}>
              Women
            </a>
          </li>
          <li className={styles.nav__list_item}>
            <a href="#about" className={styles.nav__item_link}>
              About
            </a>
          </li>
          <li className={styles.nav__list_item}>
            <a href="#contact" className={styles.nav__item_link}>
              Contact
            </a>
          </li>
        </ul>

        <ul className={styles.nav__list}>
          <li className={`${styles.nav__list_item} ${styles.nav__item_cart}`}>
            <button
              className={styles.btn__cart}
              onClick={() => setShowCart(!showCart)}
            >
              <svg
                width="22"
                height="20"
                aria-hidden={'true'}
                focusable={'false'}
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                />
              </svg>
              <span className={styles.cart__total}>{sum > 0 && sum}</span>

              <span className="visually-hidden">Items in your cart</span>
            </button>
          </li>
          <li className={styles.nav__list_img}>
            <div>
              <img
                src={profileImage}
                alt="Profile"
                className={styles.nav__profile_image}
              />
            </div>
          </li>
        </ul>
        {showCart && (
          <div className={styles.cart__container}>
            <h3 className={styles.cart__title}>Cart</h3>
            <div className={styles.cart__wrapper}>
              <div className={styles.cart__items}>
                {sum > 0 ? (
                  <>
                    {cartItems}
                    <button className={styles.cart__checkout_btn}>
                      Checkout
                    </button>
                  </>
                ) : (
                  <p className={styles.cart__empty}>Your Cart is empty</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
