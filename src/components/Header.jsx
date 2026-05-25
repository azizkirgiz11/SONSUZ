import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Mobil uyumluluk için gerekli temel MUI bileşenleri eklendi
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menü ikonu
import CloseIcon from '@mui/icons-material/Close'; // Menü kapatma ikonu

import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  // Mobil menünün (Drawer) açık/kapalı durumunu kontrol eden state
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box component="header" className={styles.header}>
      <div className={styles.container}>
        
        {/* Sol Taraf: Premium Logo */}
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img src={logo} alt="Sonsuz Logo" className={styles.logoImage} />
          </Link>
        </div>

        {/* Orta Kısım: Navigasyon Linkleri */}
        {/* sx ayarı: Mobilde gizlenir (display: none), masaüstünde (md) senin CSS stilinle görünür */}
        <Box 
          component="nav" 
          className={styles.navigation} 
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Link to="/menu" className={styles.navLink}>МЕНЮ</Link>
          <Link to="/about" className={styles.navLink}>О НАС</Link>
          <Link to="/contacts" className={styles.navLink}>КОНТАКТЫ</Link>
        </Box>

        {/* Sağ Taraf: Telefon ve Rezervasyon Link Butonu (Masaüstü Görünümü) */}
        {/* sx ayarı: Mobilde gizlenir, masaüstünde senin CSS stilinle görünür */}
        <Box 
          className={styles.actionWrapper} 
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <a href="tel:+996700123456" className={styles.phoneNumber}>
            +996 553 365 365
          </a>
          <Link to="/booking" className={styles.reservationButton}>
            ЗАБРОНИРОВАТЬ
          </Link>
        </Box>

        {/* ================= TELEFON / MOBİL GÖRÜNÜMÜ ================= */}
        {/* Sadece mobilde görünen Hamburger Menü Butonu */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton 
            color="inherit" 
            onClick={handleDrawerToggle}
            edge="start"
            aria-label="menu"
          >
            <MenuIcon sx={{ fontSize: 30, color: 'white' }} /> {/* İkon boyutu ve rengi */}
          </IconButton>
        </Box>

        {/* Yan taraftan açılan Mobil Menü Çekmecesi (Drawer) */}
        <Drawer
          anchor="right" // Menü sağdan açılır
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Mobil performansı artırır
          PaperProps={{
            sx: { 
              width: '250px', 
              backgroundColor: '#111', // Burayı kendi arka plan rengine göre değiştirebilirsin
              color: '#fff',
              padding: '20px'
            }
          }}
        >
          {/* Kapatma Butonu */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobil Menü İçeriği */}
          <List onClick={handleDrawerToggle}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/menu">
                <ListItemText primary="МЕНЮ" sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/about">
                <ListItemText primary="О НАС" sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/contacts">
                <ListItemText primary="КОНТАКТЫ" sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
            
            <hr style={{ borderColor: '#333', margin: '15px 0' }} />

            {/* Mobil Telefon ve Rezervasyon */}
            <ListItem disablePadding>
              <ListItemButton component="a" href="tel:+996700123456">
                <ListItemText primary="+996 553 365 365" sx={{ textAlign: 'center', color: '#ccc' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ mt: 2 }}>
              <ListItemButton 
                component={Link} 
                to="/booking" 
                className={styles.reservationButton}
                sx={{ justifyContent: 'center', width: '100%' }}
              >
                ЗАБРОНИРОВАТЬ
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        {/* ============================================================ */}

      </div>
    </Box>
  );
};

export default Header;