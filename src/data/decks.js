const decks = [
    {
      id: 'opposites',
      title: 'Zıt Kavramlar',
      color: '#ffb6b9',
      image: '/assets/decks/opposites-cover.png',
      cards: [
        {
          word: 'Büyük - Küçük',
          image1: '/assets/cards/big-apple.png',
          image2: '/assets/cards/small-apple.png',
        },
        {
          word: 'Yüksek - Alçak',
          image1: '/assets/cards/tall.png',
          image2: '/assets/cards/short.png',
        },
        // diğer kartlar...
      ],
    },
    {
      id: 'fruits',
      title: 'Meyveler',
      color: '#f7d794',
      image: '/assets/decks/fruits-cover.png',
      cards: [
        {
          word: 'Elma',
          image1: '/assets/cards/apple.png',
          image2: null,
        },
        {
          word: 'Muz',
          image1: '/assets/cards/banana.png',
          image2: null,
        },
      ],
    },
    // diğer desteler...
  ];
  
  export default decks;
  