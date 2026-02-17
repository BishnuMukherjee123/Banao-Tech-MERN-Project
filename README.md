# SaaS Landing & Dashboard Project

A pixel-perfect SaaS landing page and functional dashboard built with **React (Vite) + Tailwind CSS**.

## 🚀 Setup Instructions

1.  **Clone the repo**
    ```bash
    git clone https://github.com/BishnuMukherjee123/Banao-Tech-MERN-Project.git
    cd saas-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run locally**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view the app.

## ✅ Features Checklist

| Feature | Status | details |
| :--- | :--- | :--- |
| **Landing Page** | ✅ Done | Pixel-perfect match to Figma. Responsive layout. |
| **Authentication** | ✅ Done | Fake Auth with `localStorage`. Protected routes. |
| **Secure DB** | ✅ Bonus | Client-side password hashing & "Users DB" simulation. |
| **Dashboard** | ✅ Done | Stats summary & recent activity feed. |
| **Users Page** | ✅ Done | API integration (`jsonplaceholder`). Search, Sort, Pagination. |
| **Settings** | ✅ Done | Theme toggle (Dark/Light) & Profile persistence. |

## 🛠️ Decisions & Tradeoffs

### 1. "No Backend" Authentication
*   **Decision**: strict "No Backend" requirement led to a client-side database simulation.
*   **Tradeoff**: Data lives in `localStorage`. Clearing browser cache wipes accounts.
*   **Solution**: Implemented SHA-256 Hashes in `AuthContext` to make it *feel* and *act* like a real secure app during the demo.

### 2. Dashboard Data
*   **Decision**: Used `jsonplaceholder` for the Users list.
*   **Tradeoff**: API is read-only.
*   **Solution**: "Add User" and "Save Profile" simulate delays and update local state/storage to mimic a real CRUD experience.

### 3. Styling
*   **Decision**: Tailwind CSS v4.
*   **Reason**: Speed of development and easy dark mode implementation (`dark:` classes).

## 📸 Screenshots

*(Add your screenshots here before submission)*
- Landing Page Hero
- Dashboard Light/Dark Mode
- User Management Screen

## 🎥 Demo

*(Link your screen recording here)*
