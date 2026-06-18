import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_45%)]" />

      <div className="relative max-w-4xl text-center">
        <Image
          src="/logos/ABANSCO-white.png"
          alt="ABANSCO"
          width={650}
          height={180}
          className="mx-auto mb-12 w-[320px] sm:w-[460px] md:w-[620px]"
          priority
        />

        <div className="mb-6">
          <span className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-blue-300">
            Australian Family-Owned Business
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Coming Soon
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Our new online store is currently under development.
        </p>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          ABANSCO is focused on quality products, great value, and friendly
          customer service as we continue building our Australian family-owned
          business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="mailto:info@abansco.com"
            className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-gray-200 transition"
          >
            Contact Us
          </a>

          <span className="border border-white/15 bg-white/5 px-8 py-4 rounded-2xl text-gray-300">
            Launching Soon
          </span>
        </div>

        <p className="text-sm text-gray-500">
          Powered by Passion
        </p>
      </div>
    </main>
  );
}