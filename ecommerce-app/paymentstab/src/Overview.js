// Overview.jsx
import React from 'react';

const Overview = () => {
  return (
    <div className="overview">
      <div className="online-orders">
        {/* Online orders count */}
        <h2>Online Orders</h2>
      </div>
      <div className="amount-received">
        {/* Amount received */}
        <p>Amount</p>
      </div>
      <select className="form-control mt-3">
        {/* Month selection options */}
        <option value="1">January</option>
        
      </select>
    </div>
  );
};

export default Overview;
