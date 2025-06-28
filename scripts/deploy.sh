#!/bin/bash

# Personal Website Deployment Script
# This script builds and deploys the website to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project to docs/
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

# Add and commit docs/
git add docs

echo "✅ Docs folder staged."
echo "Now commit and push to main branch to deploy."
echo "Example:"
echo "  git commit -m 'Deploy to GitHub Pages'"
echo "  git push"

npm run build
git add docs
git commit -m "Build for GitHub Pages"
git push 