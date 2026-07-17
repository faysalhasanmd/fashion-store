<div align="center">

# 🛍️ Oxivos — Fashion E-Commerce Store

A fully responsive fashion store website built with **Next.js**. It has a smart product dashboard, live search and filters, a working shopping cart, and smooth scroll animations.

[**🔗 Live Demo**](https://fashion-store-three-psi.vercel.app/) &nbsp;•&nbsp; [**💻 GitHub Repo**](https://github.com/faysalhasanmd/fashion-store)

</div>

---

## ✨ About This Project

Oxivos is a modern online fashion store made from scratch. It shows real e-commerce features like browsing products, searching, filtering by category, sorting by price, and adding items to a cart. The site also has smooth animations, loading states, and clean design on both mobile and desktop.

## 🚀 Main Features

- **Animated Hero Section** — product images change automatically with smooth transitions
- **Product Dashboard** — a sidebar with:
  - Live search by product name or category
  - Sort by price (low to high / high to low)
  - Category filter with item count for each category
  - "Clear all" button to reset filters
- **Smooth Scroll Animations** — using AOS, sections and cards fade/zoom in nicely as you scroll
- **Smooth Page Scrolling** — using Lenis for a soft, modern scroll feel
- **Shopping Cart** — add, remove, and update item quantity, with clean UI feedback
- **Nice Alerts** — SweetAlert2 popups for actions like removing an item or checkout
- **Loading & Empty States** — skeleton loaders while content loads, and friendly empty-cart / no-results screens
- **Light / Dark Mode** — theme toggle for switching between light and dark look
- **Pagination** — clean page-by-page browsing for the product list
- **Fully Responsive** — works well on mobile, tablet, and desktop
- **Homepage Sections** — category showcase, featured products, sale banner, and newsletter sign-up

## 🛠️ Built With

| Type              | Tool                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Framework         | [Next.js 16](https://nextjs.org/) (App Router)                                                  |
| UI Library        | [React 19](https://react.dev/)                                                                  |
| Styling           | [Tailwind CSS 4](https://tailwindcss.com/)                                                      |
| Icons             | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| Scroll Animations | [AOS](https://michalsnik.github.io/aos/)                                                        |
| Smooth Scrolling  | [Lenis](https://lenis.darkroom.engineering/)                                                    |
| Popups & Alerts   | [SweetAlert2](https://sweetalert2.github.io/)                                                   |
| State Management  | React Context API                                                                               |
| Hosting           | [Vercel](https://vercel.com/)                                                                   |

```

## 🧩 Project Structure

```

fashion-store/
├── app/
│ ├── page.js # Home page
│ ├── not-found.jsx # Custom 404 page
│ ├── products/ # Product list + dashboard
│ ├── cart/ # Cart page
│ └── layout.js # Main layout
├── components/
│ ├── product-details/ # Product detail page components
│ ├── EmptyState.jsx # Empty-cart / no-results screen
│ ├── Footer.jsx
│ ├── Hero.jsx
│ ├── Loader.jsx # Loading spinner / skeleton
│ ├── Navbar.jsx
│ ├── NewArrivals.jsx
│ ├── Newsletter.jsx
│ ├── Pagination.jsx # Page-by-page product navigation
│ ├── ProductCard.jsx
│ ├── ProductCardSkeleton.jsx # Skeleton loader for product cards
│ ├── ProductDashboard.jsx # Search, sort, and category filter
│ ├── SaleBanner.jsx
│ ├── SmoothScroll.jsx # Lenis smooth-scroll wrapper
│ ├── ThemeToggle.jsx # Light / dark mode switch
│ └── TrendyCollection.jsx
├── context/
│ └── CartContext.jsx # Cart data and logic
├── data/
│ └── products.js
└── public/

````

## ⚙️ How to Run This Project

Clone the project and install the packages:

```bash
git clone https://github.com/faysalhasanmd/fashion-store.git
cd fashion-store
npm install
````

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Live Site

This project is hosted on **Vercel**:

🔗 [fashion-store-three-psi.vercel.app](https://fashion-store-three-psi.vercel.app/)

## 🗺️ Future Plans

- [ ] Better product detail page (image gallery, related products)
- [ ] Wishlist feature
- [ ] User login and order history
- [ ] Connect to a real backend/database

## 👤 Author

**Faysal Hasan**
Full Stack (MERN) Developer

- GitHub: [@faysalhasanmd](https://github.com/faysalhasanmd)
