import Image from "next/image";

type SideMenuProps = {
  open: boolean;
  onClose: () => void;
  onLoginOpen: () => void;
  onSignupOpen: () => void;
};

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

export default function SideMenu({
  open,
  onClose,
  onLoginOpen,
  onSignupOpen,
}: SideMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <aside className="relative z-[101] h-full w-[380px] max-w-[90vw] overflow-y-auto bg-white text-[#0f172a] shadow-2xl">
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-lg border border-white/20 px-3 py-2 text-xl text-white hover:bg-white/10"
        >
          ×
        </button>

        <div className="bg-[#0f172a] px-6 py-8 text-white">
          <Image
            src="/logos/ABANSCO-white.png"
            alt="ABANSCO"
            width={420}
            height={130}
            className="h-auto w-full max-w-[310px]"
            style={{ height: "auto" }}
            priority
          />

          <p className="mt-5 max-w-[320px] text-sm leading-relaxed text-gray-300">
            Quality products. Great value. Friendly service.
          </p>
        </div>

        <div className="border-b border-gray-200 p-6">
          <h3 className="mb-5 text-xl font-black">Shop</h3>

          <div className="space-y-2 text-base font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href="/shop"
                className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-50 hover:text-blue-600"
              >
                <span>{item}</span>
                <span className="text-xl text-gray-400">›</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-b border-gray-200 p-6">
          <h3 className="mb-5 text-xl font-black">Account</h3>

          <div className="space-y-2 text-base font-medium">
<button
  type="button"
  onClick={() => {
    onClose();
    onLoginOpen();
  }}
  className="block w-full rounded-xl px-3 py-3 text-left hover:bg-gray-50 hover:text-blue-600"
>
  Sign in
</button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onSignupOpen();
              }}
              className="block w-full rounded-xl px-3 py-3 text-left hover:bg-gray-50 hover:text-blue-600"
            >
              Create account
            </button>

            <a
              href="/cart"
              className="block rounded-xl px-3 py-3 hover:bg-gray-50 hover:text-blue-600"
            >
              Cart
            </a>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-5 text-xl font-black">Help</h3>

          <div className="space-y-2 text-base font-medium">
            <a
              href="/contact"
              className="block rounded-xl px-3 py-3 hover:bg-gray-50 hover:text-blue-600"
            >
              Contact us
            </a>

            <a
              href="/shipping"
              className="block rounded-xl px-3 py-3 hover:bg-gray-50 hover:text-blue-600"
            >
              Shipping
            </a>

            <a
              href="/returns"
              className="block rounded-xl px-3 py-3 hover:bg-gray-50 hover:text-blue-600"
            >
              Returns
            </a>

            <a
              href="/about"
              className="block rounded-xl px-3 py-3 hover:bg-gray-50 hover:text-blue-600"
            >
              About ABANSCO
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}