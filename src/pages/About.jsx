import React from "react";
import { Link } from "react-router-dom"; // 1. ÖNEMLİ EKSİK: Bunu mutlaka ekle!
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      
      {/* HERO SECTION */}
      <div className={styles.heroWrapper}>
        
        {/* LEFT CONTENT */}
        <div className={styles.heroLeft}>
          <p className={styles.tagline}>PREMIUM RESTAURANT</p>
          <h1 className={styles.mainTitle}>О НАС</h1>
          <p className={styles.description}>
            SONSUZ — это место, где соединяются атмосфера,
            авторская кухня и высокий сервис. Мы создали ресторан
            премиум-класса для тех, кто ценит стиль, комфорт и
            незабываемые эмоции.
          </p>
          
          {/* GEÇERLİ VE DOĞRU KULLANIM: Buton yerine doğrudan Link stilize edildi */}
          <Link to="/menu" className={styles.menuButton}>
            НАШЕ МЕНЮ
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.heroRightImage}>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Sonsuz Restaurant Interior"
            className={styles.image}
          />
        </div>
      </div>

      {/* INFO BLOCKS / CARDS */}
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>АТМОСФЕРА</h2>
          <p className={styles.cardText}>
            Современный интерьер, уютный свет и премиальная
            атмосфера создают идеальное место для лучшего отдыха.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>КУХНЯ</h2>
          <p className={styles.cardText}>
            Наши шеф-повара готовят шедевры высокого уровня из
            самых свежих и эксклюзивных ингредиентов.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>СЕРВИС</h2>
          <p className={styles.cardText}>
            Мы уделяем максимальное внимание каждой детали, чтобы наши
            гости чувствовали себя по-настоящему особенными.
          </p>
        </div>
      </div>

      {/* STATS PANEL */}
      <div className={styles.statsWrapper}>
        {[
          { number: "10+", text: "ЛЕТ ОПЫТА" },
          { number: "50K+", text: "ГОСТЕЙ" },
          { number: "120+", text: "БЛЮД В МЕНЮ" },
          { number: "4.9", text: "РЕЙТИНГ" },
        ].map((item) => (
          <div key={item.text} className={styles.statItem}>
            <h1 className={styles.statNumber}>{item.number}</h1>
            <p className={styles.statText}>{item.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;