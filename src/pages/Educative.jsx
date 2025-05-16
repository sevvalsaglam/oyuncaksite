import React, { useState } from 'react';
import decks from '../data/decks';
import FlashcardViewer from '../components/FlashcardViewer';
import './Educative.css';

const Educative = () => {
  const [selectedDeck, setSelectedDeck] = useState(null);

  if (selectedDeck) {
    return (
      <FlashcardViewer
        deck={selectedDeck}
        onClose={() => setSelectedDeck(null)}
      />
    );
  }

  return (
    <div className="educative-container">
      <h2>0–3 Yaş Eğitici Kartlar</h2>
      <div className="deck-grid">
        {decks.map(deck => (
          <div
            key={deck.id}
            className="deck-card"
            style={{ backgroundColor: deck.color }}
            onClick={() => setSelectedDeck(deck)}
          >
            <img src={deck.image} alt={deck.title} />
            <h4>{deck.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educative;
