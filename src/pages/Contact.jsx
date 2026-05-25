import React from "react";
import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp2878569.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#f3ece7',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '60px',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        fontFamily: "'Cinzel', 'Playfair Display', 'Segoe UI', serif",
        position: 'relative',
        // ÇOK KOYU OLMAYAN, HAFİF AÇIKLAŞTIRILMIŞ ASİL KIRMIZI KATMAN (::before alternatifi)
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: `radial-gradient(circle at 30% 40%, rgba(97, 12, 17, 0.35) 0%, transparent 60%),
                       radial-gradient(circle at 80% 20%, rgba(197, 160, 89, 0.1) 0%, transparent 50%),
                       linear-gradient(to bottom, rgba(31, 14, 16, 0.75), rgba(20, 9, 10, 0.85))`,
          zIndex: 1,
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: '50px', lg: '80px' },
          padding: { xs: '0 30px', lg: '0 40px' },
          position: 'relative',
          zIndex: 5,
          alignItems: 'center',
        }}
      >
        {/* SOL SÜTUN: İLETİŞİM BİLGİLERİ */}
        <Box
          sx={{
            flex: { xs: '1', lg: '0 0 380px' },
            width: '100%',
            textAlign: { xs: 'center', lg: 'left' },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '38px', sm: '52px' },
              fontWeight: 300,
              letterSpacing: '0.15em',
              margin: '0 0 8px 0',
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(45deg, #d4af37 30%, #fff2cc 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 500,
              }}
            >
              КОНТАКТЫ
            </Box>
          </Typography>
          
          <Typography
            sx={{
              fontSize: '14px',
              color: '#bfaea3',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '50px',
            }}
          >
            Мы всегда на связи
          </Typography>

          {/* TELEFON */}
          <Box
            sx={{
              marginBottom: '35px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              paddingBottom: '15px',
            }}
          >
            <Typography sx={{ color: '#d4af37', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', margin: '0 0 10px 0', textTransform: 'uppercase', opacity: 0.95 }}>
              ТЕЛЕФОН
            </Typography>
            <Typography component="h2" sx={{ margin: 0, fontSize: { xs: '22px', sm: '26px' }, fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontFamily: "'Playfair Display', serif" }}>
              +996 553 365 365
            </Typography>
          </Box>

          {/* ADRES */}
          <Box
            sx={{
              marginBottom: '35px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              paddingBottom: '15px',
            }}
          >
            <Typography sx={{ color: '#d4af37', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', margin: '0 0 10px 0', textTransform: 'uppercase', opacity: 0.95 }}>
              АДРЕС
            </Typography>
            <Typography component="h2" sx={{ margin: 0, fontSize: { xs: '22px', sm: '26px' }, fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontFamily: "'Playfair Display', serif" }}>
              Каракол,Гагарина 22а
            </Typography>
          </Box>

          {/* ÇALIŞMA SAATLERİ */}
          <Box
            sx={{
              marginBottom: '35px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              paddingBottom: '15px',
            }}
          >
            <Typography sx={{ color: '#d4af37', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', margin: '0 0 10px 0', textTransform: 'uppercase', opacity: 0.95 }}>
              ВРЕМЯ РАБОТЫ
            </Typography>
            <Typography component="h2" sx={{ margin: 0, fontSize: { xs: '22px', sm: '26px' }, fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontFamily: "'Playfair Display', serif" }}>
              09:00 - 00:00
            </Typography>
            <Typography sx={{ color: '#a6958a', fontSize: '13px', margin: '4px 0 0 0', fontStyle: 'italic' }}>
              Ежедневно
            </Typography>
          </Box>

          {/* EMAIL */}
          <Box
            sx={{
              marginBottom: '35px',
              borderBottom: 'none',
              paddingBottom: '15px',
            }}
          >
            <Typography sx={{ color: '#d4af37', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', margin: '0 0 10px 0', textTransform: 'uppercase', opacity: 0.95 }}>
              EMAIL
            </Typography>
            <Typography component="h2" sx={{ margin: 0, fontSize: { xs: '22px', sm: '26px' }, fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontFamily: "'Playfair Display', serif" }}>
              info@sonsuz.kg
            </Typography>
          </Box>
        </Box>

        {/* SAĞ SÜTUN: SİNEMATİK HARİTA */}
        <Box
          sx={{
            flex: 1,
            width: '100%',
            height: { xs: '400px', lg: '580px' },
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            background: '#170d0e',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
            position: 'relative',
            transition: 'all 0.4s ease',
            // Hover durumunda harita alanı kenarlığı ve gölgesi değişir
            '&:hover': {
              borderColor: 'rgba(212, 175, 55, 0.5)',
              boxShadow: '0 25px 60px rgba(128, 20, 25, 0.2)',
            },
            // Harita iframe'ine uygulanacak filtre geçişleri
            '&:hover iframe': {
              filter: 'grayscale(0.6) sepia(0.15) hue-rotate(320deg) invert(0.88) contrast(1.1) brightness(1)',
            }
          }}
        >
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11894.238497672223!2d78.38685973719056!3d42.48448449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b8455c535c3%3A0x9fdead7646965d9d!2sCafe%20Karakolka%20Zhivaya%20Forel'!5e0!3m2!1str!2skg!4v1716290000000!5m2!1str!2skg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sonsuz Restaurant Location"
            sx={{
              width: '100%',
              height: '100%',
              border: 0,
              // Sinematik sepya/karanlık mod filtre efekti
              filter: 'grayscale(1) sepia(0.2) hue-rotate(320deg) invert(0.88) contrast(1.1) brightness(0.95)',
              transition: 'filter 0.5s ease',
            }}
          />
        </Box>

      </Box>
    </Box>
  );
}

export default Contact;