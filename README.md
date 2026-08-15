# D'Crumble Bakery

A responsive bakery landing page built with React and Tailwind CSS as part of my front-end development learning journey.

## Overview

D'Crumble Bakery is a modern landing page concept designed to showcase bakery products in a clean and responsive interface.

This project was created to practice building a structured React application, developing reusable components, managing local data, and creating interactive UI elements with Tailwind CSS.

## Features

* Responsive bakery landing page
* Hero section with promotional content
* Animated statistic counters
* Product menu showcase
* Product category filtering
* Interactive product cards
* Product detail modal
* Responsive navigation and footer
* Halal Indonesia badge integration
* Reusable UI components

## Tech Stack

* React 19
* Vite
* Tailwind CSS 4
* JavaScript
* Lucide React
* Oxlint

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── icons/
│   ├── layout/
│   ├── sections/
│   │   ├── menu/
│   │   └── HeroSection.jsx
│   └── ui/
├── data/
│   └── landingData.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

The project uses a component-based structure to separate layout, sections, reusable UI elements, and application data.

## Data & Content

The menu content is currently managed through local JavaScript data rather than an external API.

The project includes sample bakery products with categories such as:

* Hemat
* Spesial
* Favorit

Product images are loaded from external image URLs.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your computer.

### Installation

Clone this repository:

```bash
git clone  https://github.com/rahmatnurmaulani-boop/dcrumble-bakery-react.git 
```

Navigate to the project directory:

```bash
cd 1st-website-react
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Builds the application for production.

```bash
npm run lint
```

Checks the project using Oxlint.

```bash
npm run preview
```

Previews the production build locally.

## What I Learned

Through this project, I practiced:

* Building a React application with Vite
* Creating reusable React components
* Organizing components into a scalable folder structure
* Managing local application data
* Using React state with `useState`
* Creating category-based filtering
* Building interactive modal components
* Styling interfaces with Tailwind CSS
* Creating responsive layouts for different screen sizes
* Using icons with Lucide React
* Applying code quality checks with Oxlint

## Future Improvements

* Add a shopping cart feature
* Add product search functionality
* Connect the application to a backend or API
* Add a real ordering system
* Improve accessibility
* Deploy the project online

## Project Status

This project is a learning project and part of my ongoing journey in Front-End Development.

## Author

Rahmat Nur Maulani

Aspiring Front-End Developer
