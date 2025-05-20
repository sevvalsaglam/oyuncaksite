import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-info">
          <h3>🎈 Oyuncak Dünyası</h3>
          <p>Mutlu çocuklar için eğlenceli ve eğitici oyuncaklar</p>
        </div>

        <div className="footer-section">
          <h4>Kurumsal</h4>
          <ul>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">İletişim</a></li>
            <li><a href="#">Gizlilik Politikası</a></li>
            <li><a href="#">Kullanım Şartları</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Yardım</h4>
          <ul>
            <li><a href="#">SSS</a></li>
            <li><a href="#">Kargo & Teslimat</a></li>
            <li><a href="#">İade & Değişim</a></li>
            <li><a href="#">Müşteri Hizmetleri</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Bizi Takip Edin</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Oyuncak Dünyası. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
