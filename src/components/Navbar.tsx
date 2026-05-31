/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Calculator, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center font-bold text-white text-xl shadow-md group-hover:bg-blue-800 transition-colors">
              J<span className="text-emerald-400">&</span>K
            </div>
            <div className="ml-3">
              <span className="text-xl font-extrabold text-blue-900 tracking-tight block">
                J&K SERVICES
              </span>
              <span className="text-[9px] font-semibold text-emerald-600 tracking-wider block -mt-1 uppercase">
                Gestion & Administration d’élite
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isScrolled ? 'text-gray-600 hover:text-blue-900' : 'text-gray-100 hover:text-white hover:underline underline-offset-4'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isScrolled ? 'text-gray-600 hover:text-blue-900' : 'text-gray-100 hover:text-white hover:underline underline-offset-4'
              }`}
            >
              Nos Services
            </button>
            <button
              onClick={() => scrollToSection('pourquoi-nous')}
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isScrolled ? 'text-gray-600 hover:text-blue-900' : 'text-gray-100 hover:text-white hover:underline underline-offset-4'
              }`}
            >
              Pourquoi J&K
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isScrolled ? 'text-gray-600 hover:text-blue-900' : 'text-gray-100 hover:text-white hover:underline underline-offset-4'
              }`}
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isScrolled ? 'text-gray-600 hover:text-blue-900' : 'text-gray-100 hover:text-white hover:underline underline-offset-4'
              }`}
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('simulateur-devis')}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-0.5"
            >
              <Calculator size={16} />
              Simulateur de Devis
            </button>
            <a
              href="tel:+22890810272"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                isScrolled
                  ? 'text-blue-900 border border-blue-900/10 hover:bg-blue-50'
                  : 'text-white border border-white/20 hover:bg-white/10'
              }`}
            >
              <PhoneCall size={13} />
              +228 90 81 02 72
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-blue-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-b border-gray-100 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all"
            >
              Nos Services
            </button>
            <button
              onClick={() => scrollToSection('pourquoi-nous')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all"
            >
              Pourquoi J&K
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('simulateur-devis')}
                className="w-full justify-center flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all"
              >
                <Calculator size={18} />
                Simulateur de Devis
              </button>
              <a
                href="tel:+22890810272"
                className="w-full text-center py-2.5 rounded-lg text-sm font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={15} />
                +228 90 81 02 72
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
