import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import logo from '../images/logo.svg'
import profile from '../images/image-avatar.png'

//mui
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
    //toggle active
    const [isActive, setIsActive] = useState(false)
    const toggle = () => {
        setIsActive(!isActive)
    }
    const removeActive = () => {
        setIsActive(false)
    }

  return (
    <nav>
        <ul className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggle}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </ul>
             <img src={logo} alt="logo" id={styles.logo}/>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive} className={styles.logo}>
              <img src={logo} alt="logo" />
            </li>
            <li onClick={removeActive} className={styles.navItem}>
                <a href="#home">Collections</a>
            </li>
            <li onClick={removeActive} className={styles.navItem}>
                <a href="#home">Men</a>
            </li>
            <li onClick={removeActive} className={styles.navItem}>
                <a href="#home">Women</a>
            </li>
            <li onClick={removeActive} className={styles.navItem}>
                <a href="#home">About</a>
            </li>
            <li onClick={removeActive} className={styles.navItem}>
                <a href="#home">Contact</a>
            </li>
        </ul>
        <ul className={styles.rightNav}>
            <li  className={styles.cart}>
                <span>
                  <ShoppingCart className={styles.cartIcon}/>
                </span>
            </li>
            <li className={styles.profile}>
                <img src={profile} alt="profile" height={60}/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar