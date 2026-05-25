import React from 'react';
import { Link } from 'react-router-dom'; // React Router DOM Link bileşeni eklendi
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Sol Taraf: Premium Logo */}
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img src={logo} alt="Sonsuz Logo" className={styles.logoImage} />
          </Link>
        </div>

        {/* Orta Kısım: Navigasyon Linkleri (Artık Link Bileşeni) */}
        <nav className={styles.navigation}>
          <Link to="/menu" className={styles.navLink}>МЕНЮ</Link>
          <Link to="/about" className={styles.navLink}>О НАС</Link>
          <Link to="/contacts" className={styles.navLink}>КОНТАКТЫ</Link>
        </nav>

        {/* Sağ Taraf: Telefon ve Rezervasyon Link Butonu */}
        <div className={styles.actionWrapper}>
          <a href="tel:+996700123456" className={styles.phoneNumber}>
            +996 553 365 365
          </a>
          {/* Buton görünümlü lüks yönlendirme linki */}
          <Link to="/booking" className={styles.reservationButton}>
            ЗАБРОНИРОВАТЬ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;