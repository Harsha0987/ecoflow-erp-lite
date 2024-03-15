import api from './api';

const productsApi = {
  getAllProducts: () => api.get('products'),
  addProduct: (product) => api.post('products', product),
  updateProduct: (productId, product) => api.put(`products/${productId}`, product),
  deleteProduct: (productId) => api.delete(`products/${productId}`),
};

export default productsApi;
