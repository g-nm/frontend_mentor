import styles from './NavigationDrawer.module.css';
import todo from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminders from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';
import NavigationDrawerItem from '../NavigationDrawerItem/NavigationDrawerItem';
import { nanoid } from 'nanoid';

export default function NavigationDrawer({ toggle }) {
  const navitems = [
    {
      name: 'features',
      subitems: [
        { name: 'Todo list', icon: todo },
        { name: 'Calendar', icon: calendar },
        { name: 'Reminders', icon: reminders },
        { name: 'Planning', icon: planning },
      ],
    },
    {
      name: 'company',
      subitems: [{ name: 'history' }, { name: 'our team' }, { name: 'blog' }],
    },
    {
      name: 'careers',
    },
    {
      name: 'about',
    },
  ];

  return (
    <div
      className={styles.navigation__drawer_container}
      style={{
        transform: toggle && 'translateX(0%)',
      }}
    >
      <div className={styles.navigation__drawer} id="navigation-drawer">
        <ul className={styles.navigation__menu}>
          {navitems.map((draweritem) => (
            <NavigationDrawerItem key={nanoid()} draweritem={draweritem} />
          ))}

          <NavigationDrawerItem>
            <div className={styles.listitem__btn_container}>
              <button className={`${styles.btn__login} ${styles.button}`}>
                Login
              </button>
              <button className={`${styles.btn__register} ${styles.button}`}>
                Register
              </button>
            </div>
          </NavigationDrawerItem>
        </ul>
      </div>
    </div>
  );
}
