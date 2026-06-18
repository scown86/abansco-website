type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LoginModal({ open, onClose }: LoginModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close sign in window"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <div className="relative z-[201] w-full max-w-md rounded-3xl bg-white p-8 text-[#0f172a] shadow-2xl">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg px-3 py-2 text-2xl hover:bg-gray-100"
        >
          ×
        </button>

        <h2 className="mb-2 text-center text-3xl font-black">ABANSCO</h2>

        <h3 className="mt-8 text-3xl font-black">Sign in</h3>

        <form className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#0f172a] px-6 py-4 font-black text-white hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          New customer?{" "}
          <a href="/register" className="font-bold text-blue-600">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}