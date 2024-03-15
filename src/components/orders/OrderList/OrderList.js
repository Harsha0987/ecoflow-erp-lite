import React from 'react';
import './OrderList.css';

const OrderList = ({ orders, onViewDetails, onUpdateStatus, onDeleteOrder }) => {
  return (
    <div className="order-list-container">
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => onViewDetails(order.id)}>View Details</button>
                <button onClick={() => onUpdateStatus(order.id)}>Update Status</button>
                <button onClick={() => onDeleteOrder(order.id)}>Delete Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;