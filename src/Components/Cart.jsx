import React from "react";
import { useCart } from "../contexts/CartContext";
import "../Styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart 🛍️</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>₹{item.price}</p>
              <div className="cart-item-quantity">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  min="1"
                  className="quantity-input"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
