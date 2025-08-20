import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface Collection {
  id: number;
  title: string;
  products: Product[];
}

interface FashionTVProps {
  collections: Collection[];
}

const FashionTV: React.FC<FashionTVProps> = ({ collections }) => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000' }}>
      {collections.map((collection) => (
        <div key={collection.id} style={{ margin: '20px', padding: '20px', border: '1px solid #f0c0d0' }}>
          <h2 style={{ color: '#d5006d' }}>{collection.title}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {collection.products.map((product) => (
              <div key={product.id} style={{ margin: '10px', border: '1px solid #f0c0d0', borderRadius: '10px', padding: '10px' }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FashionTV;