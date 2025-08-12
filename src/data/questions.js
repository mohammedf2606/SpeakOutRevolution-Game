export const questions = [
  {
    question: "What percentage of employees have experienced workplace bullying according to recent studies?",
    options: ["15%", "25%", "37%", "50%"],
    correct: "37%",
    value: 1000,
    difficulty: "easy"
  },
  {
    question: "How many times more likely are women to experience workplace harassment compared to men?",
    options: ["2 times", "3 times", "4 times", "5 times"],
    correct: "3 times",
    value: 2000,
    difficulty: "easy"
  },
  {
    question: "What percentage of workplace harassment incidents go unreported?",
    options: ["45%", "60%", "75%", "85%"],
    correct: "75%",
    value: 4000,
    difficulty: "easy"
  },
  {
    question: "According to studies, what is the average cost to an organization when workplace bullying is left unaddressed?",
    options: ["£50,000", "£100,000", "£180,000", "£250,000"],
    correct: "£180,000",
    value: 8000,
    difficulty: "medium"
  },
  {
    question: "What percentage of employees who experience workplace harassment consider leaving their job?",
    options: ["42%", "58%", "69%", "78%"],
    correct: "69%",
    value: 16000,
    difficulty: "medium"
  },
  {
    question: "Which industry has the highest reported rates of workplace harassment?",
    options: ["Healthcare", "Hospitality", "Technology", "Finance"],
    correct: "Hospitality",
    value: 32000,
    difficulty: "medium"
  },
  {
    question: "What percentage of workplace bullying incidents involve a manager or supervisor?",
    options: ["35%", "50%", "65%", "80%"],
    correct: "65%",
    value: 64000,
    difficulty: "medium"
  },
  {
    question: "How much does workplace harassment cost the UK economy annually?",
    options: ["£2.5 billion", "£5.2 billion", "£8.1 billion", "£12.7 billion"],
    correct: "£8.1 billion",
    value: 125000,
    difficulty: "hard"
  },
  {
    question: "What percentage of HR professionals report their organization lacks adequate policies for addressing workplace harassment?",
    options: ["28%", "41%", "56%", "72%"],
    correct: "41%",
    value: 250000,
    difficulty: "hard"
  },
  {
    question: "According to research, how long does the average workplace harassment investigation take?",
    options: ["2-4 weeks", "6-8 weeks", "10-12 weeks", "14-16 weeks"],
    correct: "10-12 weeks",
    value: 500000,
    difficulty: "hard"
  },
  {
    question: "What percentage of employees who witness workplace harassment fail to report it?",
    options: ["67%", "74%", "83%", "91%"],
    correct: "83%",
    value: 1000000,
    difficulty: "expert"
  },
  {
    question: "Which demographic group is most likely to experience workplace harassment according to recent statistics?",
    options: ["Young women (18-24)", "Middle-aged men (35-44)", "Senior women (45-54)", "Young men (18-24)"],
    correct: "Young women (18-24)",
    value: 2000000,
    difficulty: "expert"
  },
  {
    question: "What is the average turnover rate in organizations with high levels of workplace harassment?",
    options: ["18%", "29%", "43%", "57%"],
    correct: "43%",
    value: 4000000,
    difficulty: "expert"
  },
  {
    question: "According to Speak Out Revolution research, what percentage of employees believe their workplace culture actively prevents harassment?",
    options: ["23%", "31%", "47%", "62%"],
    correct: "31%",
    value: 8000000,
    difficulty: "expert"
  },
  {
    question: "What percentage increase in productivity is seen in organizations that successfully address workplace harassment?",
    options: ["12%", "18%", "25%", "34%"],
    correct: "25%",
    value: 16000000,
    difficulty: "expert"
  }
];

// Sample questions for different categories that can be customized
export const sampleQuestionsByCategory = {
  statistics: [
    {
      question: "What percentage of employees believe their organization takes workplace harassment seriously?",
      options: ["45%", "58%", "67%", "79%"],
      correct: "58%",
      value: 1000,
      difficulty: "easy"
    }
  ],
  impact: [
    {
      question: "How much does employee turnover due to harassment cost organizations per incident?",
      options: ["£15,000", "£25,000", "£35,000", "£50,000"],
      correct: "£35,000",
      value: 2000,
      difficulty: "medium"
    }
  ],
  demographics: [
    {
      question: "Which age group reports the highest levels of workplace harassment?",
      options: ["18-25", "26-35", "36-45", "46-55"],
      correct: "18-25",
      value: 4000,
      difficulty: "medium"
    }
  ],
  solutions: [
    {
      question: "What is the most effective intervention for reducing workplace harassment?",
      options: ["Training programs", "Clear policies", "Anonymous reporting", "Leadership commitment"],
      correct: "Leadership commitment",
      value: 8000,
      difficulty: "hard"
    }
  ],
  awareness: [
    {
      question: "According to Speak Out Revolution research, what percentage of employees want more workplace harassment education?",
      options: ["62%", "71%", "84%", "92%"],
      correct: "84%",
      value: 16000,
      difficulty: "hard"
    }
  ]
};

// Function to shuffle array (Fisher-Yates algorithm)
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty) => {
  return questions.filter(q => q.difficulty === difficulty);
};

// Function to create a custom game with mixed difficulties
export const createCustomGame = (easyCount = 5, mediumCount = 5, hardCount = 3, expertCount = 2) => {
  const easyQuestions = shuffleArray(getQuestionsByDifficulty('easy')).slice(0, easyCount);
  const mediumQuestions = shuffleArray(getQuestionsByDifficulty('medium')).slice(0, mediumCount);
  const hardQuestions = shuffleArray(getQuestionsByDifficulty('hard')).slice(0, hardCount);
  const expertQuestions = shuffleArray(getQuestionsByDifficulty('expert')).slice(0, expertCount);
  
  return [...easyQuestions, ...mediumQuestions, ...hardQuestions, ...expertQuestions];
};
