# 🎲 tiny_app – Mahjong Scoreboard

## 📖 Intro
**tiny_app** is a web application built with **React** that serves as a simple and intuitive **Mahjong score tracker**. It allows players to keep track of their scores throughout the game, ensuring a smooth and organized playing experience.

🌐 Live Demo: [tiny_app on Vercel](https://tiny-app-w6s7.vercel.app/)
## 📂 Component Hierarchy (File Dependencies)
```shell
App.jsx
   └── Table.jsx
        ├── Modal.jsx
        └── Sum.jsx
```
- **App.jsx** – The root component that renders the entire application.
- **Table.jsx** – Handles the main scoreboard table.
- **Modal.jsx** – Displays modals for user inputs or game events.
- **Sum.jsx** – Calculates and displays the total scores.

## 📄 Introduction to `Table.jsx` – Mahjong Scoreboard Component
The `Table.jsx` file is the core component of the tiny_app Mahjong scoreboard web application. It handles the main functionality related to score management, player name input, and user interactions for the scoreboard. Built with React, this component demonstrates dynamic state management, local storage integration, and modular component architecture.

### 🚀 Key Functionalities:
1. State Management:
- Uses React’s `useState` to manage player names, score rows, and modal visibility.
- Initializes state from `localStorage` to persist data across browser sessions.
2. Local Storage Integration:
- Utilizes `useEffect` to synchronize `rows` (score data) and `playersname` (player names) with `localStorage`, ensuring data persistence even after page refreshes.
3. Dynamic Scoreboard Functionality:
- Allows users to:
  - **Add new score rows** for each Mahjong round.
  - **Edit existing rows** using a toggle between draft and saved values.
  - **Delete rows** to remove rounds from the scoreboard.
- Provides **real-time sum calculation** of scores per player using the `CalculateSums` function.
4. Component Composition:
- `CreateModal`: Modal component for resetting the game or adding initial data.
- `CreateSum`: Displays the total scores calculated from all rounds.
- `NumberInputList`: Subcomponent that renders the dynamic list of score input rows.
- `InputRect`: Reusable input component for individual score entries, supporting conditional editing.
5. User Interaction and Feedback:
- Interactive UI with icons for revising (pen), saving (disk), deleting (trash), and clearing (reset).
- Disabled input fields when not in editing mode for better user experience and error prevention.
