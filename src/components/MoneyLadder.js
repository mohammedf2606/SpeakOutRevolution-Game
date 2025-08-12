import React from 'react';
import './MoneyLadder.css';

const MoneyLadder = ({ questions, currentQuestion, score }) => {
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="money-ladder">
      <h3 className="ladder-title">Awareness Ladder</h3>
      <div className="ladder-container">
        {questions.slice().reverse().map((question, index) => {
          const questionNumber = questions.length - index;
          const isCurrentQuestion = questionNumber === currentQuestion;
          const isCompleted = questionNumber < currentQuestion;
          const isSafeHaven = questionNumber === 5 || questionNumber === 10;
          
          return (
            <div
              key={questionNumber}
              className={`ladder-item ${isCurrentQuestion ? 'current' : ''} 
                ${isCompleted ? 'completed' : ''} 
                ${isSafeHaven ? 'safe-haven' : ''}`}
            >
              <span className="question-num">{questionNumber}</span>
              <span className="prize-amount">{formatMoney(question.value)}</span>
              {isSafeHaven && (
                <span className="safe-indicator">🛡️</span>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="current-score">
        <div className="score-label">Current Awareness Score:</div>
        <div className="score-amount">{formatMoney(score)}</div>
      </div>
    </div>
  );
};

export default MoneyLadder;
