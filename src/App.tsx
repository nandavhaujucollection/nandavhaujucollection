import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Mail, ShoppingCart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#faf6f1] to-[#f3e8e0]">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <ShoppingCart size={28} className="text-[#2c1810]" aria-hidden="true" />
                <h1 className="text-lg font-serif font-bold text-[#2c1810] tracking-[0.15em]">
                  NANDA VHAUJU COLLECTION
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#2c1810] hover:text-[#8b5e34] px-3 py-2 text-sm font-medium transition-colors"
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#2c1810] hover:text-[#8b5e34] p-2"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95" role="menu" aria-orientation="vertical">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#2c1810] hover:text-[#8b5e34] block px-3 py-2 text-base font-medium"
                  role="menuitem"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="relative">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#2c1810] mb-6 leading-tight">
                Elegance in Every Detail
              </h2>
              <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-[#8b5e34] opacity-30" aria-hidden="true"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-[#8b5e34] opacity-30" aria-hidden="true"></div>
            </div>
            <p className="text-2xl sm:text-3xl text-[#8b5e34] mb-6 font-serif italic">
              Where Tradition Meets Modern Fashion
            </p>
            <p className="text-[#5c4d44] mb-10 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
              Discover a curated collection that celebrates the fusion of traditional craftsmanship 
              and contemporary style. Each piece tells a story of elegance and authenticity.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0" aria-label="Newsletter subscription">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for exclusive updates"
                className="flex-grow px-6 py-3 rounded-full border-2 border-[#d4c3b5] focus:outline-none focus:ring-2 focus:ring-[#8b5e34] focus:border-transparent text-[#2c1810]"
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-[#2c1810] text-white px-8 py-3 rounded-full hover:bg-[#8b5e34] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Subscribe to newsletter"
              >
                Join Us
              </button>
            </form>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-[#2c1810] rounded-2xl transform rotate-3 opacity-10" aria-hidden="true"></div>
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Elegant fashion model showcasing Nanda Vhauju Collection's signature style"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 mt-24" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart size={24} className="text-[#2c1810]" aria-hidden="true" />
                <h3 className="font-serif text-base text-[#2c1810] tracking-[0.15em]">NANDA VHAUJU COLLECTION</h3>
              </div>
              <p className="text-[#8b5e34] text-sm">Redefining Fashion Excellence</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://facebook.com/nandavhaujucollection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c1810] hover:text-[#8b5e34] transition-colors transform hover:scale-110 duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={28} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/nandavhaujucollection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c1810] hover:text-[#8b5e34] transition-colors transform hover:scale-110 duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={28} aria-hidden="true" />
              </a>
              <a
                href="https://tiktok.com/@nandavhaujucollection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c1810] hover:text-[#8b5e34] transition-colors transform hover:scale-110 duration-200"
                aria-label="Follow us on TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=9779709373755"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c1810] hover:text-[#8b5e34] transition-colors transform hover:scale-110 duration-200"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a0.5 .5 0 0 0 1 0V9a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
              </a>
              <a
                href="mailto:nandavhauju@gmail.com"
                className="text-[#2c1810] hover:text-[#8b5e34] transition-colors transform hover:scale-110 duration-200"
                aria-label="Send us an email"
              >
                <Mail size={28} aria-hidden="true" />
              </a>
              <a
                href="https://linktr.ee/nandavhaujucollection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c1810] hover:text-[#8b5e34] transition-colors transform hover:scale-110 duration-200"
                aria-label="Visit our Linktree"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v16M4 12h16" />
                </svg>
              </a>
            </div>
            <p className="text-[#5c4d44] text-sm">
              © {new Date().getFullYear()} Nanda Vhauju Collection. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;