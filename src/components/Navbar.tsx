import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // State to manage the Login modal

  const navItems = [
    { name: 'Über uns', href: '#' },
    { name: 'Mobilität', href: '#' },
    { name: 'Solarpanele', href: '/solar-panels' },
  ];

  return (
    <>
      <nav className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold">Supercharge</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Login Button */}
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-slate-800"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800"
                >
                  {item.name}
                </Link>
              ))}
              {/* Login Button for Mobile */}
              <button
                onClick={() => setShowLoginModal(true)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <Login
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)} // Close the modal when "onClose" is triggered
        />
      )}
    </>
  );
};

export default Navbar;
