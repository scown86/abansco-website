"use client";

const navItems = [
  "New Arrivals",
  "Clothing",
  "Shoes",
  "Books",
  "Home Goods",
  "Accessories",
  "Kids",
  "Deals",
];

type CategoryNavProps = {
  onMenuOpen: () => void;
};

export default function CategoryNav({ onMenuOpen }: CategoryNavProps) {
  return (
    <nav className="bg-[#0b1736] text-white">
  <div className="mx-auto flex h-10 max-w-7xl items-center gap-6 overflow-x-auto px-4 text-sm font-medium">
        <button
          onClick={onMenuOpen}
          className="flex shrink-0 items-center gap-2 rounded-md px-2 py-1 hover:bg-white/10"
        >
          <span className="text-lg">☰</span>
          <span>All</span>
        </button>

        {navItems.map((item) => (
          <a
            key={item}
            href="/shop"
            className="whitespace-nowrap hover:text-blue-300"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}