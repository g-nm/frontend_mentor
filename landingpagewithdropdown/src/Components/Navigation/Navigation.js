import styles from './Navigation.module.css';
import logo from '../../images/logo.svg';
import hamburgermenu from '../../images/icon-menu.svg';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import closeMenu from '../../images/icon-close-menu.svg';
import React from 'react';

export default function Navigation() {
  const navstyles = `${styles.navigation} container`;

  const [toggleMenu, setToggleMenu] = React.useState(false);

  function handleNavMenuClick(e) {
    setToggleMenu(!toggleMenu);
  }
  let menuicon = !toggleMenu ? hamburgermenu : closeMenu;

  return (
    <nav className={navstyles}>
      <img src={logo} alt="snap logo" />
      <button
        aria-controls="navigation-drawer"
        aria-expanded={toggleMenu}
        aria-label="navigation drawer button"
        className={styles.btn__navigation}
        onClick={handleNavMenuClick}
      >
        <img
          src={menuicon}
          alt="menu"
          style={{ width: '100%', height: '100%' }}
        />
      </button>
      <NavigationDrawer toggle={toggleMenu} />
    </nav>
  );
}
