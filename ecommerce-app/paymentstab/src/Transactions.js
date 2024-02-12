// Transactions.jsx
import React from 'react';

const Transactions = () => {
  return (
    <div className="transactions">
      <h4>Transactions | This Month</h4>
      <input type="text" placeholder="Search by order ID..." className="form-control mt-3" />
      <button className="btn btn-primary mt-3">Sort</button>
      <button className="btn btn-success mt-3">Download</button>
    </div>
  );
};

export default Transactions;
