import React, { useCallback, useRef, useState } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import data from '../../data';
import styles from './LightBox.module.css';
export default function LightBox({ id, handleLightBox }) {
  const [activeId, setActiveId] = useState(id);
  const productImageRef = useRef(null);
  const handleClickThumbnail = useCallback((productImage, id, alt) => {
    if (productImage.length > 0) {
      productImageRef.current.src = productImage;
      productImageRef.current.alt = alt;
    }
    const isIdpresent = data.filter((product) => id === product.id).length;

    if (isIdpresent > 0) {
      setActiveId(id);
    }
  }, []);
  const handleClickNextThumbnail = () => {
    const currentIndex = data.findIndex((product) => product.id === activeId);
    if (!data[currentIndex + 1]) {
      setActiveId(data[0].id);
      return;
    }
    setActiveId(data[currentIndex + 1].id);
    return;
  };
  const handleClickPrevThumbnail = () => {
    const currentIndex = data.findIndex((product) => product.id === activeId);
    if (!data[currentIndex - 1]) {
      setActiveId(data[data.length - 1].id);
      return;
    }
    setActiveId(data[currentIndex - 1].id);
    return;
  };
  const { productImage, alt } = data.find((product) => product.id === activeId);

  return (
    <div className={styles.lightbox__container}>
      <div className={styles.lightbox__wrapper}>
        <div className={styles.lightbox__img_container}>
          <button
            className={styles.lightbox__btn_close}
            onClick={handleLightBox}
          >
            <svg width="14" height="15" className={styles.close__svg}>
              <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
            </svg>
            <span className="visually-hidden">Close lightBox</span>
          </button>
          <img
            src={productImage}
            alt={alt}
            ref={productImageRef}
            className={styles.lightbox__img}
          />
          <div className={styles.lightbox__navigation_container}>
            <button
              className={`${styles.navigation__btn} ${styles.navigation__btn_prev}`}
              onClick={handleClickPrevThumbnail}
            >
              <svg
                width="12"
                height="18"
                focusable={'false'}
                aria-hidden={'true'}
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <span className="visually-hidden">Go to previous image</span>
            </button>
            <button
              className={`${styles.navigation__btn} ${styles.navigation__btn_next}`}
              onClick={handleClickNextThumbnail}
            >
              <svg
                width="13"
                height="18"
                focusable={'false'}
                aria-hidden={'true'}
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <span className="visually-hidden">Go to next image</span>
            </button>
          </div>
        </div>
        <ul className={styles.lightbox__thumbnail_list}>
          {data.map((productDetails) => (
            <li
              key={productDetails.id}
              className={styles.lightbox__thumbnail_item}
            >
              <Thumbnail
                {...productDetails}
                handleClickThumbnail={handleClickThumbnail}
                isActive={productDetails.id === activeId}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
