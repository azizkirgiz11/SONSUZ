import React from "react";

function Contact() {
  return (
    <div
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* MAIN */}
      <div
        style={{
          display: "flex",
          gap: "45px",
          padding: "55px 70px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            width: "360px",
          }}
        >
          <h1
            style={{
              color: "#c89b5d",
              fontSize: "58px",
              marginBottom: "10px",
            }}
          >
            КОНТАКТЫ
          </h1>

          <p
            style={{
              color: "#9f9f9f",
              marginBottom: "45px",
              fontSize: "18px",
            }}
          >
            Мы всегда на связи
          </p>

          {/* CONTACT BLOCKS */}

          <div
            style={{
              marginBottom: "35px",
            }}
          >
            <p
              style={{
                color: "#c89b5d",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              ТЕЛЕФОН
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "30px",
                fontWeight: "500",
              }}
            >
              +996 700 900 700
            </h2>
          </div>

          <div
            style={{
              marginBottom: "35px",
            }}
          >
            <p
              style={{
                color: "#c89b5d",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              АДРЕС
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "26px",
                fontWeight: "500",
              }}
            >
              Бишкек, Чуй проспект 155
            </h2>
          </div>

          <div
            style={{
              marginBottom: "35px",
            }}
          >
            <p
              style={{
                color: "#c89b5d",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              ВРЕМЯ РАБОТЫ
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "26px",
                fontWeight: "500",
              }}
            >
              10:00 - 02:00
            </h2>

            <p
              style={{
                color: "#777",
              }}
            >
              Ежедневно
            </p>
          </div>

          <div
            style={{
              marginBottom: "45px",
            }}
          >
            <p
              style={{
                color: "#c89b5d",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              EMAIL
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              info@sonsuz.kg
            </h2>
          </div>

          {/* SOCIAL */}
          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            {["IG", "TT", "WA", "YT"].map((item) => (
              <div
                key={item}
                style={{
                  width: "46px",
                  height: "46px",
                  border: "1px solid #47301f",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c89b5d",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* MAP */}
        <div
          style={{
            flex: 1,
            height: "560px",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid #1a1a1a",
            background: "#0d0d0d",
            boxShadow: "0 0 30px rgba(0,0,0,0.5)",
          }}
        >
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=bishkek&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "grayscale(100%) invert(92%) brightness(35%) contrast(90%)",
            }}
          ></iframe>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #141414",
          padding: "45px 70px",
          display: "flex",
          justifyContent: "space-between",
          background: "#070707",
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
          <p>09:00 - 00:00</p>
        </div>

        {/* MINI MAP */}
        <div
          style={{
            width: "250px",
            height: "140px",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="small-map"
            src="https://www.google.com/maps/place/%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB/@42.4909214,78.3956681,175m/data=!3m1!1e3!4m6!3m5!1s0x38865b91e1f04c0b:0xeb5bfe3900e7ecfa!8m2!3d42.4782102!4d78.3955986!16zL20vMDFncWJk?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "grayscale(100%) invert(92%) brightness(35%) contrast(90%)",
            }}
          ></iframe>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
