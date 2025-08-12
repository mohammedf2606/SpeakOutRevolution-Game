# SpeakOut Revolution Game

## About Speak Out Revolution

**Speak Out Revolution** is a non-profit organisation founded in 2020, with a mission to cancel the culture of silence on harassment and bullying in our workplaces. We're leveraging the lived experiences of those who have spoken out about workplace harassment and bullying so we can collectively, efficiently and intelligently tackle the fundamental challenge to creating truly inclusive workplaces for all.

## About This Game

This interactive trivia game is designed to gamify the statistics and research findings produced by Speak Out Revolution. Through an engaging "Who Wants to Be a Millionaire" style format, players learn about workplace harassment and bullying statistics, creating awareness while making the learning process interactive and memorable.

The game serves as an educational tool that can be embedded into websites and presentations to help spread awareness about workplace harassment and bullying issues, making important statistics more accessible and engaging for a wider audience.

*A React-based educational trivia game that can be embedded into an iframe in Squarespace via GitHub Pages.*

## 🎮 Game Features

- **Progressive Difficulty**: Questions get harder as you climb the money ladder
- **Lifelines**: Three classic lifelines to help you succeed
  - 50:50 - Remove two wrong answers
  - Ask the Audience - See simulated audience poll results
  - Phone a Friend - Get advice from a virtual friend
- **Money Ladder**: Climb from $1,000 to $16,000,000
- **Responsive Design**: Works perfectly in iframes and on all devices
- **Smooth Animations**: Engaging visual effects and transitions
- **Share Functionality**: Share your score with friends

## 🚀 Live Demo

The game is automatically deployed to GitHub Pages at:
https://mohammedf2606.github.io/SpeakOutRevolution-Game

## 📱 Iframe Embedding

To embed this game in your Squarespace site, use the following iframe code:

```html
<iframe 
  src="https://mohammedf2606.github.io/SpeakOutRevolution-Game" 
  width="100%" 
  height="600px" 
  frameborder="0"
  title="SpeakOut Revolution Game">
</iframe>
```

### Responsive Iframe (Recommended)

For a responsive iframe that adapts to different screen sizes:

```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
  <iframe 
    src="https://mohammedf2606.github.io/SpeakOutRevolution-Game" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    title="SpeakOut Revolution Game">
  </iframe>
</div>
```

## 🛠️ Local Development

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mohammedf2606/SpeakOutRevolution-Game.git
cd SpeakOutRevolution-Game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The game will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

## 🎯 Customization

### Adding New Questions

Edit `/src/data/questions.js` to add new questions:

```javascript
{
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: "Option A",
  value: 1000,
  difficulty: "easy"
}
```

### Styling

- Main styles: `/src/App.css`
- Component-specific styles in their respective CSS files
- Color scheme can be easily modified by updating CSS custom properties

### Game Logic

- Main game logic: `/src/App.js`
- Individual screens: `/src/components/`
- Question data and utilities: `/src/data/questions.js`

## 📱 Mobile Optimization

The game is fully optimized for mobile devices and iframe embedding:

- Responsive design that works on all screen sizes
- Touch-friendly buttons and interface
- Optimized for portrait and landscape orientations
- Smooth scrolling and animations

## 🎨 Design Features

- **Glass morphism UI**: Modern translucent design elements
- **Gradient backgrounds**: Rich color gradients for visual appeal
- **Smooth animations**: CSS transitions and keyframe animations
- **Visual feedback**: Clear indicators for correct/wrong answers
- **Accessibility**: High contrast colors and readable fonts

## 🔧 Technical Details

- **Framework**: React 18
- **Styling**: Pure CSS with modern features
- **Deployment**: GitHub Pages with automatic deployment
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized for fast loading in iframes

## 📊 Game Mechanics

### Money Ladder
- 15 questions total
- Progressive prize values: $1K → $16M
- Safe havens at question 5 and 10 (feature can be implemented)

### Lifelines
- **50:50**: Eliminates two incorrect answers
- **Ask Audience**: Shows weighted poll results (favors correct answer)
- **Phone Friend**: Provides confidence-based advice

### Scoring
- Correct answers advance to the next level
- Wrong answers end the game
- Players can walk away with current winnings

## 🚀 Deployment

The game automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment URL is configured in `package.json`.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please open an issue on GitHub.

---

🎮 **Ready to become a millionaire? Start playing now!**
