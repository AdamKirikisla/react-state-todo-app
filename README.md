<div align="center">

<img src="react-state-todo-app/images/react.svg" alt="React logo" width="120" />

# React State Todo App

**A simple todo app built to practice React and React state management.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://react-state-todo-fje8nduv2-adam-kirikisla.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?style=flat-square&logo=eslint&logoColor=white)

</div>

---

## 🎯 Purpose

This project was made as practice for working with React, and in particular `useState`. It covers:

- Holding a list of tasks in state and updating it immutably
- Adding, completing (toggling) and deleting tasks
- Passing state and handler functions down to child components as props
- Handling form submissions with `FormData`

## ✨ Features

- ➕ Add a task with a priority
- ✅ Mark a task as done / not done
- 🗑️ Delete a task

## 🚀 Getting Started

```bash
cd react-state-todo-app
npm install
npm run dev
```

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Create a production build    |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |

## 📁 Project Structure

```
react-state-todo-app/
└── src/
    ├── App.jsx
    ├── data.js               # initial tasks
    └── Components/
        ├── Header.jsx
        ├── Main.jsx          # owns the task state
        ├── AddTaskForm.jsx
        ├── TaskList.jsx
        ├── ToggleButton.jsx
        └── DeleteButton.jsx
```
