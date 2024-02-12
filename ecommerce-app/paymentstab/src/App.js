// App.js
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import PaymentTable from './PaymentTable';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <PaymentTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
