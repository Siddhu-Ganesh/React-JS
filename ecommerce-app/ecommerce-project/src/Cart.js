import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item._id}>
            <img src={item.image} alt={`${item.name}`} />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
