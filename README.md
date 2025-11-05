```
# Audiophile E-commerce Web App

Premium audio gear. Built with Next.js & Convex backend.

## 🚀 Project Overview

Audiophile is a full-stack e-commerce application showcasing premium audio equipment — headphones, speakers, earphones — with a shopping cart, checkout flow, and backend order handling via Convex.
The front-end is built using Next.js (App Router), Tailwind CSS, and modern React conventions. The backend uses Convex to store order data, send confirmation emails, and manage user sessions.

## 🧰 Tech Stack

- Framework**: Next.js (App Directory)
- Styling**: Tailwind CSS
- State Management**: Zustand
- Backend / Data**: ConvexReactClient (Convex as backend)
- Email & Notifications**: [Nodemailer] (for checkout emails)
- Utilities**: TypeScript, JSON data import, dynamic routing

## 📁 Key Features

- Responsive site layout (mobile-first)
- Product catalog by category & slug (URL-based routing)
- Shopping cart with quantity adjustments
- Checkout page with billing & payment details
- Order confirmation email sent via backend
- Persistent cart data

## 🧩 Folder Structure (excerpt)
```

```
/app
layout.tsx — Root layout and provider wrappers
page.tsx — Home page
/category
[category]/page.tsx — Category listing
/product
[slug]/page.tsx — Product detail page
/components
Navbar.tsx — Navigation bar
BackBtn.tsx — Back button component
ImageGallery.tsx — Product gallery
ButtonOne.tsx — Custom button component
/store
useStore.ts — Zustand store hooks
/utils
email.ts — Email send function via Nodemailer & Convex

```

## 🛠 Installation & Setup

```bash
git clone https://github.com/Dotjos/audiophile.git
cd audiophile
npm install
```

Create a `.env.local` file in the project root and add the following environment variables (replace placeholders with your values):

```env
NEXT_PUBLIC_CONVEX_URL=https://your-convex-project.convex.cloud
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=youremail@gmail.com
SMTP_PASS=yourAppPassword
```

Start the development server:

```bash
npm run dev
```

For production build:

```bash
npm run build
npm run start
```

## 🔧 Deployment

- Front-end: Can be deployed on Vercel (Next.js recommended)
- Backend: Convex functions / actions must be deployed via `npx convex deploy`
- Ensure `NEXT_PUBLIC_CONVEX_URL` is configured in your Vercel project’s environment settings
- Make sure the backend email environment variables (SMTP credentials) are properly set before deploying checkout functionality

## 📬 Checkout & Email Flow

1. User adds products to cart → cartTotal calculated
2. On checkout, the backend action (`sendCartEmail`) is invoked via Convex
3. Backend reads environment variables and uses Nodemailer to send order confirmation to user
4. The UI shows a confirmation page/modal

## 📝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
Before submitting, ensure you follow project styling (Tailwind), code conventions, and run local testing.

## 🙏 Acknowledgments

- Built based on the Audiophile UI design kit / challenge
- Thanks to Convex for backend tooling
- Thanks to Tailwind Labs for styling robustness

---
