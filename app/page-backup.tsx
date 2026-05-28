"use client";

import { useState } from "react";

const categories = [
  "Clothing",
  "Shoes",
  "Books",
  "Home",
  "Accessories",
  "Kids",
  "Beauty",
  "Deals",
];

const products = [
  "Classic Hoodie",
  "Casual Sneakers",
  "Travel Bag",
  "Notebook",
  "Home Storage",
  "Gift Box",
  "Kids Outfit",
  "Everyday Shoes",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 text-black dark:bg-[#111827] dark:text-white">
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/70"
          />

          <aside className="relative z-[101] h-full w-[340px] max-w-[85vw] overflow-y-auto bg-white text-black shadow-2xl">
            <div className="flex items-center justify-between bg-[#131921] px-5 py-4 text-white">
              <div>
                <p className="text-sm text-gray-300">Hello</p>
                <h2 className="text-xl font-black">Browse Abansco</h2>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-white/30 px-3 py-1 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="border-b p-5">
              <h3 className="mb-4 text-lg font-black">Trending</h3>
              <div className="space-y-3 text-sm font-medium">
                <a href="/shop" className="block">Best Sellers</a>
                <a href="/shop" className="block">New Arrivals</a>
                <a href="/shop" className="block">Deals</a>
              </div>
            </div>

            <div className="border-b p-5">
              <h3 className="mb-4 text-lg font-black">Shop by department</h3>
              <div className="space-y-4 text-sm font-medium">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="/shop"
                    className="flex items-center justify-between"
                  >
                    <span>{category}</span>
                    <span className="text-xl text-gray-400">›</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-b p-5">
              <h3 className="mb-4 text-lg font-black">Your Account</h3>

              <div className="space-y-3 text-sm font-medium">
                <a href="/account" className="block">Account Home</a>
                <a href="/login" className="block">Sign in</a>
                <a href="/register" className="block">Create account</a>
                <a href="/orders" className="block">Order history</a>
                <a href="/wishlist" className="block">Wishlist</a>
                <a href="/cart" className="block">Cart</a>
              </div>
            </div>

            <div className="p-5">
              <h3 className="mb-4 text-lg font-black">Help & Settings</h3>

              <div className="space-y-3 text-sm font-medium">
                <a href="/contact" className="block">Customer Service</a>
                <a href="/returns" className="block">Returns</a>
                <a href="/shipping" className="block">Shipping</a>
                <a href="/about" className="block">About Abansco</a>
              </div>
            </div>
          </aside>
        </div>
      )}

      <header className="sticky top-0 z-50 shadow-md">
        <div className="bg-[#131921] text-white">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-md border border-white/30 px-3 py-2 font-black hover:border-white"
            >
              ☰
            </button>

            <a href="/" className="text-3xl font-black">
              Abansco
            </a>

            <div className="flex flex-1 overflow-hidden rounded-lg border-2 border-yellow-400 bg-white">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white px-4 py-3 text-black outline-none"
              />

              <button className="bg-yellow-400 px-6 font-bold text-black hover:bg-yellow-300">
                Search
              </button>
            </div>

            <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
  <a href="/login">
    <span className="block text-xs font-medium text-gray-300">
      Hello, sign in
    </span>

    <span>Account</span>
  </a>

  <a href="/orders">
    <span className="block text-xs font-medium text-gray-300">
      Returns
    </span>

    <span>& Orders</span>
  </a>

  <a href="/cart" className="text-lg">
    Cart
  </a>
</nav>
          </div>
        </div>

        <div className="bg-[#232f3e] text-white">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-3 text-sm font-semibold">
            {categories.map((category) => (
              <a key={category} href="/shop" className="whitespace-nowrap">
                {category}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-3xl bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 p-10 text-black shadow-lg md:p-16">
          <p className="text-sm font-black uppercase tracking-[0.25em]">
            Family-run marketplace
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Everyday finds for everyone.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium">
            Clothing, shoes, books, home goods, accessories and useful everyday
            products from a growing family business.
          </p>

          <a
            href="/shop"
            className="mt-8 inline-block rounded-xl bg-black px-7 py-3 font-black text-white hover:bg-neutral-800"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-[#1f2937]">
          <h2 className="mb-6 text-3xl font-black">Shop by category</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category}
                href="/shop"
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:shadow-md dark:border-gray-700 dark:bg-[#111827]"
              >
                <div className="mb-4 h-28 rounded-xl bg-gray-200 dark:bg-gray-700" />
                <h3 className="text-xl font-black">{category}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Browse {category.toLowerCase()} products.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-[#1f2937]">
          <h2 className="mb-6 text-3xl font-black">Featured products</h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {products.map((product) => (
              <a
                key={product}
                href="/shop"
                className="rounded-2xl border border-gray-200 p-4 transition hover:shadow-md dark:border-gray-700"
              >
                <div className="h-52 rounded-xl bg-gray-200 dark:bg-gray-700" />
                <h3 className="mt-4 text-lg font-black">{product}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Sold by Abansco
                </p>
                <p className="mt-3 text-2xl font-black">$29.00</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}