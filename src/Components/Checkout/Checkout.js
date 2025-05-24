import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../Redux-Toolkit/reducers/CartSlice";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const currentUser = user || storedUser;

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item.price), 0);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_ciCZUm9M6LDUFL",
      amount: getTotalAmount() * 100, 
      currency: "INR",
      name: "Food Fusion",
      description: "Order Payment",
      handler: (response) => {
        console.log("Payment response:", response);
        alert("Payment successful!");
        dispatch(clearCart());
        setTimeout(() => {
          navigate("/");
        }, 100);
      },
      prefill: {
        name: currentUser.userName || "",
        email: currentUser.email || "",
        contact: currentUser.contact || "",
      },
      notes: {
        address: "Online Food Delivery",
      },
      theme: {
        color: "#28a745",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Checkout</h2>

      <div className="card p-3 shadow-sm">
        <h5>User Details</h5>
        <p>
          <strong>Name:</strong> {currentUser.userName || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email || "N/A"}
        </p>
        <p>
          <strong>Phone:</strong> {currentUser.contact || "N/A"}
        </p>

        <hr />

        <h5>Cart Items:</h5>
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

        <h5 className="text-end mt-2">Total: ₹{getTotalAmount()}</h5>

        <button className="btn btn-success w-100 mt-3" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
