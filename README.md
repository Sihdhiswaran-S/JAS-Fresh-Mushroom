<<<<<<< HEAD

# JAS-Fresh-Mushroom

# JAS Fresh Mushroom, founded in 2026 in Bengaluru, is a sustainable agro-farm producing premium organic oyster mushrooms. Using agricultural waste as substrates, it offers fresh produce, spawn, and grow kits—promoting eco-friendly, chemical-free farming and healthy urban living.

# 🍄 JAS Fresh Mushroom

A professional, full-stack web application for **JAS Fresh Mushroom**, a Bengaluru-based sustainable agro-farm specializing in organic oyster mushrooms, spawn, and grow kits.

![JAS Fresh Mushroom](https://res.cloudinary.com/dqcznvpuw/image/upload/v1777706003/IMG_20260417_151156_f8iudu.jpg)

---

## 📖 Overview

JAS Fresh Mushroom is dedicated to promoting sustainable agriculture and providing high-quality, chemical-free mushrooms to the community. This platform serves as a digital storefront and educational resource, mapping out the nutritional benefits, cultivation processes, and diverse product offerings of the farm.

### Key Features

- **Responsive Design**: Mobile-first approach using Styled Components.
- **Dynamic SEO**: Per-page meta tags and SEO management via `react-helmet-async`.
- **Contact System**: Secure contact form with server-side validation and automated email notifications.
- **Information Hub**: Detailed sections for nutritional benefits, cultivation workflows, and product catalogs.
- **Security**: Backend protected by Helmet.js, Rate Limiting, and CORS policies.

---

## 🛠️ Technology Stack

### Frontend

- **React (Vite)**
- **React Router Dom** (v7)
- **Styled Components** (CSS-in-JS)
- **React Helmet Async** (SEO Management)

### Backend

- **Node.js & Express**
- **Nodemailer** (Email Services)
- **Express Validator** (Input Sanitization)
- **Express Rate Limit** (Security)
- **Helmet.js** (Security Headers)

---

## 📂 Project Structure

```text
mushroomFarming/
├── client/             # React + Vite Frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Route pages (Home, About, Products, etc.)
│   │   ├── styles/     # Global and component-specific styles
│   │   └── App.jsx     # Main application routing
│   └── package.json
├── server/             # Node.js + Express Backend
│   ├── routes/         # API Route handlers
│   ├── utils/          # Helper functions (Mailer, etc.)
│   ├── index.js        # Server entry point
│   └── package.json
└── README.md           # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### 1. Clone the repository

```bash
git clone <repository-url>
cd mushroomFarming
```

### 2. Setup the Backend

1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   _Required variables:_ `PORT`, `EMAIL_USER`, `EMAIL_PASS`, `ALLOWED_ORIGIN`.
4. Start the server (Development mode):
   ```bash
   npm run dev
   ```

### 3. Setup the Frontend

1. Navigate to the client folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## 🔒 Security Features

- **Rate Limiting**: Limits contact form submissions to prevent spam.
- **Input Validation**: Sanitizes all user-provided data via `express-validator`.
- **CORS**: Restricts API access only to the recognized frontend origin.
- **Security Headers**: Uses `helmet` to set various HTTP headers for enhanced security.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

> > > > > > > 496bd54 (I build complete website for this mushroom farming)
