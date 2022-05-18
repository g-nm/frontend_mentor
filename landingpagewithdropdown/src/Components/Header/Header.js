import styles from './Header.module.css';

import headerimagemobile from '../../images/image-hero-mobile.png';
import headerimagedesktop from '../../images/image-hero-desktop.png';
import databiz from '../../images/client-databiz.svg';
import audiophile from '../../images/client-audiophile.svg';
import meet from '../../images/client-meet.svg';
import maker from '../../images/client-maker.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__image_container}>
        <picture>
          <source srcSet={headerimagedesktop} media="(min-width: 35em)" />
          <img
            src={headerimagemobile}
            alt="A person using a laptop"
            className={styles.header__image}
          />
        </picture>
      </div>
      <div className={styles.header__text_content}>
        <h1 className={styles.header__title}>Make remote work</h1>
        <p className={styles.header__text}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className={styles.btn__header}>Learn more</button>
        <div className={`${styles.image__container}`}>
          <div className={styles.textcontent__image_container}>
            <img src={databiz} alt="" />
            <img src={audiophile} alt="" />
            <img src={meet} alt="" />
            <img src={maker} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
