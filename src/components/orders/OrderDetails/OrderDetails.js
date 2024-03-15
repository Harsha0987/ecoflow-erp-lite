import React from 'react';
import './OrderDetails.css';

const OrderDetails = ({ order }) => {
  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      <div>
        <strong>Order ID:</strong> {order.orderId}
      </div>
      <div>
        <strong>Customer Name:</strong> {order.customerName}
      </div>
      <div>
        <strong>Order Date:</strong> {order.orderDate}
      </div>
      <div>
        <strong>Status:</strong> {order.status}
      </div>
      <button className="delete-btn">Delete Order</button>
    </div>
  );
};

export default OrderDetails;
