import React, { useContext, useState } from "react";
import menubtn from '../../img/menu.png'
import styles from "./NavBar.module.css";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { ABOUT_ROUTE, ADMIN_ROUTE, CONTACTS_PAGE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";


const NavBar = observer(() => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const {user} = useContext(Context)

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <div className={styles.navbar}>
      <Link to={SHOP_ROUTE} className={styles.logo}><div className={styles.logo}>magazin</div></Link>

      {user.isAuth 
      
      ? 
      
      <ul className={click ? styles.navMenuActive : styles.navMenu}>
        <li className={styles.navItem}>
          <Link className={styles.navLinks} onClick={closeMobileMenu} to={ADMIN_ROUTE}>
            Админ панель
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLinks} onClick={logOut} to={LOGIN_ROUTE}>
            Выйти
          </Link>
        </li>
        

        <li className={styles.navItem}>
          <Link to={CONTACTS_PAGE} className={styles.navLinks} onClick={closeMobileMenu}>
            Контакты
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link to={ABOUT_ROUTE} className={styles.navLinks} onClick={closeMobileMenu}>
            О нас
          </Link>
        </li>
      </ul> 
      
      : 

      <ul className={click ? styles.navMenuActive : styles.navMenu}>
        <li className={styles.navItem} onClick={() => {user.setIsAuth(true)}}>
          <Link to={LOGIN_ROUTE} className={styles.navLinks} onClick={closeMobileMenu}>
            Авторизация
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link to={ABOUT_ROUTE} className={styles.navLinks} onClick={closeMobileMenu}>
            О нас
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link to={CONTACTS_PAGE} className={styles.navLinks} onClick={closeMobileMenu}>
            Контакты
          </Link>
        </li>
      </ul>
    
      }

      <div className={styles.menuIcon} onClick={handleClick}>
        <img src={menubtn} alt=")" className={click ? styles.closeIcon : styles.menuIcon}/>
      </div>
    </div>
  );
})

export default NavBar;
