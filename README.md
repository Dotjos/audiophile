# 🎧 Audiophile E-Commerce Web App

A premium, fully responsive **audio e-commerce web application** built with **Next.js**, **TypeScript**, and **Convex backend**.  
The app provides a smooth shopping experience for audio gear lovers — including headphones, speakers, and earphones — with beautiful UI, real-time cart management, and secure checkout logic.

---

## ✨ Features

✅ **Dynamic Product Catalog** – Fetches product data (images, price, description, and features) from the static data file.  
✅ **Responsive Design** – Fully optimized for mobile, tablet, and desktop.  
✅ **Category Filtering** – Browse by category: headphones, speakers, or earphones.  
✅ **Persistent Cart State** – Users never lose their cart on refresh.  
✅ **Next.js Routing** – Fast navigation powered by Next.js file-based routing.  
✅ **Reusable UI Components** – Built with TailwindCSS and modular components for scalability.  
✅ **Secure Checkout Flow** – Handles summary, total, and order confirmation.

---

## 🛠️ Tech Stack

**Frontend:**

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/) for styling

**Backend:**

- [Convex](https://convex.dev/)

**Other Tools:**

- ESLint + Prettier for code quality
- Vercel for hosting
- GitHub for version control

---

## 🧩 Project Structure

```
📦 audiophile-web-app
┣ 📂 app
┃ ┣ 📜 layout.tsx # Root layout
┃ ┣ 📜 page.tsx # Home page
┃ ┣ 📂 products
┃ ┃ ┗ 📜 [slug]/page.tsx # Dynamic product detail pages
┣ 📂 components
┃ ┣ 📜 Navbar.tsx
┃ ┣ 📜 Footer.tsx
┃ ┣ 📜 Button.tsx
┃ ┣ 📜 ProductCard.tsx
┃ ┣ 📜 CategoryCard.tsx
┣ 📂 convex
┃ ┣ 📜 schema.ts # Convex schema
┃ ┗ 📜 functions.ts # Convex server functions
┣ 📂 lib
┃ ┗ 📜 utils.ts # Helper functions
┣ 📜 tailwind.config.ts
┣ 📜 tsconfig.json
┣ 📜 package.json
┗ 📜 README.md

```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/audiophile-web-app.git
cd audiophile-web-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Convex Backend

1. Install Convex CLI:

   ```bash
   npm install -g convex
   ```

2. Log in and initialize Convex:

   ```bash
   npx convex dev
   ```

3. Create your Convex project:

   ```bash
   npx convex init
   ```

4. Update your Convex functions in the `convex/` directory (e.g. `getProducts`, `addToCart`, `clearCart`, etc.)

### 4. Run the Development Server

```bash
npm run dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deployment

This project is optimized for **Vercel** deployment.

1. Push your project to GitHub:

   ```bash
   git add .
   git commit -m "initial commit"
   git push origin main
   ```

2. Visit [Vercel.com](https://vercel.com), import your repo, and deploy.
3. Add your Convex environment variables (`CONVEX_DEPLOYMENT` and `CONVEX_URL`) to Vercel.
4. Convex functions will automatically sync with your deployed app.

---

## 📦 Example Convex Schema

```ts
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  products: defineTable({
    name: "string",
    category: "string",
    price: "number",
    description: "string",
    image: "string",
    includes: "json",
  }),
  cart: defineTable({
    productId: "string",
    quantity: "number",
  }),
});
```

---

## 🧠 Future Enhancements

- 🔐 Add authentication (Convex Auth or Clerk)
- 💳 Integrate Stripe for payments
- 🧾 Admin dashboard for product management
- 🌐 Multi-language support
- 📈 Real-time inventory tracking

---

## 👨‍💻 Author

**Oladotun Joseph**
Frontend Developer — MERN | TypeScript | Next.js | Convex
📧 [Your Email Here]
🌐 [GitHub](https://github.com/YOUR_GITHUB_USERNAME)

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

> “The best interfaces are the ones you don’t notice.” — Jared Spool

```

---

Would you like me to tailor this version specifically for your **Audiophile project folder structure** (like your actual components and page names in your repo)?
If you share your project tree or repo link, I’ll make it a perfect one-to-one fit.
```
