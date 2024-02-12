// LeftSidebar.jsx
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faShoppingCart /*... other icons */ } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // If using routing

const LeftSidebar = () => {
  return (
    <div className="left-sidebar bg-dark text-light p-3">
      <div className="profile">
        {/* Profile pic and name */}
        <img src="/assets/images/user.png" alt="" />
        <h4>John Doe</h4>
        
      </div>
      <hr className="text-light" />
      <Link to="/store" className="text-light d-block mb-3">
        View Store 
      </Link>
      <ul className="list-unstyled">
        <li>
          <Link to="/home" className="text-light d-block">
             Home
          </Link>
        </li>
        <li>
          {/* Other menu items with icons */}
          <a href="#!" className="text-light d-flex align-items-center">
            Products
            {/* <FontAwesomeIcon icon={faShoppingCart} className="icon
            ms-2" /> */}
            </a>
            
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
