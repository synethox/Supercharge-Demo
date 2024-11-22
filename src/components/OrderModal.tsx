import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Panel, Mount } from '../types';

interface OrderModalProps {
  panel: Panel;
  mount: Mount;
  quantity: number; // Quantity selected on the SolarPanels page
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  paymentMethod: 'credit-card' | 'paypal' | 'bank-transfer';
}

const OrderModal: React.FC<OrderModalProps> = ({
  panel,
  mount,
  quantity,
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    paymentMethod: 'credit-card',
  });

  if (!isOpen) return null;

  const totalPrice = (panel.price + mount.price) * quantity;

  const handleSkipToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Skip to Payment Information step
  };

  const handleGuestContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Proceed to Personal Information step
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your order!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {step === 1
              ? 'Bestelldetails'
              : step === 2
              ? 'Persönliche Informationen'
              : step === 3
              ? 'Zahlungsinformationen'
              : 'Vielen Dank'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Order Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Ihre Auswahl</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{panel.name} (x{quantity})</span>
                    <span>€{panel.price * quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{mount.name}</span>
                    <span>€{mount.price * quantity}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Gesamtpreis</span>
                      <span>€{totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handleSkipToPayment} // Skip to Payment Information step
                  className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Weiter
                </button>
                <button
                  type="button"
                  onClick={handleGuestContinue} // Continue to Personal Information step
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Weiter als Gast
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vorname</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nachname</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Straße</label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) =>
                        setFormData({ ...formData, street: e.target.value })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hausnummer</label>
                    <input
                      type="text"
                      required
                      value={formData.houseNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, houseNumber: e.target.value })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PLZ</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stadt</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Zurück
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment Information */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Wählen Sie Ihre Zahlungsmethode</h3>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        paymentMethod: 'credit-card',
                      })
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">Kreditkarte</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        paymentMethod: 'paypal',
                      })
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">PayPal</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="bank-transfer"
                    checked={formData.paymentMethod === 'bank-transfer'}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        paymentMethod: 'bank-transfer',
                      })
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">Banküberweisung</span>
                </label>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Zurück
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Thank You */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              <h3 className="text-lg font-semibold">Vielen Dank für Ihre Bestellung!</h3>
              <p>
                Eine Bestätigung wurde an <strong>{formData.email}</strong> gesendet.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OrderModal;

