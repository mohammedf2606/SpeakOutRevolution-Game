import React from 'react';
import './LifelineButtons.css';

const LifelineButtons = ({ lifelines, onUseLifeline, disabled }) => {
  const lifelineData = [
    {
      key: 'fiftyFifty',
      icon: '50:50',
      title: 'Fifty-Fifty',
      description: 'Remove two wrong answers'
    },
    {
      key: 'askAudience',
      icon: '👥',
      title: 'Ask the Audience',
      description: 'See audience poll results'
    },
    {
      key: 'phoneAFriend',
      icon: '📞',
      title: 'Phone a Friend',
      description: 'Get advice from a friend'
    }
  ];

  return (
    <div className="lifeline-buttons">
      <h4 className="lifelines-title">Lifelines</h4>
      <div className="lifelines-container">
        {lifelineData.map((lifeline) => (
          <button
            key={lifeline.key}
            className={`lifeline-button ${!lifelines[lifeline.key] ? 'used' : ''}`}
            onClick={() => onUseLifeline(lifeline.key)}
            disabled={disabled || !lifelines[lifeline.key]}
            title={lifeline.description}
          >
            <span className="lifeline-icon">{lifeline.icon}</span>
            <span className="lifeline-title">{lifeline.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LifelineButtons;
