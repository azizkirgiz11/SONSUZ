import React from "react";

function About() {
  return (
    <div
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* HERO */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "70px",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            width: "50%",
          }}
        >
          <p
            style={{
              color: "#c89b5d",
              letterSpacing: "3px",
              marginBottom: "15px",
            }}
          >
            PREMIUM RESTAURANT
          </p>

          <h1
            style={{
              fontSize: "68px",
              lineHeight: "78px",
              marginTop: 0,
              marginBottom: "25px",
            }}
          >
            О НАС
          </h1>

          <p
            style={{
              color: "#9d9d9d",
              fontSize: "18px",
              lineHeight: "34px",
              marginBottom: "35px",
            }}
          >
            SONSUZ — это место, где соединяются атмосфера,
            авторская кухня и высокий сервис. Мы создали ресторан
            премиум-класса для тех, кто ценит стиль, комфорт и
            незабываемые эмоции.
          </p>

          <button
            style={{
              background: "transparent",
              border: "1px solid #c89b5d",
              color: "#c89b5d",
              padding: "16px 34px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            НАШЕ МЕНЮ
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            width: "50%",
            height: "550px",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* INFO BLOCKS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          padding: "0 70px 70px",
        }}
      >
        {/* CARD */}
        <div
          style={{
            flex: 1,
            background: "#0d0d0d",
            border: "1px solid #181818",
            borderRadius: "20px",
            padding: "35px",
          }}
        >
          <h2
            style={{
              color: "#c89b5d",
              marginBottom: "20px",
            }}
          >
            АТМОСФЕРА
          </h2>

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "30px",
            }}
          >
            Современный интерьер, уютный свет и премиальная
            атмосфера создают идеальное место для отдыха.
          </p>
        </div>

        {/* CARD */}
        <div
          style={{
            flex: 1,
            background: "#0d0d0d",
            border: "1px solid #181818",
            borderRadius: "20px",
            padding: "35px",
          }}
        >
          <h2
            style={{
              color: "#c89b5d",
              marginBottom: "20px",
            }}
          >
            КУХНЯ
          </h2>

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "30px",
            }}
          >
            Наши шеф-повара готовят блюда высокого уровня из
            свежих и качественных ингредиентов.
          </p>
        </div>

        {/* CARD */}
        <div
          style={{
            flex: 1,
            background: "#0d0d0d",
            border: "1px solid #181818",
            borderRadius: "20px",
            padding: "35px",
          }}
        >
          <h2
            style={{
              color: "#c89b5d",
              marginBottom: "20px",
            }}
          >
            СЕРВИС
          </h2>

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "30px",
            }}
          >
            Мы уделяем внимание каждой детали, чтобы гости
            чувствовали себя особенными.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "60px 70px",
          borderTop: "1px solid #151515",
          borderBottom: "1px solid #151515",
          background: "#070707",
        }}
      >
        {[
          { number: "10+", text: "ЛЕТ ОПЫТА" },
          { number: "50K+", text: "ГОСТЕЙ" },
          { number: "120+", text: "БЛЮД В МЕНЮ" },
          { number: "4.9", text: "РЕЙТИНГ" },
        ].map((item) => (
          <div key={item.text}>
            <h1
              style={{
                color: "#c89b5d",
                fontSize: "52px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                color: "#8d8d8d",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer
        style={{
          padding: "45px 70px",
          display: "flex",
          justifyContent: "space-between",
          background: "#060606",
        }}
      >
        {/* LOGO */}
        <div>
          <h1
            style={{
              margin: 0,
              color: "#c89b5d",
              fontSize: "38px",
            }}
          >
            SONSUZ
          </h1>

          <p
            style={{
              color: "#6d6d6d",
              marginTop: "10px",
            }}
          >
            PREMIUM RESTAURANT
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3
            style={{
              color: "#c89b5d",
              marginBottom: "15px",
            }}
          >
            НАВИГАЦИЯ
          </h3>

          <p>Главная</p>
          <p>Меню</p>
          <p>Бронь</p>
          <p>Контакты</p>
        </div>

        {/* CONTACT */}
        <div>
          <h3
            style={{
              color: "#c89b5d",
              marginBottom: "15px",
            }}
          >
            КОНТАКТЫ
          </h3>

          <p>+996 700 900 700</p>
          <p>улица Гагарина, 22а, Каракол</p>
          <p>9:00 - 00:00</p>
        </div>
      </footer>
    </div>
  );
}

export default About;