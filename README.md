# Digi Labs — Modern Company Website & Backend System

A professional, high-performance, and visually stunning corporate website for **Digi Labs** built using modern web development practices. This repository features a fully integrated **React + Vite** frontend styled with Tailwind CSS, backed by a robust **Node.js + Express** server that stores contact form requests in a **MongoDB** database.

---

## 🏗️ Project Architecture

The project is structured as a monorepo with separate `frontend` and `backend` services to ensure clean separation of concerns.

```mermaid
graph TD
    subgraph Frontend [React App - Vite & Tailwind]
        CF[ContactForm.jsx] -->|Axios POST| API[contact.js API Client]
    end

    subgraph Backend [Express API Server]
        API -->|Request| Route[/api/contact Route]
        Route --> Ctrl[contactController.js]
        Ctrl -->|Create Mongoose Model| Model[contact.model.js]
        Ctrl -->|SMTP sendMail| Nodemailer[Mailer.js Helper]
    end

    subgraph Database & Services
        Model -->|Persist| MongoDB[(MongoDB local/atlas)]
        Nodemailer -->|Deliver| Gmail[Gmail SMTP Service]
    end
```

---

## ✨ Features

- **Dynamic Frontend Pages**: Beautiful layouts for Home, About, Services, and Contact pages featuring smooth animations powered by Framer Motion.
- **Robust Contact Form**:
  - Full client-side and server-side schema validation.
  - Interactive **Math CAPTCHA** verification to prevent automated spam.
  - Dynamic user status feedback (Loading, Success, Error).
  - Integration with **Axios** to send data asynchronously to the backend.
- **Backend API Server**:
  - Structured Express routing with custom middleware.
  - Connection to **MongoDB** using Mongoose ORM.
  - Non-blocking email notifications to both the admin and the user (auto-reply) via Nodemailer.
  - Fallback error-handling: If SMTP/email dispatch fails, the form submission is still saved to the database and successfully resolved for the client.

---

## 📁 Repository Structure

```text
├── backend/
│   ├── config/             # Database connection configuration (Mongoose)
│   ├── controllers/        # Request handling logic (contactController.js)
│   ├── lib/                # Shared utilities and libraries (Mailer.js)
│   ├── models/             # Database schemas (contact.model.js)
│   ├── router/             # Express routes registry (index.js)
│   ├── index.js            # Express server entrypoint
│   ├── .env                # Backend environment configuration
│   └── package.json        # Backend dependencies & scripts
│
├── frontend/
│   ├── src/
│   │   ├── apis/           # API clients (contact.js with Axios)
│   │   ├── components/     # UI Component libraries (contact/, common/, core/)
│   │   ├── pages/          # Page views (Home, About, Services, Contact)
│   │   └── main.jsx        # React application entrypoint
│   ├── vite.config.js      # Vite build configuration
│   ├── package.json        # Frontend dependencies & scripts
│   └── README.md           # Frontend-specific documentation
│
└── README.md               # Main repository documentation
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **MongoDB** (running locally on port `27017` or a MongoDB Atlas URI)

---

### Step 1: Backend Setup

1. Open your terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the backend dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` configuration file. You can copy the template:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:
   ```ini
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/assignment   # Your MongoDB URI
   CLIENT_URL=http://localhost:5173                 # Allowed CORS Origin
   
   # Nodemailer Configurations (Gmail App Password needed)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   MAIL_HOST=smtp.gmail.com
   ```

5. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend should start and log:
   `Server is connected with Database successfully.`
   `Server is listening to the PORT 5000`

---

### Step 2: Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend should run locally at `http://localhost:5173`.

---

## 🔌 API Documentation

### 1. Submit Contact Form
* **URL**: `/api/contact`
* **Method**: `POST`
* **Content-Type**: `application/json`
* **Request Payload**:
  ```json
  {
    "fullName": "Rohit Kumar",
    "email": "rohit@example.com",
    "phone": "+91 9876543210",
    "subject": "AI Integration",
    "message": "Hi, we are looking to integrate AI agents into our workflow.",
    "captchaAnswer": 12,
    "captchaExpected": 12
  }
  ```
* **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Thank you for submitting the form. We'll be in touch soon!",
    "data": {
      "id": "64b0f9f3c75d2f349c71a39f"
    }
  }
  ```
* **Error Response (400 Bad Request)**:
  ```json
  {
    "success": false,
    "message": "CAPTCHA answer is incorrect. Please try again."
  }
  ```

---

## 🗄️ Database Schema (MongoDB / Mongoose)

The contact requests are saved under the `contacts` collection with the following Mongoose model properties:

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `fullName` | `String` | Yes (Max 100 chars) | Submitter's name |
| `email` | `String` | Yes | Submitter's email (Validated using regex) |
| `phone` | `String` | No (Default "") | Optional phone number |
| `subject` | `String` | Yes (Max 200 chars) | Category of enquiry |
| `message` | `String` | Yes (Max 5000 chars)| The core query message |
| `status` | `String` | Yes (Default "new") | Internal status: `new`, `read`, or `replied` |
| `createdAt`| `Date` | Auto | Timestamp when the form was submitted |
| `updatedAt`| `Date` | Auto | Timestamp of the last update |
