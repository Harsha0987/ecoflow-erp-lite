import React, { useState } from 'react';
import './CalendarView.css';

const CalendarView = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Customer A', deliveryDate: '2024-02-15', status: 'Pending' },
    { id: 2, customer: 'Customer B', deliveryDate: '2024-02-17', status: 'In Progress' },
    { id: 3, customer: 'Customer C', deliveryDate: '2024-02-20', status: 'Completed' },
  ]);

 
  const getOrdersForDate = (date) => {
    return orders.filter(order => order.deliveryDate === date);
  };


  const handleDateClick = (date) => {

    const ordersForDate = getOrdersForDate(date);

    console.log('Orders for', date, ':', ordersForDate);
  };


  const calendarDays = [...Array(31).keys()].map((day) => (
    <div
      key={day + 1}
      className="calendar-day"
      onClick={() => handleDateClick(`2024-03-${day + 1}`)}
    >
      {day + 1}
    </div>
  ));

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Orders Calendar</h2>
      </div>
      <div className="calendar">
        {/* Calendar grid */}
        {calendarDays}
      </div>
    </div>
  );
};

export default CalendarView;
