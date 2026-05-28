export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <div className="mb-6">
          <span className="text-yellow-400 tracking-[0.3em] uppercase text-sm font-semibold">
            Family Run Marketplace
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 bg-clip-text text-transparent">
          ABANSCO
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Our new website is coming soon.
        </p>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          We are building a modern online marketplace for clothing,
          shoes, books, accessories, home goods, technology,
          hobbies and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">

          <a
            href="mailto:contact@abansco.com"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition duration-300"
          >
            Contact Us
          </a>

          <a
            href="https://abansco.com"
            className="border border-gray-600 hover:border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl transition duration-300"
          >
            Launching Soon
          </a>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            Clothing
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            Technology
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            Home Goods
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            Accessories
          </div>

        </div>

        <p className="mt-14 text-gray-500 text-sm">
          Powered by Passion
        </p>

      </div>
    </main>
  );
}