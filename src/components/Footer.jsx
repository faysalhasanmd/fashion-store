import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#F9F8F3] text-[#4A5E65] border-t border-[#E8E6DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          {/* Brand & Description */}
          <div className="space-y-4" data-aos="fade-up">
            <h3 className="text-2xl font-extrabold text-[#0B3C49] tracking-wider flex items-center gap-1">
              OXIVOS<span className="text-emerald-600">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-sm text-[#5C727A]">
              Modern fashion, thoughtfully curated. Explore our latest
              collection built for everyday style.
            </p>
          </div>

          {/* Shop Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xs font-extrabold text-[#0B3C49] mb-4 uppercase tracking-widest">
              Shop
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0B3C49] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#0B3C49] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-[#0B3C49] transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xs font-extrabold text-[#0B3C49] mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li className="flex items-center gap-1">
                <span className="text-[#83979F]">Email:</span>
                <a
                  href="mailto:hello@oxivos.com"
                  className="text-[#0B3C49] underline decoration-[#0B3C49]/30 hover:decoration-[#0B3C49] transition-all"
                >
                  hello@oxivos.com
                </a>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#83979F]">Phone:</span>
                <a
                  href="tel:01688399676"
                  className="text-[#0B3C49] underline decoration-[#0B3C49]/30 hover:decoration-[#0B3C49] transition-all"
                >
                  01688399676
                </a>
              </li>
              <li className="flex items-center gap-1 text-[#0B3C49]">
                <span className="text-[#83979F]">Store:</span> Dhaka
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Grid: Socials & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[#E8E6DD]/60 pb-12">
          {/* Follow Us */}
          <div data-aos="fade-up">
            <h4 className="text-xs font-extrabold text-[#0B3C49] mb-4 uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex items-center gap-5">
              {/* Facebook SVG */}
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-white rounded-full text-[#0B3C49] shadow-sm hover:scale-110 hover:bg-[#0B3C49] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1h-4c-2.5 0-4 1.5-4 4v3z" />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-white rounded-full text-[#0B3C49] shadow-sm hover:scale-110 hover:bg-[#0B3C49] hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Pinterest SVG */}
              <a
                href="#"
                aria-label="Pinterest"
                className="p-2 bg-white rounded-full text-[#0B3C49] shadow-sm hover:scale-110 hover:bg-[#0B3C49] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.377-.293 1.194-.332 1.358-.052.218-.173.264-.4.158-1.492-.695-2.424-2.874-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.363 2.953 7.363 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.047 2.443-1.561 3.284 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* TikTok SVG */}
              <a
                href="#"
                aria-label="TikTok"
                className="p-2 bg-white rounded-full text-[#0B3C49] shadow-sm hover:scale-110 hover:bg-[#0B3C49] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.62 4.17 1.22 1.27 2.94 1.95 4.68 2.1v3.83c-1.39-.06-2.74-.53-3.89-1.32-.67-.47-1.23-1.08-1.64-1.81a10.15 10.15 0 0 1-.19 3.72c-.41 1.76-1.28 3.38-2.54 4.65-1.5 1.41-3.5 2.19-5.55 2.15-2.22-.04-4.38-.97-5.89-2.61C1.22 13.06.33 10.45.62 7.83c.3-2.71 1.92-5.17 4.38-6.38 1.4-.69 2.97-1.02 4.53-.93v3.87c-1.12-.13-2.28.16-3.19.83-.98.71-1.56 1.88-1.55 3.1 0 1.21.57 2.37 1.54 3.09.96.72 2.19.98 3.35.73 1.12-.24 2.09-.98 2.58-2.02.26-.55.37-1.16.36-1.77V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xs font-extrabold text-[#0B3C49] mb-4 uppercase tracking-widest">
              Newsletter
            </h4>
            <div className="flex max-w-md bg-white border-2 border-[#0B3C49] rounded-lg overflow-hidden p-1 shadow-sm focus-within:ring-2 focus-within:ring-[#0B3C49]/20">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm text-[#0B3C49] bg-transparent focus:outline-none placeholder-[#83979F]"
              />
              <button className="bg-[#0B3C49] text-white px-5 py-2 text-xs font-bold rounded-md hover:bg-[#082C36] active:scale-95 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#E8E6DD] bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-[#83979F] tracking-wide">
          <div>
            © {new Date().getFullYear()} Oxivos Fashion Store. All rights
            reserved.
          </div>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="hover:text-[#0B3C49] transition-colors"
            >
              Terms
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="hover:text-[#0B3C49] transition-colors"
            >
              Privacy
            </Link>
            <span>|</span>
            <Link
              href="/shipping"
              className="hover:text-[#0B3C49] transition-colors"
            >
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
