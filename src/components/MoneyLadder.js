import React, { useEffect, useRef } from 'react';
import './MoneyLadder.css';

const MoneyLadder = ({ questions, currentQuestion, score }) => {
  const ladderContainerRef = useRef(null);
  const currentItemRef = useRef(null);
  
  const awarenessLevels = [
    "Novice", "Beginner", "Learning", "Aware", "Informed", 
    "Knowledgeable", "Well-Informed", "Educated", "Expert", "Specialist",
    "Advanced", "Professional", "Authority", "Master", "Champion"
  ];

  const formatAwarenessLevel = (questionNumber) => {
    return awarenessLevels[questionNumber - 1] || "Champion";
  };

  // Initial scroll to bottom when component mounts
  useEffect(() => {
    if (ladderContainerRef.current && currentQuestion === 0) {
      const container = ladderContainerRef.current;
      setTimeout(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'auto'
        });
      }, 100);
    }
  }, []);

  // Auto-scroll to current question when it changes, start at bottom for Novice level
  useEffect(() => {
    if (ladderContainerRef.current) {
      const container = ladderContainerRef.current;
      
      if (currentQuestion === 0) {
        // At the start, scroll to bottom to show Novice level (question 1)
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
      } else if (currentItemRef.current) {
        // After questions are answered, scroll to current level
        const currentItem = currentItemRef.current;
        
        // Calculate the position to center the current item
        const containerHeight = container.clientHeight;
        const itemHeight = currentItem.clientHeight;
        const itemOffsetTop = currentItem.offsetTop;
        
        // Scroll to center the current item in the container
        const scrollPosition = itemOffsetTop - (containerHeight / 2) + (itemHeight / 2);
        
        container.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }
  }, [currentQuestion]);

  return (
    <div className="money-ladder">
      <h3 className="ladder-title">Awareness Ladder</h3>
      <div className="ladder-container" ref={ladderContainerRef}>
        {questions.slice().reverse().map((question, index) => {
          const questionNumber = questions.length - index;
          const isCurrentQuestion = questionNumber === currentQuestion;
          const isCompleted = questionNumber < currentQuestion;
          const isSafeHaven = questionNumber === 5 || questionNumber === 10;
          
          return (
            <div
              key={questionNumber}
              ref={isCurrentQuestion ? currentItemRef : null}
              className={`ladder-item ${isCurrentQuestion ? 'current' : ''} 
                ${isCompleted ? 'completed' : ''} 
                ${isSafeHaven ? 'safe-haven' : ''}`}
            >
              <span className="question-num">{questionNumber}</span>
              <span className="prize-amount">{formatAwarenessLevel(questionNumber)}</span>
              {isSafeHaven && (
                <span className="safe-indicator">🛡️</span>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="current-score">
        <div className="score-label">Current Level:</div>
        <div className="score-amount">{currentQuestion > 0 ? formatAwarenessLevel(currentQuestion - 1) : "Novice"}</div>
      </div>
    </div>
  );
};

export default MoneyLadder;
