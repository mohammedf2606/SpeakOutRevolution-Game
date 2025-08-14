import React from 'react';
import './GameOverScreen.css';

const GameOverScreen = ({ score, totalQuestions, onRestart, isWinner }) => {
  const awarenessLevels = [
    "Novice", "Beginner", "Learning", "Aware", "Informed", 
    "Knowledgeable", "Well-Informed", "Educated", "Expert", "Specialist",
    "Advanced", "Professional", "Authority", "Master", "Champion"
  ];

  const formatAwarenessLevel = (questionNumber) => {
    return awarenessLevels[questionNumber - 1] || "Champion";
  };

  const getCurrentLevel = () => {
    // Calculate level based on score (assuming each question adds 1000 points starting from 1000)
    const questionsPassed = Math.floor(score / 1000);
    return questionsPassed > 0 ? formatAwarenessLevel(questionsPassed) : "Starting";
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



  return (
    <div className="game-over-screen fade-in">
      <div className="game-over-container">
        <div className={`result-header ${isWinner ? 'winner' : ''}`}>
          <h1 className="result-title">{result.title}</h1>
          <h2 className="result-subtitle">{result.subtitle}</h2>
        </div>

        <div className="score-display">
        <div className="final-score">
          <span className="score-label">Final Awareness Level:</span>
          <span className="score-value">{getCurrentLevel()}</span>
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
