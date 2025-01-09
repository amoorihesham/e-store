# 🛒 Electronics E-Commerce Web App

An advanced e-commerce platform for purchasing electronics, built using modern web technologies like Next.js 15, TypeScript, and Stripe for payments. The app features a seamless user experience with efficient state management and a beautiful UI.

---

## 🚀 Features

- **User Authentication**: Secure user management using Clerk.
- **Dynamic UI**: Built with ShadCN UI and styled with Tailwind CSS.
- **Content Management**: Sanity.io for managing product data and content.
- **State Management**: Zustand for efficient state handling.
- **Payment Integration**: Stripe for secure and fast payment processing.
- **Responsive Design**: Optimized for all devices, ensuring a great user experience.
- **Developer Friendly**: TypeScript for strong typing and robust codebase.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) with Server and Client Components
- **Styling**: [ShadCN UI](https://ui.shadcn.dev/) and [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Content Management**: [Sanity.io](https://www.sanity.io/)
- **Payments**: [Stripe](https://stripe.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

1. Node.js (v18+ recommended)
2. Yarn or npm
3. A Sanity.io account
4. A Stripe account
5. A Clerk account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/electronics-ecommerce.git
   cd electronics-ecommerce
   ```
2. Install Dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create .env File:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
   ```
4. Start Dev Server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Notes:

- Replace `Amr Hesham` and `amrheshammacc@gmail.com` with the actual details.
- Customize the `.env` variables and repository link based on your project setup.
