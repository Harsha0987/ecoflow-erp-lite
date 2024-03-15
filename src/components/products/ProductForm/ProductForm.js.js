import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      category,
      price: parseFloat(price),
      stockQuantity: parseInt(stockQuantity, 10),
    };
    onSubmit(newProduct);
    
    setProductName('');
    setCategory('');
    setPrice('');
    setStockQuantity('');
  };

  return (
    <div className="product-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Stock Quantity:
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
