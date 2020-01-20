import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <div>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/variables" activeClassName={styles.active}>
            Variables
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
)

export default Header;