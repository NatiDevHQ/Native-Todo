Completed


````markdown
# 📋 Expo Todo App 

A simple and responsive Todo app built with [Expo](https://expo.dev) and [Convex](https://convex.dev) for real-time backend functionality.  
This project was bootstrapped with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## ✨ Features

- ✅ Add, edit, and delete todos
- 🔄 Real-time sync using Convex backend
- 📱 Runs on Android, iOS, and Web
- ⚡ Fast and lightweight with Expo
- ☁️ Backend-less setup thanks to Convex’s managed services

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/NatiDevHQ/expo-todo-app.git
cd expo-todo-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Convex

1. Create a Convex account at [https://dashboard.convex.dev](https://dashboard.convex.dev)
2. Create a new Convex project
3. Copy your **CONVEX\_URL** and update the `.env` file:

```env
EXPO_PUBLIC_CONVEX_URL=your-convex-url
```

4. Push Convex functions:

```bash
npx convex dev
```

### 4. Start the App

```bash
npx expo start
```

Choose one of the options:

* 📱 **Development Build**
* 📱 **Android Emulator**
* 🍏 **iOS Simulator**
* 🌐 **Web Browser**
* 📲 **Expo Go** (limited sandbox)

---

## 📂 Project Structure

```
.
├── app/                # Screens and navigation (file-based routing)
├── convex/             # Convex backend functions
├── components/         # Reusable UI components
├── .env                # Environment variables (Convex URL)
├── package.json        # Dependencies and scripts
└── README.md
```

---

## 🛠 Scripts

* `npm start` – Start Expo in development mode
* `npm run android` – Run on Android
* `npm run ios` – Run on iOS
* `npm run web` – Run on Web
* `npm run reset-project` – Reset to a fresh project

---

## 📚 Learn More

* [Expo Documentation](https://docs.expo.dev/) – Fundamentals and advanced guides
* [Convex Documentation](https://docs.convex.dev/) – Real-time backend setup
* [React Native Docs](https://reactnative.dev/) – Learn the framework powering Expo

---

## 📜 License

This project is licensed under the MIT License.
Feel free to use and modify it as you like.

```

