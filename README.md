# React To-Do App

## 📌 Overview

This is an advanced **To-Do App** built with React that allows users to manage tasks efficiently. The app integrates with an external API (e.g., a weather API) to enhance task management and implements state management using Redux.

## 🚀 Features

✅ Add, view, and delete tasks  
✅ Persistent storage using **localStorage**  
✅ User authentication (mocked)  
✅ Responsive design for **mobile, tablet, and desktop**

## 🛠️ Technologies Used

- **React.js** (Functional Components & Hooks)
- **Redux Toolkit** (State Management)
- **CSS (Flexbox & Grid for responsiveness)**
- **Bootstrap**
- **LocalStorage (For persisting data)**

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Get API Key for Weather Data

Sign up at [OpenWeather API](https://openweathermap.org/api) and get an API key.

### 4️⃣ Set Up Environment Variables

Create a `.env` file in the root and add:

```sh
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### 5️⃣ Run the Development Server

```sh
npm start
```

This starts the app at `http://localhost:3000/`.

## 🌍 Deployment

You can deploy the app for free using **Netlify**, **Vercel**, or **GitHub Pages**.

### Deploy on Vercel (Recommended)

```sh
npm run build
vercel deploy
```

## 📜 Folder Structure

```
react-todo-app/
│-- src/
│   │-- components/
│   │   │-- TaskInput.js
│   │   │-- TaskList.js
│   │-- redux/
│   │   │-- store.js
│   │   │-- tasksSlice.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- .env
│-- package.json
│-- README.md
```

## 📝 Usage

1️⃣ Add a task in the **input field** and click "Add Task"  
2️⃣ Click "Delete" to remove a task
3️⃣ Tasks remain saved even after page reloads

## 🔥 Future Improvements

- ✅ Backend integration for real authentication
- ✅ Drag & Drop for task reordering
- ✅ Dark mode support

## 🛠️ Contributing

Pull requests are welcome! Please follow these steps:
1️⃣ Fork the repo  
2️⃣ Create a new branch (`git checkout -b feature-branch`)  
3️⃣ Commit changes (`git commit -m "Added a new feature"`)  
4️⃣ Push the branch (`git push origin feature-branch`)  
5️⃣ Open a PR 🚀

