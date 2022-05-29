import React, {
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import { quantityReducer } from '../../Reducers/reducer';
import { CartDispatchContext } from '../../Store/Context';
import styles from './Header.module.css';
import jsonData from '../../data.js';
import LightBox from '../LightBox/LightBox';

export default function Header() {
  const productImageRef = useRef(null);
  const [activeThumbnailId, setActiveThumbnail] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);
  const [itemQuantity, dispatch] = useReducer(quantityReducer, 0);

  const dispatchCartItems = useContext(CartDispatchContext);
  const products = useMemo(() => jsonData, []);

  const handleClickThumbnail = useCallback(
    (productImage, id, alt) => {
      if (productImage.length > 0) {
        productImageRef.current.src = productImage;
        productImageRef.current.alt = alt;
      }
      const isIdpresent = products.filter(
        (product) => id === product.id
      ).length;

      if (isIdpresent > 0) {
        setActiveThumbnail(id);
      }
    },
    [products]
  );
  const handleIncreaseQuantity = (e) => {
    dispatch({ type: 'add' });
  };
  const handleDecreaseQuantity = (e) => {
    dispatch({ type: 'minus' });
  };
  const handleAddToCart = () => {
    dispatchCartItems({
      type: 'addToCart',
      payload: {
        name: 'Fall limited Edition Sneakers',
        url: products[0].thumbnail,
        alt: 'a pair of sneakers with one shoe balancing on a rock',
        quantity: itemQuantity,
        price: 125,
        id: 1,
      },
    });
  };
  const handleLightBox = () => {
    setShowLightBox(!showLightBox);
  };
  const handleNextImage = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === activeThumbnailId
    );

    if (!products[currentIndex + 1]) {
      productImageRef.current.src = products[0].productImage;
      setActiveThumbnail(products[0].id);
      return;
    }
    productImageRef.current.src = products[currentIndex + 1].productImage;
    setActiveThumbnail(products[currentIndex + 1].id);
  };
  const handlePrevImage = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === activeThumbnailId
    );

    if (!products[currentIndex - 1]) {
      productImageRef.current.src = products[products.length - 1].productImage;
      setActiveThumbnail(products[products.length - 1].id);
      return;
    }
    productImageRef.current.src = products[currentIndex - 1].productImage;
    setActiveThumbnail(products[currentIndex - 1].id);
  };

  return (
    <main className={`${styles.main}`}>
      <div className={styles.main__img_wrapper}>
        <button
          className={styles.main__btn_showlightbox}
          onClick={handleLightBox}
        >
          <img
            src={
              products.find((product) => product.id === activeThumbnailId)
                .productImage
            }
            alt="sneakers"
            className={styles.main__product_picture}
            ref={productImageRef}
            data-testid={'productImage'}
          />
          <span className="visually-hidden">Show lightBox</span>
        </button>
        <div className={styles.main__thumbnail_container}>
          {products.map((product) => {
            return (
              <Thumbnail
                {...product}
                handleClickThumbnail={handleClickThumbnail}
                key={product.id}
                isActive={activeThumbnailId === product.id}
              />
            );
          })}
        </div>
        <div className={styles.product__image_nav}>
          <button
            className={`${styles.btn__img_navigation} ${styles.btn__nav_prev}`}
            onClick={handlePrevImage}
          >
            <svg width="12" height="18">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </button>
          <button
            className={`${styles.btn__img_navigation} ${styles.btn__nav_next}`}
            onClick={handleNextImage}
          >
            <svg width="13" height="18">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>
      <section className={`${styles.main__text} container`}>
        <div className={styles.main__company_name}>SNEAKER COMPANY</div>
        <h1 className={styles.main__title}>Fall Limited Edition Sneakers</h1>
        <p className={styles.main__product_text}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer
        </p>
        <div className={styles.product__price_container}>
          <div className={styles.product__current_price}>
            <span className={styles.current__price}>$125.00</span>
            <span className={styles.discount__percentage}>50%</span>
          </div>
          <div className={styles.product__previous_price}>$250.00</div>
        </div>
        <div className={styles.product__options}>
          <div className={styles.option__quantity}>
            <button
              aria-label="Decrease quantity"
              className={styles.btn__option_decrease}
              onClick={handleDecreaseQuantity}
            >
              <svg width="12" height="4" fill="#FF7E1B">
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </svg>
            </button>
            <span className={styles.quantity}>{itemQuantity}</span>
            <button
              aria-label="Increase quantity"
              className={styles.btn__option_increase}
              onClick={handleIncreaseQuantity}
            >
              <svg width="12" height="12" fill="#FF7E1B">
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </svg>
            </button>
          </div>
          <button
            className={styles.option__addto_cart}
            onClick={handleAddToCart}
          >
            <span>
              <svg
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#69707D"
                className={styles.cart__icon}
                aria-hidden={'true'}
                focusable={'false'}
              >
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
              </svg>
            </span>
            <span>Add to cart</span>
          </button>
        </div>
      </section>
      {showLightBox && (
        <LightBox id={activeThumbnailId} handleLightBox={handleLightBox} />
      )}
    </main>
  );
}
