"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "Clothing",
  "Shoes",
  "Books",
  "Home Goods",
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
    <main className="min-h-screen bg-[#f5f7fb] text-[#0f172a]">
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          <aside className="relative z-[101] h-full w-[340px] max-w-[85vw] overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-[#0f172a] px-5 py-5 text-white">
              <div>
                <p className="text-sm text-gray-300">Welcome to</p>
                <h2 className="text-xl font-black">ABANSCO</h2>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-white/30 px-3 py-1 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="border-b p-5">
              <h3 className="mb-4 text-lg font-black">Shop</h3>
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
              <h3 className="mb-4 text-lg font-black">Account</h3>
              <div className="space-y-3 text-sm font-medium">
                <a href="/login" className="block">Sign in</a>
                <a href="/register" className="block">Create account</a>
                <a href="/cart" className="block">Cart</a>
              </div>
            </div>

            <div className="p-5">
              <h3 className="mb-4 text-lg font-black">Help</h3>
              <div className="space-y-3 text-sm font-medium">
                <a href="/contact" className="block">Contact us</a>
                <a href="/shipping" className="block">Shipping</a>
                <a href="/returns" className="block">Returns</a>
                <a href="/about" className="block">About ABANSCO</a>
              </div>
            </div>
          </aside>
        </div>
      )}

      <Header />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid items-center gap-10 rounded-[2rem] bg-[#0f172a] p-8 text-white shadow-xl md:grid-cols-2 md:p-14">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">
              Australian family-owned business
            </p>

            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Quality products. Great value. Friendly service.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              ABANSCO is building a modern Australian online store for everyday
              products, useful finds, and trusted value.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/shop"
                className="rounded-xl bg-white px-7 py-4 text-center font-black text-[#0f172a] hover:bg-gray-200"
              >
                Start Shopping
              </a>

              <a
                href="/about"
                className="rounded-xl border border-white/30 px-7 py-4 text-center font-black text-white hover:bg-white/10"
              >
                About ABANSCO
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Image
              src="/logos/ABANSCO-white.png"
              alt="ABANSCO"
              width={500}
              height={180}
              className="mx-auto h-auto w-full max-w-md"
              priority
            />

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white/10 p-4">
                Family-owned
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                Australian business
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                Everyday value
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                Friendly service
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Browse
              </p>
              <h2 className="mt-2 text-3xl font-black">Shop by category</h2>
            </div>

            <a href="/shop" className="hidden text-sm font-bold text-blue-600 sm:block">
              View all
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category}
                href="/shop"
                className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 h-28 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100" />
                <h3 className="text-xl font-black">{category}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Browse {category.toLowerCase()} products.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Featured
              </p>
              <h2 className="mt-2 text-3xl font-black">Featured products</h2>
            </div>

            <a href="/shop" className="hidden text-sm font-bold text-blue-600 sm:block">
              View products
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {products.map((product) => (
              <a
                key={product}
                href="/shop"
                className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-52 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100" />
                <h3 className="mt-4 text-lg font-black">{product}</h3>
                <p className="mt-1 text-sm text-gray-500">Sold by ABANSCO</p>
                <p className="mt-3 text-2xl font-black">$29.00</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}