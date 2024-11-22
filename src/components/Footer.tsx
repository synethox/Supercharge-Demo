import React from 'react';

const Footer = () => {
  const isLinkDisabled = (href) => href === '#' || !href;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Über uns</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Supercharge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  CAR
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  BATTERY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  SOLAR
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Modelle</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Sportive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  SUV
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Compact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Technologien</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Driving Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Supercharge Solar Power
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Supercharge Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Wallboxes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Für Besitzer</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Werkstattsuche
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Garantie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-gray-300 ${
                    isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Supercharge. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className={`text-sm text-gray-400 hover:text-white ${
                  isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                Datenschutz
              </a>
              <a
                href="#"
                className={`text-sm text-gray-400 hover:text-white ${
                  isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                Impressum
              </a>
              <a
                href="#"
                className={`text-sm text-gray-400 hover:text-white ${
                  isLinkDisabled('#') ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
