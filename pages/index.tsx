import { useState, ChangeEvent } from 'react';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';

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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Mukta Variety Store</h1>
        <p>Fast Food Raw Material, Delivered Fresh</p>
      </header>

      <div className={styles.main}>
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            placeholder="Enter Name" 
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
          />
          <input 
            placeholder="Enter Address" 
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} 
          />
        </div>

        {products.map(p => (
          <div key={p.id} className={styles.card}>
            {p.name} - ₹{p.price}
          </div>
        ))}

        <button 
          onClick={handlePlaceOrder} 
          style={{ width: '100%', padding: '15px', marginTop: '20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

