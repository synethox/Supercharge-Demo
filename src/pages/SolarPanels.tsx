import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import OrderModal from '../components/OrderModal';
import { Panel, Mount } from '../types';

const mounts: Mount[] = [
  {
    id: 'garden',
    name: 'Garten-Montage',
    description: 'Freistehende Installation im Garten',
    image: 'https://www.haus-hobby-garten.de/thumbnail/a8/95/d2/1721308294/Balkonkraftwerk_GARDEN_1_800x800_800x800.webp?ts=1721308294',
    price: 24,
  },
  {
    id: 'balcony',
    name: 'Balkon-Montage',
    description: 'Flexible Lösung für Ihren Balkon',
    image: 'https://static.mydealz.de/threads/raw/1FcdL/2367744_1/re/1024x1024/qt/60/2367744_1.jpg',
    price: 49,
  },
  {
    id: 'roof',
    name: 'Dach-Montage',
    description: 'Optimale Integration in Ihre Dachfläche',
    image: 'https://www.testberichte.de/imgs/webp/p_imgs_160/1861726.jpg',
    price: 99,
  },
];

const panels: Panel[] = [
  {
    id: '200w',
    name: 'Solar 200',
    power: 200,
    description: 'Ideal für kleine Haushalte und Balkone',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    price: 599,
  },
  {
    id: '400w',
    name: 'Solar 400',
    power: 400,
    description: 'Perfekt für mittlere Haushalte',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    price: 899,
  },
  {
    id: '600w',
    name: 'Solar 600',
    power: 600,
    description: 'Maximale Leistung für große Haushalte',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    price: 1299,
  },
];

const SolarPanels = () => {
  const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);
  const [selectedMount, setSelectedMount] = useState<Mount | null>(null);
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const totalPrice =
    selectedPanel && selectedMount ? (selectedPanel.price + selectedMount.price) * quantity : 0;

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Supercharge Solar Balkonkraftwerk
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Mit dem Supercharge Solar Balkonkraftwerk starten Sie in eine unabhängige und
            umweltfreundliche Zukunft. Wählen Sie das passende Modell und die optimale Montage für
            Ihre Bedürfnisse.
          </p>
        </div>

        {/* Panel Selection */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Wählen Sie Ihr Panel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {panels.map((panel) => (
              <div
                key={panel.id}
                className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                  selectedPanel?.id === panel.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedPanel(panel)}
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={panel.image}
                    alt={panel.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{panel.name}</h3>
                <div className="flex items-center text-slate-600 mb-2">
                  <Sun className="w-5 h-5 mr-2" />
                  <span>{panel.power}W Leistung</span>
                </div>
                <p className="text-slate-600 mb-4">{panel.description}</p>
                <p className="text-2xl font-bold text-slate-900">€{panel.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mount Selection */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Wählen Sie Ihre Montage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mounts.map((mount) => (
              <div
                key={mount.id}
                className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                  selectedMount?.id === mount.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedMount(mount)}
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={mount.image}
                    alt={mount.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{mount.name}</h3>
                <p className="text-slate-600 mb-4">{mount.description}</p>
                <p className="text-2xl font-bold text-slate-900">€{mount.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary and Order */}
        {(selectedPanel || selectedMount) && (
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Ihre Auswahl</h2>
            <div className="space-y-4">
              {selectedPanel && (
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{selectedPanel.name}</h3>
                    <p className="text-slate-600">{selectedPanel.power}W Panel</p>
                  </div>
                  <p className="font-bold">€{selectedPanel.price}</p>
                </div>
              )}
              {selectedMount && (
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{selectedMount.name}</h3>
                    <p className="text-slate-600">{selectedMount.description}</p>
                  </div>
                  <p className="font-bold">€{selectedMount.price}</p>
                </div>
              )}
              {/* Quantity Selection */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Anzahl</h3>
                </div>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              {/* Total Price */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Gesamtpreis</h3>
                  <p className="text-2xl font-bold text-blue-600">€{totalPrice}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Jetzt bestellen
              </button>
            </div>
          </section>
        )}
      </div>

      {selectedPanel && selectedMount && (
        <OrderModal
          panel={selectedPanel}
          mount={selectedMount}
          quantity={quantity} // Pass quantity to OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SolarPanels;
