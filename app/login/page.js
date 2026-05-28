export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-16 text-black dark:bg-[#111827] dark:text-white">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-[#1f2937]">
        <a href="/" className="mb-8 block text-center text-3xl font-black">
          Abansco
        </a>

        <h1 className="text-3xl font-black">Sign in</h1>

        <form className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:border-yellow-400 dark:border-gray-600 dark:bg-[#111827] dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:border-yellow-400 dark:border-gray-600 dark:bg-[#111827] dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-400 py-3 font-black text-black hover:bg-yellow-300"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          New customer?{" "}
          <a href="/register" className="font-bold text-yellow-500">
            Create account
          </a>
        </p>
      </div>
    </main>
  );
}