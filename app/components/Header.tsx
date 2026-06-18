"use client";

import Image from "next/image";
import { useState } from "react";
import CategoryNav from "./CategoryNav";
import SideMenu from "./SideMenu";
import LoginModal from "./LoginModal";

const navItems = [
  "All",
  "New Arrivals",
  "Clothing",
  "Shoes",
  "Books",
  "Home Goods",
  "Accessories",
  "Kids",
  "Deals",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

<LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-5">
          <a href="/" className="flex shrink-0 items-center">
            <Image
              src="/logos/ABANSCO-black.png"
              alt="ABANSCO"
              width={350}
              height={100}
              className="h-auto w-[230px] lg:w-[290px]"
              priority
            />
          </a>

          <div className="hidden flex-1 overflow-hidden rounded-xl border border-gray-300 bg-white md:flex">
            <input
              type="text"
              placeholder="Search ABANSCO..."
              className="w-full px-4 py-3 text-[#0f172a] outline-none"
            />

            <button className="bg-[#0f172a] px-7 font-bold text-white hover:bg-blue-700">
              Search
            </button>
          </div>

          <div className="ml-auto flex items-center gap-4 text-sm font-bold">
            <button
  type="button"
  onClick={() => setLoginOpen(true)}
  className="hidden hover:text-blue-600 sm:block"
>
  Sign in
</button>

            <a
              href="/cart"
              className="rounded-xl bg-[#0f172a] px-5 py-3 text-white hover:bg-blue-700"
            >
              Cart
            </a>
          </div>
        </div>

        <div className="mx-auto px-4 pb-4 md:hidden">
          <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white">
            <input
              type="text"
              placeholder="Search ABANSCO..."
              className="w-full px-4 py-3 text-[#0f172a] outline-none"
            />

            <button className="bg-[#0f172a] px-5 font-bold text-white">
              Search
            </button>
          </div>
        </div>

        <CategoryNav onMenuOpen={() => setMenuOpen(true)} />
      </header>

    </>
  );
}