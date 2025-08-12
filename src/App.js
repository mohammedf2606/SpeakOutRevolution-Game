import React, { useState } from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import WelcomeScreen from './components/WelcomeScreen';
import GameOverScreen from './components/GameOverScreen';
import { questions } from './data/questions';

function App() {
  const [gameState, setGameState] = useState('welcome'); // 'welcome', 'playing', 'gameOver'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lifelines, setLifelines] = useState({
    fiftyFifty: true,
    askAudience: true,
    phoneAFriend: true
  });

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setLifelines({
      fiftyFifty: true,
      askAudience: true,
      phoneAFriend: true
    });
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    if (isCorrect) {
      const newScore = score + currentQuestion.value;
      setScore(newScore);
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Player won the game!
        setGameState('gameOver');
      }
    } else {
      // Wrong answer - game over
      setGameState('gameOver');
    }
  };

  const walkAway = () => {
    setGameState('gameOver');
  };

  const useLifeline = (lifelineType) => {
    setLifelines(prev => ({
      ...prev,
      [lifelineType]: false
    }));
  };

  const restartGame = () => {
    setGameState('welcome');
  };

  return (
    <div className="App">
      {gameState === 'welcome' && (
        <WelcomeScreen onStartGame={startGame} />
      )}
      
      {gameState === 'playing' && (
        <GameScreen
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          score={score}
          lifelines={lifelines}
          onAnswer={handleAnswer}
          onWalkAway={walkAway}
          onUseLifeline={useLifeline}
        />
      )}
      
      {gameState === 'gameOver' && (
        <GameOverScreen
          score={score}
          totalQuestions={questions.length}
          onRestart={restartGame}
          isWinner={currentQuestionIndex === questions.length}
        />
      )}
    </div>
  );
}

export default App;
