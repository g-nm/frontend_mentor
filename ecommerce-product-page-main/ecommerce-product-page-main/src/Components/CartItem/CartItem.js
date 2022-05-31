import React, { useContext } from 'react';
import { CartDispatchContext } from '../../Store/Context';
import styles from './CartItem.module.css';

export default function CartItem({ name, price, quantity, id, alt, url }) {
  const dispatchCart = useContext(CartDispatchContext);

  return (
    <div key={id} className={styles.cart__item_row}>
      <div className={styles.cart__item_image}>
        <img src={url} alt={alt} className={styles.cart__image} />
      </div>
      <div className={styles.cart__item_content}>
        <p className={`${styles.p__remove_margin}`}>{name}</p>
        <p
          className={`${styles.p__remove_margin}`}
          style={{ paddingBlockStart: '.25em' }}
        >
          ${price.toFixed(2)} x {quantity}{' '}
          <span className={styles.cart__item_total}>
            ${(price * quantity).toFixed(2)}
          </span>
        </p>
      </div>
      <button
        className={styles.cart__delete_button}
        onClick={() =>
          dispatchCart({ type: 'removeFromCart', payload: { id } })
        }
      >
        <svg width="14" height="16" className={styles.cart__delete_icon}>
          <path
            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
            id="a"
          />
        </svg>
        <span className="visually-hidden">Remove {name} from your cart </span>
      </button>
    </div>
  );
}
