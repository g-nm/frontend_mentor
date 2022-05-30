import React from 'react';
import styles from './Thumbnail.module.css';

const Thumbnail = React.memo(
  ({ productImage, thumbnail, alt, handleClickThumbnail, id, isActive }) => {
    return (
      <button
        className={`${styles.btn__thumbnail} ${
          isActive && styles.btn__thumbnail_active
        }`}
        onClick={() => handleClickThumbnail(productImage, id, alt)}
      >
        <div className={styles.img__container}>
          <img
            src={thumbnail}
            alt={alt}
            className={styles.btn__thumbnail_image}
          />
        </div>
      </button>
    );
  }
);
export default Thumbnail;
