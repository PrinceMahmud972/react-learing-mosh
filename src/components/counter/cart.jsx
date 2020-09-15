import React from 'react';

// Stateless functional Component

const Cart = ({ totalCounters }) => {
  return (
    <div className="bg-light p-3 mt-5">
      <h3>
        Cart{' '}
        <span className="badge badge-secondary badge-pill">
          {totalCounters}
        </span>
      </h3>
    </div>
  );
};

export default Cart;
