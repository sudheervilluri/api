import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onDelete }) {
  return (
    <div className="card">
      {product.imageUrl && (
        <img 
          src={product.imageUrl} 
          alt={product.name}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '15px' }}
        />
      )}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <Link to={`/products/${product._id}`}>
          <button className="btn-secondary">View Details</button>
        </Link>
        <button className="btn-danger" onClick={() => onDelete(product._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
