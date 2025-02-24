# 🀄 tiny_app – Mahjong Scoreboard

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
1. **State Management**:
- Uses React’s `useState` to manage player names, score rows, and modal visibility.
- Initializes state from `localStorage` to persist data across browser sessions.
2. **Local Storage Integration**:
- Utilizes `useEffect` to synchronize `rows` (score data) and `playersname` (player names) with `localStorage`, ensuring data persistence even after page refreshes.
3. **Dynamic Scoreboard Functionality**:
- Allows users to:
  - **Add new score rows** for each Mahjong round.
  - **Edit existing rows** using a toggle between draft and saved values.
  - **Delete rows** to remove rounds from the scoreboard.
- Provides **real-time sum calculation** of scores per player using the `CalculateSums` function.
4. **Component Composition**:
- `CreateModal`: Modal component for resetting the game or adding initial data.
- `CreateSum`: Displays the total scores calculated from all rounds.
- `NumberInputList`: Subcomponent that renders the dynamic list of score input rows.
- `InputRect`: Reusable input component for individual score entries, supporting conditional editing.
5. **User Interaction and Feedback**:
- Interactive UI with icons for revising (pen), saving (disk), deleting (trash), and clearing (reset).
- Disabled input fields when not in editing mode for better user experience and error prevention.

## 📄 Introduction to `Modal.jsx` – Mahjong Scoreboard Modal Component
The `Modal.jsx` component is a confirmation modal designed to ensure that users are making intentional decisions when clearing all Mahjong scoreboard data. It provides a simple and clear warning prompt with actionable buttons for confirmation or cancellation. This component enhances user experience by preventing accidental data loss.

### 🚀 Key Functionalities:
1. **Confirmation Prompt**:
- Displays a warning message: *"Are you sure to clear all the data?"*
- Ensures users acknowledge the consequences before clearing the scoreboard.
2. **Data Reset Mechanism**:
- On clicking **Yes**, the component:
   - Clears all score rows by resetting the `rows` state to an empty array.
   - Resets all player names to empty strings.
- Effectively provides a fresh start for a new Mahjong game session.
3. **Modal Visibility Control**:
- The modal’s visibility is controlled by the `setShowModal` function.
- Clicking **No** or the background dismisses the modal without affecting data.
4. **Reusable Design**:
- The modal can be easily reused for other confirmation prompts by adjusting the props and messages.
- Styled with `Modal.css` for a clean and focused user interface.

## 📄 Introduction to `Sum.jsx` – Mahjong Scoreboard Sum Display Component
The `Sum.jsx` component is responsible for displaying the total scores for each player in the Mahjong scoreboard application. It provides a clear and organized summary of accumulated scores across all game rounds, updating dynamically as players add or edit their scores.

### 🚀 Key Functionalities:
1. **Dynamic Score Summation**:
- Receives the `sums` prop from the parent component (`Table.jsx`), representing the total score for each player.
- Dynamically renders the updated sum values, reflecting real-time changes as new rounds are added or edited.
2. **Responsive Score Display**:
- Displays the **"SUM"** label followed by total scores for each player in a horizontal row.
- Uses `map()` to efficiently iterate over the `sums` array, ensuring scalability for additional players if needed.
3. **Styled Presentation**:
- Styled with `Sum.css` to provide a clean and minimalistic summary section.
- Includes a **horizontal line** for visual separation, enhancing readability and UI aesthetics.
4. **Stateless Functional Component**:
- Implemented as a **stateless functional component**, making it lightweight and focused solely on presenting data.
- Relies entirely on the `sums` prop for rendering, promoting reusability and easy maintenance.

## 🙏 Feedback & Future Improvements
Thank you to everyone who has provided valuable feedback on **tiny_app**. Your insights have been essential in helping improve the user experience (UX) of this Mahjong scoreboard application. 🎉

I am committed to continuously enhancing this project to make it more user-friendly, responsive, and feature-rich. If you have suggestions, spot any issues, or think of new features that could make the app better, **I would love to hear from you!** 💡

📬 **Feel free to reach out**:
- Open an [issue](https://github.com/Potassium-chromate/tiny_app/issues) on GitHub
- Submit a pull request with improvements
- Contact me directly at [home7438072@gmail.com]
  
Together, we can make tiny_app the perfect Mahjong score-tracking companion. 🀄✨
