import React from 'react';
import './GameOverScreen.css';

const GameOverScreen = ({ score, totalQuestions, onRestart, isWinner }) => {
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getResultMessage = () => {
    if (isWinner) {
      return {
        title: "🎉 AWARENESS CHAMPION! 🎉",
        subtitle: "You've Mastered Workplace Statistics!",
        message: "You answered all questions correctly and reached the top of the awareness ladder! You're now equipped with vital knowledge about workplace harassment and bullying."
      };
    } else if (score >= 50000) {
      return {
        title: "Great Awareness! 👏",
        subtitle: "Well Informed!",
        message: "You've gained significant knowledge about workplace harassment statistics. Share what you've learned!"
      };
    } else if (score >= 10000) {
      return {
        title: "Good Learning! 👍",
        subtitle: "Building Awareness!",
        message: "You're developing important knowledge about workplace issues. Keep learning!"
      };
    } else {
      return {
        title: "Every Step Counts! 💪",
        subtitle: "Keep Learning!",
        message: "Every bit of awareness helps create safer workplaces. Try again to learn more!"
      };
    }
  };

  const result = getResultMessage();

  const shareScore = () => {
    const text = `I just scored ${formatMoney(score)} in the SpeakOut Revolution Workplace Awareness Challenge! Test your knowledge about workplace harassment statistics and help create safer workplaces.`;
    
    if (navigator.share) {
      navigator.share({
        title: 'SpeakOut Revolution - Workplace Awareness Challenge',
        text: text,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${text} ${window.location.href}`)
        .then(() => {
          alert('Score copied to clipboard!');
        })
        .catch(() => {
          alert(`Share your score: ${text}`);
        });
    }
  };

  return (
    <div className="game-over-screen fade-in">
      <div className="game-over-container">
        <div className={`result-header ${isWinner ? 'winner' : ''}`}>
          <h1 className="result-title">{result.title}</h1>
          <h2 className="result-subtitle">{result.subtitle}</h2>
        </div>

        <div className="score-display">
        <div className="final-score">
          <span className="score-label">Final Awareness Score:</span>
          <span className="score-value">{formatMoney(score)}</span>
        </div>          {isWinner && (
            <div className="winner-badge">
              <div className="badge-content">
                <span className="crown">🏆</span>
                <span className="winner-text">AWARENESS CHAMPION!</span>
              </div>
            </div>
          )}
        </div>

        <div className="result-message">
          <p>{result.message}</p>
        </div>

        <div className="game-stats">
          <div className="stat-item">
            <span className="stat-label">Questions Answered:</span>
            <span className="stat-value">
              {isWinner ? totalQuestions : Math.max(0, totalQuestions - (totalQuestions - Math.floor(score / 2000)))}
              /{totalQuestions}
            </span>
          </div>
          
          <div className="stat-item">
            <span className="stat-label">Success Rate:</span>
            <span className="stat-value">
              {isWinner ? '100%' : `${Math.round((score / (totalQuestions * 2000)) * 100)}%`}
            </span>
          </div>
        </div>

        <div className="action-buttons">
          <button className="restart-button glow" onClick={onRestart}>
            Play Again
          </button>
          
          <button className="share-button" onClick={shareScore}>
            Share Score
          </button>
        </div>

        <div className="encouragement">
          {isWinner ? (
            <p>🌟 You've mastered workplace awareness! Share your knowledge to help create safer workplaces for everyone! 🌟</p>
          ) : (
            <p>💡 Continue learning about workplace statistics to help build more inclusive environments! 💡</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
