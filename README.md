# TaskMaster - Personal Task Management Application

A modern, responsive task management application built with React and Vite.

## Features

- ✅ Add new tasks with title, description, and priority levels
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Responsive design for mobile and desktop
- ✅ Clean, modern UI with priority color coding

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohit7177/TaskMaster.git
cd TaskMaster
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── index.css        # Global styles
└── main.jsx         # Application entry point
```

## Technologies Used

- React 18
- Vite
- CSS3 with Flexbox/Grid
- Modern JavaScript (ES6+)

## Features Implementation

### Core Functionality
- **Add Tasks**: Form validation ensures tasks have titles
- **Delete Tasks**: Remove tasks from the list
- **Toggle Completion**: Mark tasks as done with visual feedback
- **Priority Levels**: High (Red), Medium (Orange), Low (Green)

### Bonus Features
- **Filtering**: View All, Active, or Completed tasks
- **Responsive Design**: Mobile-first approach with grid layout

## Deployment

This application can be deployed to platforms like:
- Netlify
- Vercel
- GitHub Pages

## Author

Mohit