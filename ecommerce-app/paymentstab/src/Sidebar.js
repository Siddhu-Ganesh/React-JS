// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile block */}
      <div className="profile-block">
        <img src="profile-photo.jpg" alt="Profile" />
        <h4>Username</h4>
        <p>Visit Store</p>
      </div>

      {/* Navigation objects */}
      <ul className="navigation">
        <li>Home</li>
        <li>Orders</li>
        {/* ... other navigation items */}
        <li>Plugins</li>
      </ul>

      {/* Available credit balance */}
      <div className="credit-balance">
        <p>Available Credit Balance</p>
        <span>Balance amount</span>
        {/* Add respective icons here */}
      </div>
    </div>
  );
};

export default Sidebar;
