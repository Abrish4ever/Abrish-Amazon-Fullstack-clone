# 🛒 Full-Stack Amazon Clone

A full-stack **Amazon-style e-commerce application** built with **React (Vite)**, **Node.js**, **Express**, **Firebase**, and **Stripe**.
It features **user authentication**, **product listings**, **shopping cart**, and **secure payment integration** — all designed to simulate a real-world online store experience.

---

## 🚀 Tech Stack

**Frontend**

* ⚛️ React (Vite)
* 💨 Tailwind CSS
* 🔄 Axios
* 🔐 Firebase Authentication
* ⚡ Context API / Redux (for state management)
* 🧩 Various UI Plugins and Components

**Backend**

* 🧠 Node.js + Express
* 💾 Firebase Firestore / Realtime Database
* 💳 Stripe API for payment processing
* 🌐 RESTful API endpoints

**Deployment**

* 🔥 Render (Backend)
* 🌍 Netlify (Frontend)

---

## ✨ Features

### 🧑‍💻 Authentication

* Secure user signup, login, and logout via **Firebase Auth**
* Password reset and validation
* Persistent user sessions

### 🛍️ Product Management

* Dynamic product listings with images, descriptions, and prices
* Product detail pages
* Add/remove from cart functionality

### 🛒 Shopping Cart

* Real-time cart updates
* Quantity and price adjustments
* Saved cart per authenticated user

### 💳 Payment System

* **Stripe** payment integration (Test Mode)
* Checkout process with order confirmation
* Secure transaction handling

### 🧰 Additional Features

* Responsive design with **Tailwind CSS**
* Loading and error handling states
* Toast notifications
* Reusable components for scalability

---

## 📁 Project Structure

```
root/
│
├── client/                # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── server/                # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone (https://github.com/Abrish4ever/Abrish-Amazon-Fullstack-clone.git)
cd amazon-clone
```

### 2️⃣ Install dependencies

**For the client:**

```bash
cd client
npm install
```

**For the server:**

```bash
cd ../server
npm install
```

### 3️⃣ Run the project

**Start backend**

```bash
cd server
npm start
```

**Start frontend**

```bash
cd client
npm run dev
```

---

## 🧪 Testing Stripe Payments

Use the following **Stripe test card** credentials for testing:

```
Card Number: 4242 4242 4242 4242
Expiry Date: Any future date
CVC: Any 3 digits
```

---

## 🧑‍💼 Author

**Abrham**
💼 [Portfolio](https://abri-tech.com)
📧 [Email](abrhamdegarege21@example.com)
🐙 [GitHub](https://github.com/Abrish4ever)


