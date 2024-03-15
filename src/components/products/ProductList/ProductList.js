import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Category X', price: 20.99, stock: 100 },
    { id: 2, name: 'Product B', category: 'Category Y', price: 15.99, stock: 75 },
  ]);

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
