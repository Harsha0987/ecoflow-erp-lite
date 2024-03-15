import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="summary">
        <p>Key Metrics and Features:</p>
<ul>
  <li>Carbon Footprint Reduction: Implement strategies to track and minimize the carbon footprint of business operations.</li>
  <li>Resource Efficiency: Optimize resource consumption to ensure sustainable utilization and reduce waste.</li>
  <li>Solar Energy Integration: Integrate solar energy solutions to power facilities and reduce reliance on non-renewable energy sources.</li>
  <li>Waste Management: Implement effective waste management practices to minimize environmental impact and promote recycling and reuse.</li>
  <li>Supply Chain Transparency: Ensure transparency and sustainability across the supply chain by tracking and disclosing environmental and social impacts.</li>
</ul>

      </div>
      <div className="navigation-links">
        <Link to="/products">
          <button className="navigation-button">Products Management</button>
        </Link>
        <Link to="/orders">
          <button className="navigation-button">Orders Management</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
