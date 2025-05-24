import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
} from "../../Redux-Toolkit/reducers/CartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item.price), 0);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="card p-3 shadow-sm">
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center border-bottom pb-2 mb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded"
                style={{ width: "80px", height: "80px", marginRight: "15px" }}
              />
              <div className="flex-grow-1">
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-1">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="mb-1">
                  <strong>Cuisine:</strong> {item.cuisine}
                </p>
                <p className="mb-0">
                  <strong>Price:</strong> ₹{item.price}
                </p>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove
              </button>
            </div>
          ))}

          <h5 className="text-end mt-2">Total: ₹{getTotalAmount()}</h5>

          <button
            className="btn btn-warning w-100 mt-2"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button
            className="btn btn-success w-100 mt-2"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
