// Pagination.jsx
import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="btn btn-secondary mr-2">&lt;</button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <button key={num} className="btn btn-secondary mr-2">{num}</button>
      ))}
      <button className="btn btn-secondary">&gt;</button>
    </div>
  );
};

export default Pagination;
