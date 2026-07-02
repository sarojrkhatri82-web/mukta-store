import { useState } from 'react';
import { products } from '../data/products';

export default function Home() {
  const [cart, setCart] = useState<any>({});
  
  const addToCart = (product: any) => setCart({...cart, [product.id]: { ...product, qty: (cart[product.id]?.qty || 0) + 1 }});
  
  const subtotal = Object.values(cart).reduce((sum: number, item: any) => sum + (Number(item.price) * item.qty), 0);
  const deliveryFee = subtotal > 0 && subtotal < 500 ? 50 : 0;
  const total = subtotal + deliveryFee;

  const placeOrder = () => {
    const orderDetails = Object.values(cart).map((item: any) => `${item.name} (${item.qty})`).join(', ');
    const message = `*Order*\nItem: ${orderDetails}\nSubtotal: ₹${subtotal}\nDelivery Fee: ₹${deliveryFee}\nTotal: ₹${total}`;
    window.open(`https://wa.me/919530195743?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ fontFamily: 'Arial', backgroundColor: '#f9f9f9', paddingBottom: '100px' }}>
      <nav style={{ padding: '15px', background: '#fff', textAlign: 'center' }}>
        <h2 style={{ color: '#2a9d8f' }}>MUKTA VARIETY STORE</h2>
      </nav>

      <header style={{ padding: '40px 20px', background: 'linear-gradient(135deg, #e8f5e9, #ffffff)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px' }}>Fast Food Raw Material, <br/><span style={{ color: '#2a9d8f' }}>Delivered Fresh</span></h1>
      </header>

      <section style={{ padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {products.map((p) => (
            <div key={p.id} style={{ background: '#fff', padding: '15px', borderRadius: '15px' }}>
              <img src={p.image} style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
              <p style={{ fontSize: '13px', fontWeight: 'bold' }}>{p.name}</p>
              <p style={{ color: '#2a9d8f', fontWeight: 'bold' }}>₹{p.price}</p>
              <button onClick={() => addToCart(p)} style={{ width: '100%', padding: '8px', background: '#2a9d8f', color: '#fff', border: 'none', borderRadius: '5px' }}>Add</button>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Footer with Delivery Logic */}
      <div style={{ position: 'fixed', bottom: 0, width: '100%', background: 'white', padding: '15px', borderTop: '2px solid #2a9d8f' }}>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Delivery: {deliveryFee === 0 ? 'FREE' : '₹50'}</p>
        <h3 style={{ margin: '5px 0' }}>Total: ₹{total}</h3>
        <button onClick={placeOrder} style={{ width: '100%', padding: '12px', background: '#25D366', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          PLACE ORDER (₹{total})
        </button>
      </div>
    </div>
  );
}

