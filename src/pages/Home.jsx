import React, { useState } from "react";
import { Link } from "react-router-dom";
// Mobil uyumluluk ve yapısal düzen için MUI bileşenleri eklendi
import { Box } from "@mui/material";

import styles from "../styles/Home.module.css";

// İkonlar ve Görseller
import miniLogo from "../assets/mini-logo.png";
import {
  FaMapMarkedAlt,
  FaTruck,
  FaUtensils,
  FaCalendarCheck,
  FaChevronLeft,
  FaChevronRight,
  FaFire,
} from "react-icons/fa";

// 1. DİZİ: HERO ALANINDAKİ 4 ADET HIT YEMEK VERİSİ
const HERO_SLIDES = [
  {
    id: 1,
    label: "ТРАДИЦИИ И МОДЕРН",
    title: "SONSUZ",
    subtitle: "ТУРЕЦКИЙ РЕСТОРАН НОВОГО ПОКОЛЕНИЯ",
    desc: "Погрузитесь в гастрономическое путешествие, где огонь анатолийского гриля сочетается с безупречным премиальным сервисом.",
    bg: "https://agharestaurant.ca/wp-content/uploads/2024/10/2.jpg",
  },
  {
    id: 2,
    label: "HIT DISH #01",
    title: "ISKENDER",
    subtitle: "ШЕДЕВР ИЗ ТРАБЗОНА С ТОПЛЕНЫМ МАСЛОМ",
    desc: "Тончайшие ломтики сочной ягнятины, уложенные на хрустящий фирменный пиде, залитые кипящим маслом и поданные с густым фермерским йогуртом.",
    bg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    label: "HIT DISH #02",
    title: "ADANA KEBAB",
    desc: "Настоящая классика кулинарного искусства Аданы. Рубленое вручную мясо молодого барашка, приготовленное на открытом огне березовых углей.",
    bg: "https://nutriscan.app/calories-nutrition/images/adana-kebab-b8ec4.webp",
  },
  {
    id: 4,
    label: "HIT DISH #03",
    title: "BAKLAVA",
    subtitle: "ИЗУМРУДНАЯ СИМФОНИЯ АНТЕПА",
    desc: "40 слоев тончайшего теста, тающего во рту, с обилием отборных фисташек, доставленных прямым рейсом из Газиантепа.",
    bg: "https://cdn.tasteatlas.com/images/recipes/105a4e88dca44f4a81dbaf6ccb7b83bc.jpg",
  },
];

// 2. DİZİ: Lüks Rozet Verileri
const HERO_BADGES = [
  {
    id: 1,
    icon: <FaMapMarkedAlt />,
    title: "АДРЕС",
    desc: "Наш ресторан в центре",
    link: "/contacts",
  },
  {
    id: 2,
    icon: <FaTruck />,
    title: "ДОСТАВКА",
    desc: "Премиум сервис на дом",
    link: "/menu",
  },
  {
    id: 3,
    icon: <FaUtensils />,
    title: "ЕДА",
    desc: "Шедевры от шефа",
    link: "/menu",
  },
  {
    id: 4,
    icon: <FaCalendarCheck />,
    title: "РЕЗЕРВ",
    desc: "Онлайн бронирование",
    link: "/booking",
  },
];

// 3. DİZİ: 10 Premium Yemek Verisi
const POPULAR_DISHES = [
  {
    id: 1,
    name: "ISKENDER KEBAB",
    desc: "Нежнейшая ягнятина на фирменном пиде с топленым маслом из Трабзона и йогуртом.",
    price: 690,
    tag: "BESTSELLER",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "ADANA KEBAB",
    desc: "Рубленое мясо молодого барашка со специями, обжаренное на березовых углях.",
    price: 650,
    tag: "PREMIUM",
    img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "TURKISH PIDE",
    desc: "Хрустящая лодочка из теста с начинкой из телятины и тягучего сыра Кашар.",
    price: 550,
    tag: "TRADITIONAL",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "PREMIUM BAKLAVA",
    desc: "40 тончайших слоев теста, пропитанных шербетом, с фисташками из Антепа.",
    price: 290,
    tag: "DELIGHT",
    img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "KUZU TANDIR",
    desc: "Запеченная голяшка ягненка, томившаяся 8 часов in каменной печи с ароматными травами.",
    price: 890,
    tag: "CHEF'S SPECIAL",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "BEYTI KEBAB",
    desc: "Фарш из телятины в тонком лаваше под соусом из запеченных томатов и масла.",
    price: 680,
    tag: "POPULAR",
    img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "LAHMACUN DUO",
    desc: "Две хрустящие турецкие mini-пиццы с пряным мясным фаршем, зеленью и лимоном.",
    price: 320,
    tag: "CRUNCHY",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "KÜNEFE",
    desc: "Горячит десерт из хрустящего теста кадаиф, расплавленного сыра и фисташковой пудры.",
    price: 350,
    tag: "HOT SWEET",
    img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "MEZE PLATTER",
    desc: "Ассорти из 6 традиционных турецких закусок: хумус, хайдари, мухаммара и пиде.",
    price: 480,
    tag: "FOR SHARING",
    img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "SULTAN'S STEAK",
    desc: "Премиальный рибай-стейк, маринованный в османских специях, с гарниром из спаржи.",
    price: 1250,
    tag: "LUXURY STK",
    img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=600&auto=format&fit=crop",
  },
];

