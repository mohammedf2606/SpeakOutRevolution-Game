import React, { useState, useEffect } from 'react';
import './GameScreen.css';
import MoneyLadder from './MoneyLadder';
import LifelineButtons from './LifelineButtons';

const GameScreen = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  score, 
  lifelines, 
  onAnswer, 
  onWalkAway, 
  onUseLifeline 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [usedLifeline, setUsedLifeline] = useState(null);
  const [eliminatedAnswers, setEliminatedAnswers] = useState([]);
  const [audienceResults, setAudienceResults] = useState(null);
  const [friendAdvice, setFriendAdvice] = useState(null);

  useEffect(() => {
    // Reset state for new question
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(30);
    setUsedLifeline(null);
    setEliminatedAnswers([]);
    setAudienceResults(null);
    setFriendAdvice(null);
  }, [question]);

  useEffect(() => {
    if (timeLeft > 0 && !selectedAnswer) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !selectedAnswer) {
      // Time's up - treat as wrong answer
      onAnswer(null);
    }
  }, [timeLeft, selectedAnswer, onAnswer]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer || showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    // Show result for 2 seconds before proceeding
    setTimeout(() => {
      onAnswer(answer);
    }, 2000);
  };

  const handleLifeline = (lifelineType) => {
    if (!lifelines[lifelineType] || usedLifeline) return;
    
    setUsedLifeline(lifelineType);
    onUseLifeline(lifelineType);

    switch (lifelineType) {
      case 'fiftyFifty':
        // Remove 2 wrong answers
        const wrongAnswers = question.options
          .filter(option => option !== question.correct)
          .slice(0, 2);
        setEliminatedAnswers(wrongAnswers);
        break;
        
      case 'askAudience':
        // Simulate audience voting (weighted toward correct answer)
        const results = {};
        const correctWeight = Math.random() * 40 + 40; // 40-80% for correct
        const remaining = 100 - correctWeight;
        
        question.options.forEach((option, index) => {
          if (option === question.correct) {
            results[option] = Math.round(correctWeight);
          } else {
            results[option] = Math.round(remaining / (question.options.length - 1));
          }
        });
        
        setAudienceResults(results);
        break;
        
      case 'phoneAFriend':
        // Simulate friend's advice
        const confidence = Math.random() * 100;
        let advice;
        
        if (confidence > 70) {
          advice = `I'm pretty confident it's ${question.correct}. That's my final answer!`;
        } else if (confidence > 40) {
          advice = `I think it might be ${question.correct}, but I'm not 100% sure.`;
        } else {
          advice = "I'm really not sure about this one. You might want to guess or use another lifeline.";
        }
        
        setFriendAdvice(advice);
        break;
        
      default:
        break;
    }
  };

  const awarenessLevels = [
    "Novice", "Beginner", "Learning", "Aware", "Informed", 
    "Knowledgeable", "Well-Informed", "Educated", "Expert", "Specialist",
    "Advanced", "Professional", "Authority", "Master", "Champion"
  ];

  const formatAwarenessLevel = (questionNumber) => {
    return awarenessLevels[questionNumber - 1] || "Champion";
  };

  return (
    <div className="game-screen fade-in">
      <div className="game-header">
        <div className="question-info">
          <span className="question-number">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="current-prize">
            Playing for: {formatAwarenessLevel(questionNumber)}
          </span>
        </div>
        
        <div className="timer-container">
          <div className={`timer ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
            {timeLeft}s
          </div>
        </div>
      </div>

      <div className="game-content">
        <div className="main-game">
          <div className="question-container slide-in">
            <h2 className="question-text">{question.question}</h2>
          </div>
          
          <div className="answers-container">
            {question.options.map((option, index) => {
              const isEliminated = eliminatedAnswers.includes(option);
              const isSelected = selectedAnswer === option;
              const isCorrect = option === question.correct;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;
              
              return (
                <button
                  key={index}
                  className={`answer-button ${isEliminated ? 'eliminated' : ''} 
                    ${isSelected ? 'selected' : ''} 
                    ${showCorrect ? 'correct' : ''} 
                    ${showWrong ? 'wrong' : ''}`}
                  onClick={() => handleAnswerClick(option)}
                  disabled={isEliminated || selectedAnswer}
                >
                  <span className="answer-letter">
                    {String.fromCharCode(65 + index)}:
                  </span>
                  <span className="answer-text">{option}</span>
                </button>
              );
            })}
          </div>

          <div className="game-controls">
            <LifelineButtons
              lifelines={lifelines}
              onUseLifeline={handleLifeline}
              disabled={!!selectedAnswer}
            />
            
            <button 
              className="walk-away-button"
              onClick={onWalkAway}
              disabled={!!selectedAnswer}
            >
              Complete at Level: {questionNumber > 1 ? formatAwarenessLevel(questionNumber - 1) : "Starting"}
            </button>
          </div>

          {/* Lifeline Results */}
          {audienceResults && (
            <div className="lifeline-result audience-result">
              <h3>📊 Audience Poll Results:</h3>
              <div className="poll-results">
                {Object.entries(audienceResults).map(([option, percentage]) => (
                  <div key={option} className="poll-item">
                    <span className="poll-option">{option}</span>
                    <div className="poll-bar">
                      <div 
                        className="poll-fill" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="poll-percentage">{percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {friendAdvice && (
            <div className="lifeline-result friend-result">
              <h3>📞 Friend's Advice:</h3>
              <p className="friend-advice">"{friendAdvice}"</p>
            </div>
          )}
        </div>

        <div className="sidebar">
          <MoneyLadder
            questions={Array.from({ length: totalQuestions }, (_, i) => ({
              value: (i + 1) * 1000, // Keep value for scoring but display will use awareness levels
              number: i + 1
            }))}
            currentQuestion={questionNumber}
            score={score}
          />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
