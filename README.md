 # Tic-Tac-Toe Game 

A modern Tic-Tac-Toe game built using React, TypeScript, and Tailwind CSS.

The project includes:

* Dark/Light theme toggle 
* Winner detection 
* Draw detection 
* Sound effects 
* Responsive UI 
* Context API for theme management 
* TypeScript support 

---

# Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Icons
* Context API
* Vite

---

# Installation

## 1. Clone the repository

```bash
git clone <your-repository-url>
```

## 2. Move into the project folder

```bash
cd ticTakToe
```

## 3. Install dependencies

```bash
npm install
```

## 4. Install React Icons

```bash
npm install react-icons
```

## 5. Start development server

```bash
npm run dev
```

---

# Features

## Theme Toggle

Uses React Context API to switch between dark mode and light mode.

---

## Winner Detection

The game automatically checks all winning patterns:

```ts
const wins: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
```

---

## Draw Detection

If all boxes are filled and no winner exists, the game shows a draw message.

---

## Sound Effects

* Move sound
* Winner sound
* Draw sound

---

# Concepts Used

## React Concepts

* useState
* useEffect
* useContext
* Context API
* Conditional Rendering
* Event Handling
* Component-Based Architecture

---

## TypeScript Concepts

* Type Alias
* Union Types
* Generic Types
* Array Types
* Function Types
* ReactNode
* Type Annotation

---

 

# Scripts

## Run development server

```bash
npm run dev
```

## Build project

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

---



 
