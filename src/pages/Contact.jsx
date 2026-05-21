import React from "react";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.mainWrapper}>
        
        {/* SOL SÜTUN: İLETİŞİM BİLGİLERİ */}
        <div className={styles.leftColumn}>
          <h1 className={styles.mainTitle}>
            <span className={styles.goldGradientText}>КОНТАКТЫ</span>
          </h1>
          <p className={styles.subtitle}>Мы всегда на связи</p>

          {/* TELEFON */}
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>ТЕЛЕФОН</p>
            <h2 className={styles.blockValue}>+996 553 365 365</h2>
          </div>

          {/* ADRES */}
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>АДРЕС</p>
            <h2 className={styles.blockValue}>Каракол,Гагарина 22а</h2>
          </div>

          {/* ÇALIŞMA SAATLERİ */}
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>ВРЕМЯ РАБОТЫ</p>
            <h2 className={styles.blockValue}>09:00 - 00:00</h2>
            <p className={styles.blockSubText}>Ежедневно</p>
          </div>

          {/* EMAIL */}
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>EMAIL</p>
            <h2 className={styles.blockValue}>info@sonsuz.kg</h2>
          </div>
        </div>

        {/* SAĞ SÜTUN: SİNEMATİK HARİTA */}
        <div className={styles.mapColumn}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11894.238497672223!2d78.38685973719056!3d42.48448449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b8455c535c3%3A0x9fdead7646965d9d!2sCafe%20Karakolka%20Zhivaya%20Forel'!5e0!3m2!1str!2skg!4v1716290000000!5m2!1str!2skg"
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sonsuz Restaurant Location"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;