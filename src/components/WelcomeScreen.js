import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStartGame }) => {
  return (
    <div className="welcome-screen fade-in">
      <div className="welcome-container">
        <h1 className="game-title pulse">
          SpeakOut Revolution
        </h1>
        <h2 className="game-subtitle">
          Workplace Awareness Challenge
        </h2>
        <div className="game-description">
          <p>Test your knowledge of workplace harassment and bullying statistics!</p>
          <p>Learn important facts while climbing the awareness ladder.</p>
          <p className="mission-text">
            <strong>Mission:</strong> Canceling the culture of silence on workplace harassment and bullying.
          </p>
        </div>
        
        <div className="rules-section">
          <h3>How to Play:</h3>
          <ul>
            <li>Answer multiple choice questions about workplace harassment statistics</li>
            <li>Each correct answer increases your awareness score</li>
            <li>Use lifelines to help you when stuck</li>
            <li>Walk away to keep your current score</li>
            <li>Learn important statistics that can help create safer workplaces!</li>
          </ul>
        </div>

        <div className="lifelines-preview">
          <h3>Available Lifelines:</h3>
          <div className="lifeline-icons">
            <div className="lifeline-item">
              <span className="lifeline-icon">50:50</span>
              <span className="lifeline-name">Fifty-Fifty</span>
            </div>
            <div className="lifeline-item">
              <span className="lifeline-icon">👥</span>
              <span className="lifeline-name">Ask Audience</span>
            </div>
            <div className="lifeline-item">
              <span className="lifeline-icon">📞</span>
              <span className="lifeline-name">Phone a Friend</span>
            </div>
          </div>
        </div>
        
        <button 
          className="start-button glow" 
          onClick={onStartGame}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
