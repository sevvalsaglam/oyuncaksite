import React, { useState } from 'react';
import './FlashcardViewer.css';

const FlashcardViewer = ({ deck, onClose }) => {
  const [index, setIndex] = useState(0);
  const card = deck.cards[index];

  const next = () => {
    if (index < deck.cards.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flashcard-viewer">
      <button className="close-btn" onClick={onClose}>✖</button>
      <div className="card bounce-in">
        <div className="images">
          <img src={card.image1} alt="Kelime" />
          {card.image2 && <img src={card.image2} alt="İkincil" />}
        </div>
      </div>
      <div className="controls">
        <button onClick={prev} disabled={index === 0}>←</button>
        <button onClick={next} disabled={index === deck.cards.length - 1}>→</button>
      </div>
    </div>
  );
};

export default FlashcardViewer;
