import '../styles/globals.css'; // Add this if you see a globals.css file
import { useState, ChangeEvent } from 'react';

// You might need to import your global CSS or layout components here
// Example: import '../styles/globals.css'; 

export default function Store() {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const products = [
    { id: 1, name: 'Full Top Kit', price: 129 },
    { id: 2, name: 'Thousand Island', price: 200 }
  ];

  const handlePlaceOrder = () => {
    const message = `*New Order*%0AName: ${name}%0AAddress: ${address}%0AItems: ${products.map(p => p.name).join(', ')}`;
    window.open(`https://wa.me/919530195743?text=${message}`, '_blank');
  };

  return (
    <div className="container">
      {/* Restore your original header section here */}
      <header>
        <h1>Mukta Variety Store</h1>
        <p>Fast Food Raw Material, Delivered Fresh</p>
      </header>

      {/* Your new ordering section */}
      <section className="order-section">
        <input 
          placeholder="Enter Name" 
          className="input-field"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
        />
        <input 
          placeholder="Enter Address" 
          className="input-field"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} 
        />
      </section>

      {/* Your original product list section */}
      <main>
        {products.map(p => (
          <div key={p.id} className="product-item">
            {p.name} - ₹{p.price}
          </div>
        ))}
      </main>

      <button onClick={handlePlaceOrder} className="order-button">
        Place Order
      </button>
      
      {/* Optional: Add custom CSS inside a style tag if external styles aren't loading */}
      <style jsx>{`
        .container { padding: 20px; font-family: sans-serif; }
        .input-field { display: block; width: 100%; margin-bottom: 10px; padding: 10px; border: 1px solid #ccc; }
        .product-item { margin-bottom: 10px; }
        .order-button { width: 100%; padding: 15px; background: #25D366; color: white; border: none; }
      `}</style>
    </div>
  );
}

