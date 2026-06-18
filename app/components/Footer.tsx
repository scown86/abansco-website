import Image from "next/image";

const footerSections = [
  {
    heading: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "New Arrivals", href: "/shop" },
      { label: "Deals", href: "/shop" },
      { label: "Gift Ideas", href: "/shop" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "ABANSCO",
    links: [
      { label: "About Us", href: "/about" },
      { label: "My Account", href: "/account" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div className="lg:border-r lg:border-white/10 lg:pr-10">
            <Image
  src="/logos/ABANSCO-white.png"
  alt="ABANSCO"
  width={360}
  height={110}
  className="h-auto w-[300px] lg:-mt-3"
  style={{ height: "auto" }}
  priority
/>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-300">
              Australian family-owned business focused on quality products,
              great value and friendly service.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.heading} className="pt-2">
              <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em]">
                {section.heading}
              </h3>

              <div className="space-y-3 text-sm text-gray-300">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block transition hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ABANSCO. All rights reserved.</p>
          <p>Australian Family-Owned Business · Powered by Passion</p>
        </div>
      </div>
    </footer>
  );
}