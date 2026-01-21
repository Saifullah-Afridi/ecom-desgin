'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SearchIcon from '../icons/search.svg';
import CartIcon from '../icons/cart.svg';
import UserIcon from '../icons/user.svg';
import ChevronDownIcon from '../icons/chevron-down.svg';

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-20">
          <div className="flex items-center gap-4 lg:gap-10">
            {/* Hamburger Menu Button - Mobile & Tablet Only */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center justify-center lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <h1 className="heading-integral text-[24px] md:text-[32px]">SHOP.CO</h1>

            {/* Navigation - Desktop Only */}
            <nav className="hidden items-center gap-6 lg:flex">
              <button className="text-satoshi flex items-center gap-1 text-[16px] text-black">
                Shop
                <ChevronDownIcon className="h-2 w-3" />
              </button>
              <a href="#" className="text-satoshi text-[16px] text-black hover:opacity-70">
                On Sale
              </a>
              <a href="#" className="text-satoshi text-[16px] text-black hover:opacity-70">
                New Arrivals
              </a>
              <a href="#" className="text-satoshi text-[16px] text-black hover:opacity-70">
                Brands
              </a>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="ml-auto hidden h-12 flex-1 items-center gap-3 rounded-full bg-light-gray px-4 lg:flex lg:max-w-[577px]">
              <SearchIcon className="h-5 w-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="text-satoshi flex-1 bg-transparent text-[16px] outline-none placeholder:text-gray-60/40"
              />
            </div>

            {/* Icons */}
            <div className="ml-auto flex items-center gap-3.5 lg:ml-0">
              <button className="lg:hidden">
                <SearchIcon className="h-5 w-5" />
              </button>
              <button>
                <CartIcon className="h-5 w-6" />
              </button>
              <button>
                <UserIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="mt-4 flex h-12 items-center gap-3 rounded-full bg-light-gray px-4 lg:hidden">
            <SearchIcon className="h-5 w-5" />
            <input
              type="text"
              placeholder="Search for products..."
              className="text-satoshi flex-1 bg-transparent text-[16px] outline-none placeholder:text-gray-60/40"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-[300px] bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6">
          {/* Menu Header */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="heading-integral text-[24px]">SHOP.CO</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Navigation */}
          <nav className="flex flex-col gap-6">
            <button className="text-satoshi flex items-center gap-1 text-left text-[16px] text-black">
              Shop
              <ChevronDownIcon className="h-2 w-3" />
            </button>
            <a
              href="#"
              className="text-satoshi text-[16px] text-black hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              On Sale
            </a>
            <a
              href="#"
              className="text-satoshi text-[16px] text-black hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-satoshi text-[16px] text-black hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
