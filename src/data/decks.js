const decks = [
  {
    id: 'opposites',
    title: 'Zıt Kavramlar',
    color: '#feca57',
    image: '/cartlogo/71.png',
    cards: Array.from({ length: 7 }, (_, i) => ({
      image1: `/cartimages/${i + 1}.jpg`,
      image2: null,
    })),
  },
  {
    id: 'numbers',
    title: 'Sayılar',
    color: '#ff9f43',
    image: '/cartlogo/66.png',
    cards: Array.from({ length: 10 }, (_, i) => ({
      image1: `/cartimages/${i + 8}.jpg`,
      image2: null,
    })),
  },
  {
    id: 'shapes',
    title: 'Şekiller',
    color: '#74b9ff',
    image: '/cartlogo/68.png',
    cards: Array.from({ length: 5 }, (_, i) => ({
      image1: `/cartimages/${i + 18}.jpg`,
      image2: null,
    })),
  },
  {
    id: 'fruits',
    title: 'Meyveler',
    color: '#55efc4',
    image: '/cartlogo/69.png',
    cards: Array.from({ length: 10 }, (_, i) => ({
      image1: `/cartimages/${i + 23}.jpg`,
      image2: null,
    })),
  },
  {
    id: 'colors',
    title: 'Renkler',
    color: '#fab1a0',
    image: '/cartlogo/67.png',
    cards: Array.from({ length: 3 }, (_, i) => ({
      image1: `/cartimages/${i + 33}.jpg`,
      image2: null,
    })),
  },
  {
    id: 'foods',
    title: 'Yiyecekler',
    color: '#e17055',
    image: '/cartlogo/70.png',
    cards: Array.from({ length: 2 }, (_, i) => ({
      image1: `/cartimages/${i + 36}.jpg`,
      image2: null,
    })),
  },
  {
    id: 'animals',
    title: 'Hayvanlar',
    color: '#a29bfe',
    image: '/cartlogo/65.png',
    cards: Array.from({ length: 13 }, (_, i) => ({
      image1: `/cartimages/${i + 38}.jpg`,
      image2: null,
    })),
  },
];

export default decks;
