import React, { useState } from "react";
import styles from "../styles/Menu.module.css"; // CSS Modül yolu

// Profesyonel görünüm için MUI İkonları eklendi
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import KebabDiningIcon from '@mui/icons-material/OutdoorGrill'; // Kebap/Izgara için en uygun ikon
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import CakeIcon from '@mui/icons-material/Cake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RemoveIcon from '@mui/icons-material/Remove';

const AMBER = "#E8A020";
const WHITE = "#F5F5F7";
const MUTED = "#6B6B72";
const SURFACE2 = "#1A1A1E";

// Emojiler kaldırıldı, MUI İkon bileşenleri atandı
const categories = [
  { id: "all", label: "Все", icon: <RestaurantMenuIcon sx={{ fontSize: 18 }} /> },
  { id: "grill", label: "Гриль", icon: <LocalFireDepartmentIcon sx={{ fontSize: 18 }} /> },
  { id: "kebab", label: "Кебаб", icon: <KebabDiningIcon sx={{ fontSize: 18 }} /> },
  { id: "pizza", label: "Пицца", icon: <LocalPizzaIcon sx={{ fontSize: 18 }} /> },
  { id: "dessert", label: "Десерты", icon: <CakeIcon sx={{ fontSize: 18 }} /> },
  { id: "other", label: "Прочее", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
];

const foods = [
  { id: 1, name: "Адана Кебаб", price: 850, cat: "kebab", rating: 4.9, time: "15–20", tag: "Хит", desc: "Острый мясной кебаб на углях с пряными специями", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80" },
  { id: 2, name: "Шиш Кебаб", price: 780, cat: "kebab", rating: 4.8, time: "15–20", tag: null, desc: "Нежные кусочки маринованного мяса на шпажке", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { id: 3, name: "Люля Кебаб", price: 720, cat: "kebab", rating: 4.7, time: "15–20", tag: null, desc: "Рубленое мясо со специями на шампуре", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80" },
  { id: 4, name: "Донер", price: 490, cat: "kebab", rating: 4.6, time: "10–15", tag: "Быстро", desc: "Классический шаурма в тонком лаваше", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80" },
  { id: 5, name: "Искендер", price: 990, cat: "kebab", rating: 5.0, time: "20–25", tag: "Шеф", desc: "Кебаб с томатным соусом и йогуртом на хлебе", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" },
  { id: 6, name: "Пиде", price: 650, cat: "pizza", rating: 4.7, time: "20–25", tag: null, desc: "Турецкая лепёшка с мясом и сыром", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
  { id: 7, name: "Лахмаджун", price: 570, cat: "pizza", rating: 4.6, time: "15–20", tag: null, desc: "Тонкая пицца с пряным мясным фаршем", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
  { id: 8, name: "Кофте", price: 620, cat: "grill", rating: 4.7, time: "15–20", tag: null, desc: "Котлеты из говядины на гриле со специями", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  { id: 9, name: "Бейти", price: 930, cat: "grill", rating: 4.8, time: "20–25", tag: null, desc: "Завёрнутый кебаб в лаваше с томатным соусом", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
  { id: 10, name: "Манты", price: 710, cat: "other", rating: 4.6, time: "25–30", tag: null, desc: "Большие паровые пельмени с йогуртом", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" },
  { id: 11, name: "Гёзлеме", price: 450, cat: "other", rating: 4.5, time: "10–15", tag: "Новинка", desc: "Слоёный блин с сыром и зеленью на сковороде", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80" },
  { id: 12, name: "Стейк на гриле", price: 1500, cat: "grill", rating: 4.9, time: "25–35", tag: "Шеф", desc: "Сочный стейк из отборной говядины Medium Rare", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { id: 13, name: "Баклава", price: 390, cat: "dessert", rating: 4.9, time: "—", tag: "Хит", desc: "Слоёное тесто с орехами в медовом сиропе", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600&q=80" },
  { id: 14, name: "Кюнефе", price: 470, cat: "dessert", rating: 4.8, time: "15–20", tag: null, desc: "Горячий десерт из кадаифа с сыром и сиропом", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80" },
  { id: 15, name: "Шаурма", price: 340, cat: "other", rating: 4.5, time: "10–15", tag: "Быстро", desc: "Сочная шаурма с овощами и соусом чесночным", image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&q=80" },
  { id: 16, name: "Смешанный гриль", price: 1800, cat: "grill", rating: 5.0, time: "30–40", tag: "Шеф", desc: "Ассорти из четырёх видов мяса на углях", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
  { id: 17, name: "Турецкий завтрак", price: 1200, cat: "other", rating: 4.9, time: "20–25", tag: "Хит", desc: "Полный завтрак с сырами, оливками, яйцами", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80" },
  { id: 19, name: "Плов", price: 670, cat: "other", rating: 4.6, time: "20–25", tag: null, desc: "Ароматный рис с мясом и восточными специями", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80" },
  { id: 20, name: "Бургер", price: 760, cat: "other", rating: 4.7, time: "15–20", tag: "Новинка", desc: "Сочная котлета с соусом и хрустящими овощами", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" },
];

const tagColors = {
  "Хит": { bg: "#3A2800", color: AMBER },
  "Шеф": { bg: "#1A2800", color: "#7ED957" },
  "Быстро": { bg: "#001E3A", color: "#5BB8FF" },
  "Новинка": { bg: "#2A0028", color: "#D97BFF" },
};

const Stars = ({ rating }) => {
  const full = Math.floor(rating);
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <StarIcon 
          key={i} 
          style={{ 
            fontSize: 12, 
            color: i <= full ? AMBER : "rgba(255,255,255,0.15)" 
          }} 
        />
      ))}
      <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, marginLeft: 4 }}>{rating}</span>
    </span>
  );
};

export default function Menu() {
  const [activeCat, setActiveCat] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("menu");
  const [selected, setSelected] = useState(null);
  const [qty, setQty] = useState(1);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const filtered = foods.filter(f => {
    const matchCat = activeCat === "all" || f.cat === activeCat;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleFav = (food, e) => {
    if (e) e.stopPropagation();
    const has = favorites.find(f => f.id === food.id);
    if (has) {
      setFavorites(favorites.filter(f => f.id !== food.id));
    } else {
      setFavorites([...favorites, food]);
      showToast("Добавлено в избранное");
    }
  };

  const isFav = (id) => !!favorites.find(f => f.id === id);

  const addToCart = () => {
    const has = cart.find(c => c.id === selected.id);
    if (has) {
      setCart(cart.map(c => c.id === selected.id ? { ...c, qty: c.qty + qty } : c));
    } else {
      setCart([...cart, { ...selected, qty }]);
    }
    showToast(`${selected.name} добавлено в корзину`);
    setSelected(null);
  };

  const cartTotal = cart.reduce((acc, c) => acc + c.price * c.qty, 0);
  const cartCount = cart.reduce((acc, c) => acc + c.qty, 0);

  const removeFromCart = (id) => setCart(cart.filter(c => c.id !== id));
  const updateQty = (id, delta) => {
    setCart(cart.map(c => c.id === id
      ? c.qty + delta < 1 ? null : { ...c, qty: c.qty + delta }
      : c
    ).filter(Boolean));
  };

  const dynamicCatBtn = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    borderRadius: 20,
    border: active ? "none" : `1px solid rgba(255,255,255,0.07)`,
    background: active ? AMBER : SURFACE2,
    color: active ? "#000" : MUTED,
    fontSize: 13,
    fontWeight: active ? 700 : 500,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
    flexShrink: 0,
  });

  const dynamicTag = (t) => ({
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 7px",
    borderRadius: 6,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.3,
    background: tagColors[t]?.bg || "#222",
    color: tagColors[t]?.color || WHITE,
    marginBottom: 4,
  });

  const dynamicFavBtn = (active) => ({
    position: "absolute",
    top: 10,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 8,
    background: active ? AMBER : "rgba(0,0,0,0.5)",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
  });

  const dynamicNavItem = (active) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    cursor: "pointer",
    color: active ? AMBER : MUTED,
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 0.5,
    padding: "0 16px",
    minWidth: 60,
  });

  const dynamicToast = {
    position: "fixed",
    top: 24,
    left: "50%",
    transform: `translateX(-50%) translateY(${toastVisible ? 0 : -80}px)`,
    background: SURFACE2,
    border: `1px solid rgba(255,255,255,0.07)`,
    color: WHITE,
    padding: "10px 20px",
    borderRadius: 14,
    fontSize: 13,
    fontWeight: 600,
    zIndex: 99999,
    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    whiteSpace: "nowrap",
  };

  return (
    <div 
      className={styles.root} 
      style={{ 
        paddingTop: "90px",    
        minHeight: "100vh", 
        boxSizing: "border-box" 
      }}
    >
      {/* TOAST */}
      <div style={dynamicToast}>{toastMsg}</div>

      {/* HEADER (LOGO ÇIKARILDI VE TEMİZLENDİ) */}
      <div 
        className={styles.header} 
        style={{ 
          position: "relative", 
          zIndex: 10,           
          marginBottom: "15px",
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}
      >
        {/* Üst Sıra: Sadece Sağ Köşede Arama İkonu Bırakıldı */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "0 4px" }}>
          <div className={styles.iconBtn} onClick={() => setSearchOpen(!searchOpen)}>
            {searchOpen ? <CloseIcon style={{ fontSize: 20, color: AMBER }} /> : <SearchIcon style={{ fontSize: 20, color: WHITE }} />}
          </div>
        </div>

        {searchOpen && (
          <div className={styles.searchBar}>
            <SearchIcon style={{ fontSize: 16, color: MUTED }} />
            <input
              autoFocus
              className={styles.searchInput}
              placeholder="Поиск блюд..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <CloseIcon style={{ fontSize: 18, color: MUTED, cursor: "pointer" }} onClick={() => setSearch("")} />
            )}
          </div>
        )}

        {page === "menu" && (
          <div className={styles.catScroll}>
            {categories.map(c => (
              <button key={c.id} style={dynamicCatBtn(activeCat === c.id)} onClick={() => setActiveCat(c.id)}>
                <span style={{ display: "flex", alignItems: "center", color: activeCat === c.id ? "#000" : AMBER }}>
                  {c.icon}
                </span>
                {c.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MENU PAGE */}
      {page === "menu" && (
        <>
          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <RestaurantMenuIcon style={{ fontSize: 40, color: MUTED, marginBottom: 8 }} />
              <span style={{ fontWeight: 700, fontSize: 16 }}>Ничего не найдено</span>
              <span style={{ fontSize: 13 }}>Попробуйте другой запрос</span>
            </div>
          ) : (
            <>
              <div className={styles.sectionTitle}>
                {activeCat === "all" ? "Всё меню" : categories.find(c => c.id === activeCat)?.label}
                <span style={{ fontSize: 13, fontWeight: 500, color: MUTED, marginLeft: 8 }}>{filtered.length} блюд</span>
              </div>
              <div className={styles.grid}>
                {filtered.map(food => (
                  <div key={food.id} className={styles.card} onClick={() => { setSelected(food); setQty(1); }}>
                    <img src={food.image} alt={food.name} className={styles.cardImg} />
                    <div className={styles.cardBody}>
                      {food.tag && <div style={dynamicTag(food.tag)}>{food.tag}</div>}
                      <div className={styles.cardName}>{food.name}</div>
                      <div className={styles.cardDesc}>{food.desc}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <Stars rating={food.rating} />
                        <span style={{ color: MUTED, fontSize: 11 }}>· {food.time} мин</span>
                      </div>
                      <div className={styles.cardBottom}>
                        <span className={styles.cardPrice}>{food.price} сом</span>
                        <button
                          className={styles.addBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            const has = cart.find(c => c.id === food.id);
                            if (has) {
                              setCart(cart.map(c => c.id === food.id ? { ...c, qty: c.qty + 1 } : c));
                            } else {
                              setCart([...cart, { ...food, qty: 1 }]);
                            }
                            showToast(`${food.name} добавлен`);
                          }}
                        >
                          <AddIcon style={{ fontSize: 16, color: "#000" }} />
                        </button>
                      </div>
                    </div>
                    <button style={dynamicFavBtn(isFav(food.id))} onClick={(e) => toggleFav(food, e)}>
                      {isFav(food.id) ? (
                        <FavoriteIcon style={{ fontSize: 15, color: "#000" }} />
                      ) : (
                        <FavoriteBorderIcon style={{ fontSize: 15, color: WHITE }} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div style={{ height: 20 }} />
            </>
          )}
        </>
      )}

      {/* FAVORITES PAGE */}
      {page === "favorites" && (
        <div style={{ padding: "0 16px" }}>
          <div className={styles.sectionTitle}>Избранное <span style={{ fontSize: 13, color: MUTED, fontWeight: 500 }}>{favorites.length}  блюд</span></div>
          {favorites.length === 0 ? (
            <div className={styles.emptyState}>
              <FavoriteBorderIcon style={{ fontSize: 40, color: MUTED, marginBottom: 8 }} />
              <span style={{ fontWeight: 700, fontSize: 16 }}>Список пуст</span>
              <span style={{ fontSize: 13 }}>Добавляйте любимые блюда</span>
            </div>
          ) : (
            favorites.map(item => (
              <div key={item.id} className={styles.favItem}>
                <img src={item.image} alt={item.name} style={{ width: 72, height: 72, borderRadius: 12, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.name}</div>
                  <Stars rating={item.rating} />
                  <div style={{ color: AMBER, fontWeight: 800, fontSize: 15, marginTop: 4 }}>{item.price} сом</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <button className={styles.addBtn} style={{ background: SURFACE2 }} onClick={() => toggleFav(item, null)}>
                    <CloseIcon style={{ fontSize: 14, color: "#FF3B30" }} />
                  </button>
                  <button className={styles.addBtn} onClick={() => {
                    const has = cart.find(c => c.id === item.id);
                    if (has) {
                      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
                    } else {
                      setCart([...cart, { ...item, qty: 1 }]);
                    }
                    showToast("Добавлено в корзину");
                  }}>
                    <ShoppingBagIcon style={{ fontSize: 14, color: "#000" }} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* CART PAGE */}
      {page === "cart" && (
        <>
          <div style={{ padding: "0 16px" }}>
            <div className={styles.sectionTitle}>Корзина <span style={{ fontSize: 13, color: MUTED, fontWeight: 500 }}>{cartCount} позиций</span></div>
            {cart.length === 0 ? (
              <div className={styles.emptyState}>
                <ShoppingBagIcon style={{ fontSize: 40, color: MUTED, marginBottom: 8 }} />
                <span style={{ fontWeight: 700, fontSize: 16 }}>Корзина пуста</span>
                <span style={{ fontSize: 13 }}>Выберите блюда из меню</span>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={{ width: 72, height: 72, borderRadius: 12, objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.name}</div>
                    <div className={styles.qtyCtrl}>
                      <button className={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}><RemoveIcon style={{ fontSize: 12 }} /></button>
                      <span style={{ fontWeight: 700, fontSize: 14, minWidth: 18, textAlign: "center" }}>{item.qty}</span>
                      <button className={styles.qtyBtn} onClick={() => updateQty(item.id, 1)}><AddIcon style={{ fontSize: 12 }} /></button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: AMBER, fontWeight: 800, fontSize: 15 }}>{item.price * item.qty} сом</div>
                    <button style={{ background: "transparent", border: "none", color: "#FF3B30", cursor: "pointer", marginTop: 8, fontSize: 12 }} onClick={() => removeFromCart(item.id)}>Удалить</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className={styles.orderFooter}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ color: MUTED, fontSize: 13 }}>Итого ({cartCount} блюд)</span>
                <span style={{ fontWeight: 800, fontSize: 18, color: AMBER }}>{cartTotal} сом</span>
              </div>
              <button className={styles.orderBtn} onClick={() => { showToast("Заказ оформлен!"); setCart([]); }}>
                Оформить заказ
              </button>
            </div>
          )}
        </>
      )}

      {/* BOTTOM NAV */}
      <div className={styles.bottomNav}>
        <div style={dynamicNavItem(page === "favorites")} onClick={() => setPage("favorites")}>
          <div style={{ position: "relative", display: "flex" }}>
            {page === "favorites" ? <FavoriteIcon style={{ fontSize: 22, color: AMBER }} /> : <FavoriteBorderIcon style={{ fontSize: 22, color: MUTED }} />}
            {favorites.length > 0 && <div className={styles.badge}>{favorites.length}</div>}
          </div>
          Избранное
        </div>

        <button className={styles.navMenuBtn} onClick={() => setPage("menu")}>
          МЕНЮ
        </button>

        <div style={dynamicNavItem(page === "cart")} onClick={() => setPage("cart")}>
          <div style={{ position: "relative", display: "flex" }}>
            <ShoppingBagIcon style={{ fontSize: 22, color: page === "cart" ? AMBER : MUTED }} />
            {cartCount > 0 && <div className={styles.badge}>{cartCount}</div>}
          </div>
          Корзина
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <div style={{ position: "relative" }}>
              <img src={selected.image} alt={selected.name} style={{ width: "100%", height: 240, objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(17,17,19,1) 100%)" }} />
              <button style={{ position: "absolute", top: 14, left: 14, background: "rgba(0,0,0,0.5)", border: "none", borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => setSelected(null)}>
                <CloseIcon style={{ fontSize: 18, color: WHITE }} />
              </button>
              <button style={{ position: "absolute", top: 14, right: 14, background: isFav(selected.id) ? AMBER : "rgba(0,0,0,0.5)", border: "none", borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => toggleFav(selected, null)}>
                {isFav(selected.id) ? <FavoriteIcon style={{ fontSize: 18, color: "#000" }} /> : <FavoriteBorderIcon style={{ fontSize: 18, color: WHITE }} />}
              </button>
            </div>

            <div style={{ padding: "16px 20px 24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                <div>
                  {selected.tag && <div style={{ ...dynamicTag(selected.tag), marginBottom: 6 }}>{selected.tag}</div>}
                  <div style={{ fontSize: 20, fontWeight: 800, color: WHITE }}>{selected.name}</div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: AMBER }}>{selected.price * qty} сом</div>
              </div>

              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, marginBottom: 12 }}>{selected.desc}</div>

              <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
                <Stars rating={selected.rating} />
                <div style={{ color: MUTED, fontSize: 12 }}>{selected.time} мин</div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ color: MUTED, fontSize: 13 }}>Количество</span>
                <div className={styles.qtyCtrl} style={{ gap: 14 }}>
                  <button className={styles.qtyBtn} onClick={() => qty > 1 && setQty(qty - 1)}><RemoveIcon style={{ fontSize: 14 }} /></button>
                  <span style={{ fontWeight: 800, fontSize: 16, minWidth: 20, textAlign: "center", color: WHITE }}>{qty}</span>
                  <button className={styles.qtyBtn} onClick={() => setQty(qty + 1)}><AddIcon style={{ fontSize: 14 }} /></button>
                </div>
              </div>

              <button className={styles.orderBtn} onClick={addToCart}>
                Добавить в корзину — {selected.price * qty} сом
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}