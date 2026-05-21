import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sol Sütun: Logo, Alt Yazı ve Yuvarlak Sosyal Medya İkonları */}
        <div className={styles.leftColumn}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Sonsuz Logo" className={styles.logo} />
          </div>
          <p className={styles.slogan}>Taste the fire of Turkey</p>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/sonsuz_restaurant/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconCircle}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@sonsuz_restaurant"
              target="_blank"
              rel="noreferrer"
              className={styles.iconCircle}
            >
              <FaTiktok />
            </a>
            <a
              href="https://wa.me/996553365365"
              target="_blank"
              rel="noreferrer"
              className={styles.iconCircle}
            >
              <FaWhatsapp />
            </a>
            <a href="tel:+996553 365 365" className={styles.iconCircle}>
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Orta Sütun: İletişim Bilgileri (Hizalı ve Alt Başlıklı) */}
        <div className={styles.middleColumn}>
          <h3 className={styles.columnTitle}>КОНТАКТЫ</h3>
          <ul className={styles.contactList}>
            <li>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:+996700900700" className={styles.contactLink}>
                +996 553 365 365
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span className={styles.contactText}>Каракол,Гагарина 22а / БЦ Статус 3 этаж</span>
            </li>
            <li>
              <FaClock className={styles.contactIcon} />
              <div className={styles.timeWrapper}>
                <span className={styles.contactText}>09:00 - 00:00</span>
                <span className={styles.subTimeText}>Ежедневно</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Sağ Sütun: Dikdörtgen Koyu Harita Bölümü */}
        <div className={styles.rightColumn}>
          <h3 className={styles.columnTitle}>МЫ НА КАРТЕ</h3>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11894.238497672223!2d78.38685973719056!3d42.48448449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b8455c535c3%3A0x9fdead7646965d9d!2sCafe%20Karakolka%20Zhivaya%20Forel&#39;!5e0!3m2!1str!2skg!4v1716290000000!5m2!1str!2skg"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) contrast(1.2)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sonsuz Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* En Alt: İnce Telif Hakkı Satırı */}
      <div className={styles.bottomBar}>
        <p className={styles.copyrightText}>
          © 2026 SONSUZ Restaurant. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
