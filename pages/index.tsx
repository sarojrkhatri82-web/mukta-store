import { useState, ChangeEvent } from 'react';
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
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Mukta Variety Store</h1>
          <p>Fast Food Raw Material, Delivered Fresh</p>
        </div>

        <div style={{ width: '100%', marginTop: '20px' }}>
          <input 
            placeholder="Enter Name" 
            style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
          />
          <input 
            placeholder="Enter Address" 
            style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} 
          />
        </div>

        <div style={{ width: '100%' }}>
          {products.map(p => (
            <div key={p.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
              {p.name} - ₹{p.price}
            </div>
          ))}
        </div>

        <button 
          onClick={handlePlaceOrder} 
          style={{ width: '100%', padding: '15px', marginTop: '20px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
        >
          Place Order
        </button>
      </main>
    </div>
  );
}

