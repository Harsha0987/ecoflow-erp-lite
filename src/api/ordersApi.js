import api from './api';

const ordersApi = {
  getAllOrders: () => api.get('orders'),
  getOrderDetails: (orderId) => api.get(`orders/${orderId}`),
  updateOrderStatus: (orderId, status) => api.put(`orders/${orderId}/status`, { status }),
  deleteOrder: (orderId) => api.delete(`orders/${orderId}`),
};

export default ordersApi;
