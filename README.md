# AZA-DIAMONDS-AND-GOLD

AZA Diamonds & Gold — Full-Stack Monorepo
An international luxury jewellery platform for AZA Diamonds & Gold (Kannur, Kerala), built with React 18, Vite, Node.js, Express, and MongoDB.

📁 Repository Architecture
aza-diamonds/
├── client/          # React 18 + Vite Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── home/
│   │   │   └── layout/
│   │   ├── ui/
│   │   ├── data/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
│
├── server/          # Node.js + Express + MongoDB Backend Service
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
🚀 Getting Started
1. Run Client Development Server
cd client
npm install
npm run dev
2. Run Server Development API
cd server
npm install
npm run dev
