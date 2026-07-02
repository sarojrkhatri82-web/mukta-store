import { useState } from 'react';

export default function Store() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const products = [
    { id: 1, name: 'Full Top Kit', price: 129 },
    { id: 2, name: 'Thousand Island', price: 200 }
  ];

  const handlePlaceOrder = () => {
    const message = `*New Order*%0AName: ${name}%0AAddress: ${address}%0AItems: ${products.map(p => p.name).join(', ')}`;
    window.open(`https://wa.me/919530195743?text=${message}`, '_blank');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mukta Variety Store</h1>
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input placeholder="Enter Name" style={{ padding: '10px', fontSize: '18px', border: '2px solid #000', borderRadius: '5px' }} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Enter Address" style={{ padding: '10px', fontSize: '18px', border: '2px solid #000', borderRadius: '5px' }} onChange={(e) => setAddress(e.target.value)} />
      </div>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: '5px' }}>{p.name} - ₹{p.price}</div>
      ))}
      <button onClick={handlePlaceOrder} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px' }}>
        Place Order
      </button>
    </div>
  );
}

