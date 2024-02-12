// PaymentTable.js
import React from 'react';

const PaymentTable = () => {
  // Sample transaction data (replace with your data)
  const transactionData = [
    {
      orderId: 1,
      date: '2024-01-01',
      amount: 100.0,
      fees: 5.0,
      // Other related information
    },
    // More transaction objects
  ];

  return (
    <div className="payment-table">
      <h2>Payment Transaction Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Order Amount</th>
            <th>Transaction Fees</th>
            {/* Other table headers */}
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.orderId}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.fees}</td>
              {/* Other table data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
