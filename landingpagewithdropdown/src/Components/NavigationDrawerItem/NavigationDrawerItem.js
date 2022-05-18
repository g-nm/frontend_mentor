import { nanoid } from 'nanoid';
import React from 'react';
import { ReactComponent as Arrowdown } from '../../images/icon-arrow-down.svg';
import { ReactComponent as Arrowup } from '../../images/icon-arrow-up.svg';
import styles from './NavigationDrawerItem.module.css';
export default function NavigationDrawerItem({ draweritem = {}, children }) {
  const [togglesubitems, setToggleSubItems] = React.useState(false);

  function handleToggleSubItemsClick() {
    setToggleSubItems(!togglesubitems);
  }

  if (React.Children.count(children) > 0) {
    return <li className={styles.navigation__menu_listitem}>{children}</li>;
  }
  if (draweritem.subitems === undefined || draweritem.subitems.length < 0) {
    return (
      <li className={styles.navigation__menu_listitem}>{draweritem.name}</li>
    );
  }
  if (draweritem.subitems.length > 0) {
    return (
      <li className={styles.navigation__menu_listitem}>
        <button
          className={styles.nav__btn_nested}
          onClick={handleToggleSubItemsClick}
          aria-controls="subitems"
          aria-expanded={togglesubitems}
        >
          <span>{draweritem.name}</span>
          {!togglesubitems ? <Arrowdown /> : <Arrowup />}
        </button>

        {togglesubitems && (
          <ul
            id="sub__items"
            className={styles.draweritem__subitems_container}
            style={{ marginBlockStart: togglesubitems && '2em' }}
          >
            {draweritem.subitems.map((subitem) => {
              return (
                <li key={nanoid()} className={styles.draweritem__subitem}>
                  {subitem.icon && <img src={subitem.icon} alt="" />}
                  <span>{subitem.name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }
  return <li className={styles.navigation__menu_listitem}></li>;
}
