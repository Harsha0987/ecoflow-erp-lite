import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import ProductList from './components/products/ProductList/ProductList';
import ProductForm from './components/products/ProductForm/ProductForm.js';
import OrderList from './components/orders/OrderList/OrderList';
import OrderDetails from './components/orders/OrderDetails/OrderDetails';
import CalendarView from './components/calendar/CalendarView/CalendarView';
import { Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<ProductForm />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
          <Route path="/calendar" element={<CalendarView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
