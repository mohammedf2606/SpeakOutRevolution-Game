#!/bin/bash

# SpeakOut Revolution Game - Deployment Script
# This script helps deploy the game to GitHub Pages

echo "🎮 SpeakOut Revolution Game - Deployment Script"
echo "================================================"

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Deploy to GitHub Pages
    echo "🚀 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment completed successfully!"
        echo ""
        echo "Your game will be available at:"
        echo "🌐 https://mohammedf2606.github.io/SpeakOutRevolution-Game"
        echo ""
        echo "📋 To embed in Squarespace, use this iframe code:"
        echo '<iframe src="https://mohammedf2606.github.io/SpeakOutRevolution-Game" width="100%" height="600px" frameborder="0" title="SpeakOut Revolution Game"></iframe>'
        echo ""
        echo "⏰ Note: It may take 5-10 minutes for changes to appear on GitHub Pages."
    else
        echo "❌ Deployment failed. Please check the error messages above."
        exit 1
    fi
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
