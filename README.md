# 🚀 Gaurav Singh Rawat - Portfolio 2026

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.181-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Serverless-000000?style=for-the-badge&logo=vercel&logoColor=white)

An interactive, high-performance 3D developer portfolio built with **Vue 3, Three.js, GSAP, Lenis, and Howler.js**. Designed with rich isometric claymorphism visual aesthetics, interactive CLI terminal, background ambient soundscapes, mechanical keyboard sound effects, and a secure serverless Telegram contact integration.

---

## ✨ Features

- 🎨 **Modern 3D Claymorphism Aesthetics**: Dynamic 3D canvas visuals powered by Three.js & GLTF assets.
- 💻 **Interactive CLI Terminal**: Terminal component inside the portfolio supporting interactive command navigation with keyboard sound feedback.
- 🎵 **Interactive Audio Experience**: Custom sound system powered by Howler.js featuring ambient background music and mechanical keyboard sound effects.
- 📬 **Direct Telegram Contact Form**: Built with Vercel Serverless Functions (`/api/contact`) to safely deliver messages directly to Telegram without exposing API keys.
- 🎓 **Academics & Experience**: Detailed breakdown of work history at **Athenura India** and academic journey at **MCA Joint Program (IIT Patna & IIIT Ranchi)**.
- 🏆 **Verified Certifications**: Quick access to verified credentials (e.g. IBM AI-Enabled Applications Certificate on Credly).
- 📜 **Downloadable Resume**: Direct resume download and contact mail triggers.
- 📱 **Fully Responsive & Smooth Scrolling**: Powered by Lenis smooth scrolling with scroll isolation for interactive components.

---

## 🛠️ Tech Stack

- **Frontend**: Vue 3 (Composition API), TypeScript, SCSS
- **3D & Animations**: Three.js, GSAP (ScrollTrigger & Ticker)
- **Audio Engine**: Howler.js
- **Smooth Scroll**: Lenis
- **Build Tool**: Vite
- **Serverless Integration**: Vercel API Routes + Telegram Bot API

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GauravRawat05/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Serverless Telegram Setup (Vercel)

The contact form sends messages securely to your Telegram account via a Vercel Serverless Function (`/api/contact.js`).

1. Deploy the project to **Vercel**.
2. In your Vercel Project Settings, add the following **Environment Variables**:
   - `TELEGRAM_BOT_TOKEN`: Token obtained from [@BotFather](https://t.me/BotFather).
   - `TELEGRAM_CHAT_ID`: Your Telegram Chat ID from [@userinfobot](https://t.me/userinfobot).

---

## 👨‍💻 Author

**Gaurav Singh Rawat**
- **Role**: Full Stack Developer Intern & Learning AI Agents / ML
- **Education**: MCA Joint Program (IIT Patna & IIIT Ranchi)
- **GitHub**: [@GauravRawat05](https://github.com/GauravRawat05)
- **Email**: [itsgauravrawat2005@gmail.com](mailto:itsgauravrawat2005@gmail.com)

---

⭐ *If you like this portfolio, feel free to give it a star!*
