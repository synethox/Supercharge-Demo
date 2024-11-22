import React from 'react';
import { Car, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solarpanele',
      description: 'Hocheffiziente Photovoltaik-Systeme für maximale Energiegewinnung',
      link: '/solar-panels',
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'E-Mobilität',
      description: 'Zukunftsweisende Elektrofahrzeuge für nachhaltiges Fahren',
      link: null,
    },
  ];

  const handleNavigation = (link) => {
    if (link) {
      navigate(link);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.warn('Feature not available yet.');
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Unsere Lösungen</h2>
          <p className="mt-4 text-lg text-slate-600">
            Entdecken Sie unsere innovativen Produkte für eine nachhaltige Zukunft
          </p>
        </div>

        {/* Dynamic grid layout */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            features.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
          } gap-8`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(feature.link)}
              role="button"
              aria-label={feature.title}
              className={`p-6 bg-slate-50 rounded-lg hover:shadow-lg transition duration-300 ${
                feature.link ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
              }`}
            >
              <div className="text-slate-900 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
