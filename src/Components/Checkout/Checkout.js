import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../Redux-Toolkit/reducers/CartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty. Add items to proceed.</p>
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
            </div>
          ))}

          <button
            className="btn btn-success w-100 mt-2"
            onClick={handleCheckout}
          >
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
