import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp2878569.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#F5F5F7',
        minHeight: '100vh',
        paddingTop: '160px',
        paddingBottom: '100px',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        fontFamily: "'Cinzel', 'Playfair Display', serif",
        position: 'relative',
        // Arka plan karartma katmanı (::before)
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: `radial-gradient(circle at 15% 25%, rgba(42, 8, 12, 0.6) 0%, transparent 50%),
                       radial-gradient(circle at 85% 75%, rgba(212, 175, 55, 0.05) 0%, transparent 60%),
                       linear-gradient(to bottom, rgba(10, 10, 11, 0.9), rgba(15, 10, 11, 0.95))`,
          zIndex: 1,
        }
      }}
    >
      
      {/* HERO SECTION */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          justifyContent: 'space-between',
          padding: '0 40px',
          gap: { xs: '50px', lg: '80px' },
          alignItems: 'center',
          textAlign: { xs: 'center', lg: 'left' },
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ width: { xs: '100%', lg: '45%' } }}>
          <Typography
            sx={{
              color: '#D4AF37',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '5px',
              marginBottom: '15px',
              textTransform: 'uppercase',
            }}
          >
            PREMIUM RESTAURANT
          </Typography>
          
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '44px', lg: '64px' },
              fontWeight: 300,
              letterSpacing: '0.18em',
              margin: '0 0 30px 0',
              lineHeight: 1.1,
              color: '#ffffff',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            О НАС
          </Typography>
          
          <Typography
            sx={{
              color: '#C3C3C6',
              fontSize: '16px',
              lineHeight: 1.9,
              marginBottom: '45px',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
            }}
          >
            SONSUZ — это место, где соединяются атмосфера,
            авторская кухня и высокий сервис. Мы создали ресторан
            премиум-класса для тех, кто ценит стиль, комфорт и
            незабываемые эмоции.
          </Typography>
          
          {/* STİLİZE EDİLMİŞ LINK BUTONU */}
          <Box
            component={Link}
            to="/menu"
            sx={{
              display: 'inline-block',
              textDecoration: 'none',
              background: 'transparent',
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              padding: '18px 45px',
              borderRadius: '0px',
              cursor: 'pointer',
              fontWeight: 500,
              letterSpacing: '3px',
              fontSize: '11px',
              fontFamily: "'Cinzel', serif",
              transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
              textTransform: 'uppercase',
              textAlign: 'center',
              '&:hover': {
                background: '#D4AF37',
                color: '#0A0A0B',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)',
              }
            }}
          >
            НАШЕ МЕНЮ
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            width: { xs: '100%', lg: '55%' },
            height: { xs: '400px', lg: '560px' },
            borderRadius: '0px',
            overflow: 'hidden',
            position: 'relative',
            // Görsel üzerindeki sinematik gradyan bindirmesi
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(to right, rgba(10, 10, 11, 0.4), transparent)',
              pointerEvents: 'none',
            },
            // Hover durumunda içerideki görseli büyütme tetikleyicisi
            '&:hover img': {
              transform: 'scale(1.03)',
            }
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Sonsuz Restaurant Interior"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85) contrast(1.05)',
              transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          />
        </Box>
      </Box>

      {/* INFO BLOCKS / CARDS */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: { xs: '70px auto 0', lg: '100px auto 0' },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-between',
          gap: '40px',
          padding: '0 40px',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {[
          { title: "АТМОСФЕРА", text: "Современный интерьер, уютный свет и премиальная атмосфера создают идеальное место для лучшего отдыха." },
          { title: "КУХНЯ", text: "Наши шеф-повара готовят шедевры высокого уровня из самых свежих и эксклюзивных ингредиентов." },
          { title: "СЕРВИС", text: "Мы уделяем максимальное внимание каждой детали, чтобы наши гости чувствовали себя по-настоящему особенными." }
        ].map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              background: 'rgba(18, 18, 20, 0.4)',
              borderLeft: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '0px',
              padding: { xs: '20px 0 20px 25px', lg: '30px 0 30px 30px' },
              backdropFilter: 'blur(8px)',
              transition: 'all 0.4s ease',
              '&:hover': {
                borderLeftColor: '#D4AF37',
                background: 'rgba(42, 8, 12, 0.15)',
                transform: 'translateX(5px)',
              }
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '4px',
                marginTop: 0,
                marginBottom: '15px',
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{
                color: '#A9A9AE',
                lineHeight: 1.8,
                fontSize: '14px',
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 300,
              }}
            >
              {card.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* STATS PANEL */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: { xs: '80px auto 0', lg: '120px auto 0' },
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: { xs: 'wrap', lg: 'nowrap' },
          gap: { xs: '40px', lg: '0px' },
          padding: '60px 0',
          borderTop: '1px solid rgba(212, 175, 55, 0.12)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.12)',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {[
          { number: "10+", text: "ЛЕТ ОПЫТА" },
          { number: "50K+", text: "ГОСТЕЙ" },
          { number: "120+", text: "БЛЮД В МЕНЮ" },
          { number: "4.9", text: "РЕЙТИНГ" },
        ].map((item) => (
          <Box
            key={item.text}
            sx={{
              textAlign: 'center',
              flex: { xs: '0 0 100%', sm: '0 0 40%', lg: 'none' }
            }}
          >
            <Typography
              component="h1"
              sx={{
                color: '#D4AF37',
                fontSize: '54px',
                fontWeight: 200,
                letterSpacing: '-1px',
                margin: '0 0 8px 0',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {item.number}
            </Typography>
            <Typography
              sx={{
                color: '#8E8E93',
                fontSize: '11px',
                letterSpacing: '3px',
                margin: 0,
                fontWeight: 400,
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

    </Box>
  );
}

export default About;