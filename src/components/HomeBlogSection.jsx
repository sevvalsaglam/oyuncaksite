import React from 'react';
import './HomeBlogSection.css';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    media: '/blog/b1.mp4',
    isVideo: true,
    categoryId: 48,
    category: 'Blok Kitleri',
    text: 'Blok kitleri çocukların motor becerilerini, uzamsal farkındalığını ve yaratıcılığını geliştirir. Ortak oyunlarda paylaşmayı öğrenirler.',
  },
  {
    media: '/blog/b2.png',
    isVideo: false,
    categoryId: 50,
    category: 'Çadırlar',
    text: 'Çocuk çadırları, onların özel alan yaratma ihtiyaçlarına yanıt verirken sosyal oyunları da teşvik eder.',
  },
  {
    media: '/blog/b3.png',
    isVideo: false,
    categoryId: 47,
    category: 'Puzzle Kitleri',
    text: 'Puzzle çözen çocuklar, problem çözme yetilerini ve dikkat becerilerini eğlenceli şekilde geliştirir.',
  },
  {
    media: '/blog/b4.png',
    isVideo: false,
    categoryId: 60,
    category: 'Kum Kiti',
    text: 'Kumla oynamak duyusal gelişimi destekler, aynı zamanda şekil, hacim gibi kavramları deneyimlemelerine yardımcı olur.',
  },
  {
    media: '/blog/b5.png',
    isVideo: false,
    categoryId: 58,
    category: 'Mutfak Kiti',
    text: 'Mutfak oyuncakları, çocukların rol yapma oyunları aracılığıyla sosyal beceriler geliştirmesini sağlar.',
  },
  {
    media: '/blog/b6.jpg',
    isVideo: false,
    categoryId: 49,
    category: 'Kostümler',
    text: 'Kostüm giyme oyunları, çocukların empati ve ifade becerilerini geliştirirken özgüven kazandırır.',
  },
];

const HomeBlogSection = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-sections">
      {sections.map((s, index) => (
        <div className={`blog-section ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="media-wrapper">
            {s.isVideo ? (
              <video src={s.media} autoPlay muted loop playsInline />
            ) : (
              <img src={s.media} alt={s.category} />
            )}
          </div>
          <div className="text-wrapper">
            <p>{s.text}</p>
            <button onClick={() => navigate(`/categories?category=${encodeURIComponent(s.category)}`)}>
              {s.category} Ürünlerini Gör
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBlogSection;
