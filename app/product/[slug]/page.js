export default async function ProductPage({ params }) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 dark:bg-[#111827] dark:text-white">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-white p-8 shadow-lg dark:bg-[#1f2937] md:grid-cols-2">
        <div className="h-[500px] rounded-2xl bg-gray-200 dark:bg-gray-700" />

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-yellow-500">
            Abansco
          </p>

          <h1 className="mt-3 text-4xl font-black capitalize">
            {slug.replace(/-/g, " ")}
          </h1>

          <p className="mt-6 text-3xl font-black">$29.00</p>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Product description placeholder. Later this will come from your
            database.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-black hover:bg-yellow-300">
              Add to Cart
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 font-black hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}