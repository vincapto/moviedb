import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import React from 'react';
import style from './NavBar.module.scss';

function NavBar() {
  const getLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? { color: 'orange' } : {};
  };
  return (
    <div className={style.navbarWrapper}>
      <div className={style.container}>
        <nav className={style.navbar}>
          <ul className={style.navbarList}>
            <li className={style.navbarItem}>
              <NavLink style={getLinkStyle} className={style.navbarLink} to="/" end>
                main
              </NavLink>
            </li>
            <li className={style.navbarItem}>
              <NavLink style={getLinkStyle} className={style.navbarLink} to="/about">
                about
              </NavLink>
            </li>
            <li className={style.navbarItem}>
              <NavLink style={getLinkStyle} className={style.navbarLink} to="/form">
                form
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
