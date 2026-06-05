## 📹 Streamora – Video Calling App

Streamora is a real-time video calling and meeting web application built using React.js, Node.js, Express, and WebRTC (or socket-based communication). It allows users to create or join meetings, chat in real-time, and maintain meeting history.

-- --

## 🚀 Features

🔐 User Authentication (Login / Register)
📞 Create & Join Video Meetings
🎥 Real-time Video Communication
💬 In-meeting Chat System
📜 Meeting History Tracking
🏠 Simple Home Dashboard
🌐 Clean and Responsive UI (Material UI)

-- --

## 🧑‍💻 Tech Stack

# Frontend
React.js
React Router DOM
Material UI
Context API (Auth Management)

# Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication (or token-based auth)

# Real-time (if used)
WebRTC / Socket.io

-- --

## 📁 Project Structure

Streamora/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── Authentication.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── History.jsx
│   │   │   └── VideoMeet.jsx
│   │   │
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── App.js
│   │   └── App.css
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
└── README.md

-- --

## 🛣️ Routes

| Route      | Description        |
| ---------- | ------------------ |
| `/`        | Landing Page       |
| `/auth`    | Login / Register   |
| `/home`    | Home Dashboard     |
| `/history` | Meeting History    |
| `/:url`    | Video Meeting Room |

-- --

## ⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/yourusername/streamora.git
cd streamora

2️⃣ Install frontend dependencies

cd frontend
npm install

3️⃣ Start frontend

npm run dev

4️⃣ Install backend dependencies

cd backend
npm install

5️⃣ Start backend server

npm start

-- --

## 🔐 Environment Variables

Create a .env file in backend:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

-- --

## 📸 UI Preview

Landing page with navigation
Authentication page (Login/Register)
Home dashboard for meeting creation
Video meeting room with chat
History page showing past meetings

-- --

## 📌 Future Improvements


User Profile System
Meeting Scheduling
Better Authentication using Refresh Tokens
Mobile Responsive Optimization
Admin-Controlled Meeting Mode (only admin can use camera/mic)
Advanced Chat System (files, emojis, timestamps)
Screen Sharing Feature
Participant Management (kick, raise hand, waiting room)
Cloud Storage Integration for files and recordings
Admin Analytics Dashboard
Notification System (email/push alerts)
UI/UX Improvements (dark mode, animations, better design)
AI-based Features (auto transcription, meeting summary, noise cancellation)

-- --

## 👨‍💻 Author

Aditya Sharma
Built as a full-stack video calling project using modern web technologies.