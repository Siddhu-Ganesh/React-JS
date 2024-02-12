// Table.jsx
import React from 'react';

const Table = () => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Amount</th>
            <th>Transaction Fees</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through your data to create table rows */}
          {/* Example row */}
          <tr>
            <td>#098023</td>
            <td>7 July 2023</td>
            <td>1,237.34</td>
            <td>22</td>
          </tr>
          {/* More rows */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
