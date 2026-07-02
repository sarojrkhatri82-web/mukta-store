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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#008080' }}>Mukta Variety Store</h1>
      <p>Fast Food Raw Material, Delivered Fresh</p>
      
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          placeholder="Enter Name" 
          style={{ padding: '15px', fontSize: '16px', border: '2px solid #008080', borderRadius: '8px', width: '100%' }} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          placeholder="Enter Address" 
          style={{ padding: '15px', fontSize: '16px', border: '2px solid #008080', borderRadius: '8px', width: '100%' }} 
          onChange={(e) => setAddress(e.target.value)} 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        {products.map(p => (
          <div key={p.id} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
            {p.name} - ₹{p.price}
          </div>
        ))}
      </div>

      <button 
        onClick={handlePlaceOrder} 
        style={{ width: '100%', padding: '15px', fontSize: '18px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
      >
        Place Order
      </button>
    </div>
  );
}