const Home = () => {
  const aboutImg =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop";

  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div className={styles.homeContainer}>
      {/* 1. BÖLÜM: INTERAKTIF HERO SECTION */}
      <Box component="section" className={styles.heroSection}>
        <div
          className={styles.heroBgOverlay}
          style={{ backgroundImage: `url(${activeSlide.bg})` }}
        ></div>
        <div className={styles.ambientGlow}></div>

        {/* Mobilde taşmaması için padding ve hizalama esnekliği sağlandı */}
        <Box
          className={styles.heroContent}
          key={activeSlide.id}
          sx={{ px: { xs: 2, sm: 4, md: 0 }, width: "100%" }}
        >
          <div className={styles.badgeTop}>
            <FaFire className={styles.firePulse} /> {activeSlide.label}
          </div>
          <h1 className={styles.heroTitle}>{activeSlide.title}</h1>
          <div className={styles.titleDivider}>
            <span className={styles.goldLine}></span>
            <span className={styles.goldDiamond}>◆</span>
            <span className={styles.goldLine}></span>
          </div>
          <h2 className={styles.heroSubtitle}>
            {activeSlide.id === 1 ? (
              <>
                ТУРЕЦКИЙ РЕСТОРАН <br />
                <span className={styles.goldGradientText}>
                  НОВОГО ПОКОЛЕНИЯ
                </span>
              </>
            ) : (
              <span className={styles.goldGradientText}>
                {activeSlide.subtitle || "ШЕДЕВР КУХНИ"}
              </span>
            )}
          </h2>
          <p className={styles.heroDescription}>{activeSlide.desc}</p>
          {/* Butonların mobilde alt alta gelmesi veya taşmaması sağlandı */}
          <Box
            className={styles.heroButtons}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Link to="/booking" className={styles.btnPrimaryClick}>
              ЗАБРОНИРОВАТЬ СТОЛ
            </Link>
            <Link to="/menu" className={styles.btnSecondaryLuxury}>
              СМОТРЕТЬ МЕНЮ
            </Link>
          </Box>
        </Box>

        {/* DIKEY SAYFA GEZGİNİ - Mobilde çok yer kaplamaması veya gizlenmesi için ayarlandı */}
        <Box
          className={styles.verticalPagination}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <div className={styles.lineScroll}></div>
          <span
            className={`${styles.pDot} ${currentSlide === 0 ? styles.pActive : ""}`}
            onClick={() => setCurrentSlide(0)}
          >
            <FaFire />
          </span>
          <span
            className={`${styles.pDot} ${currentSlide === 1 ? styles.pActive : ""}`}
            onClick={() => setCurrentSlide(1)}
          >
            02
          </span>
          <span
            className={`${styles.pDot} ${currentSlide === 2 ? styles.pActive : ""}`}
            onClick={() => setCurrentSlide(2)}
          >
            03
          </span>
          <span
            className={`${styles.pDot} ${currentSlide === 3 ? styles.pActive : ""}`}
            onClick={() => setCurrentSlide(3)}
          >
            04
          </span>
        </Box>
      </Box>

      {/* 2. BÖLÜM: BADGES - Mobilde 1'erli veya 2'şerli sıralanması sağlandı */}
      <Box component="section" className={styles.badgesSection}>
        <Box
          className={styles.luxuryBadgesWrapper}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {HERO_BADGES.map((badge) => (
            <Link
              to={badge.link}
              key={badge.id}
              className={styles.luxuryBadgeItem}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.iconBox}>{badge.icon}</div>
              <div className={styles.badgeInfoText}>
                <h4>{badge.title}</h4>
                <p>{badge.desc}</p>
              </div>
            </Link>
          ))}
        </Box>
      </Box>

      {/* 3. BÖLÜM: ABOUT US - Mobilde görsel ve yazının ortalanması ve esnemesi sağlandı */}
      <Box component="section" className={styles.aboutSection}>
        <Box
          className={styles.aboutContainer}
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: { xs: 6, md: 0 },
            // Mobilde sola yapışmayı engellemek için dikeyde ortalama ve genişliği tam yayma eklendi
            alignItems: { xs: "center", md: "stretch" },
            justifyContent: { xs: "center", md: "space-between" },
            width: "100%",
          }}
        >
          <div className={styles.aboutImageSide}>
            <div className={styles.goldFrameBehind}></div>
            <img
              src={aboutImg}
              alt="Sonsuz Luxury Interior"
              className={styles.aboutMainImage}
            />
            <div className={styles.experienceCard}>
              <h5>15+</h5>
              <p>Лет Опыта Шефов</p>
            </div>
          </div>

          {/* Yazıların da mobilde kutuyu ortalaması için küçük bir dokunuş */}
          <Box
            className={styles.aboutContentSide}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <span className={styles.luxurySub}>О КУЛЬТУРЕ РЕСТОРАНА</span>
            <h3 className={styles.luxuryMainTitle}>
              ГДЕ КАЖДОЕ БЛЮДО — <br />
              <span className={styles.goldText}>ИСТОРИЯ ВКУСА</span>
            </h3>
            <p className={styles.luxuryParagraph}>
              <strong>SONSUZ</strong> — это не просто ресторан, это portal в
              кулинарное наследие великой Турции, переосмысленное под призмой
              современного хай-энд дизайна.
            </p>
            <p className={styles.luxuryParagraph}>
              Мясо высшего качества, специи, привезенные напрямую из Стамбула, и
              магия открытого огня создают незабываемую симфонию.
            </p>
            <Link to="/about" className={styles.btnDiscover}>
              УЗНАТЬ БОЛЬШЕ
            </Link>
          </Box>
        </Box>
      </Box>
      {/* SONSUZLUK GEÇİŞİ 3 */}
      <div className={styles.sectionDivider}>
        <div className={styles.verticalLine}></div>
        <img src={miniLogo} alt="Sonsuzluk" className={styles.dividerLogo} />
      </div>

      {/* 4. BÖLÜM: POPULAR DISHES - Mobilde kartların kaydırılabilir veya esnek grid olması sağlandı */}
      <Box component="section" className={styles.gurmeMenuSection}>
        <div className={styles.luxuryMenuHeader}>
          <div className={styles.titleTagLine}>
            <span className={styles.goldLineShort}></span>
            <span className={styles.premiumLabel}>FINE DINING SELECTION</span>
            <span className={styles.goldLineShort}></span>
          </div>
          <h3 className={styles.gurmeTitle}>ПОПУЛЯРНЫЕ ШЕДЕВРЫ</h3>
          <p className={styles.menuSubDescription}>
            Эксклюзивные вкусы Анатолии, воссозданные нашими шеф-поварами в
            современном прочтении.
          </p>
        </div>

        <div className={styles.sliderWrapper}>
          {/* Ok butonları mobilde gizlenir veya yer kaplamaz */}
          <button
            className={styles.luxArrowBtn}
            style={{ display: window.innerWidth < 900 ? "none" : "block" }}
          >
            <FaChevronLeft />
          </button>

          <Box
            className={styles.luxuryGrid}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 4,
              width: "100%",
            }}
          >
            {POPULAR_DISHES.map((dish) => (
              <div key={dish.id} className={styles.gurmeCard}>
                <div className={styles.cardImageContainer}>
                  <img src={dish.img} alt={dish.name} />
                  {dish.tag && (
                    <span className={styles.cardTag}>{dish.tag}</span>
                  )}
                </div>
                <div className={styles.gurmeCardBody}>
                  <div className={styles.cardHeaderRow}>
                    <h4>{dish.name}</h4>
                    <div className={styles.miniGoldLine}></div>
                  </div>
                  <p>{dish.desc}</p>
                  <div className={styles.gurmeCardFooter}>
                    <div className={styles.luxPrice}>
                      {dish.price} <span className={styles.currency}>сом</span>
                    </div>
                    <Link to="/menu" className={styles.btnCardAction}>
                      ЗАКАЗАТЬ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Box>

          <button
            className={styles.luxArrowBtn}
            style={{ display: window.innerWidth < 900 ? "none" : "block" }}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.centerAction}>
          <Link to="/menu" className={styles.btnLuxMenuLink}>
            СМОТРЕТЬ ПОЛНОЕ МЕНЮ
          </Link>
        </div>
      </Box>

      {/* FOOTER ÖNCESİ KAPANIŞ GEÇİŞİ */}
      <div className={styles.sectionDivider} style={{ marginBottom: "40px" }}>
        <div className={styles.verticalLine}></div>
        <img src={miniLogo} alt="Sonsuzluk" className={styles.dividerLogo} />
      </div>
    </div>
  );
};

export default Home;
