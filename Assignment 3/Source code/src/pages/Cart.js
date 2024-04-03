import React from "react";
import { useProduct } from "../contexts/ProductContext";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart, addToCart, reduceQuantity } = useProduct();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleCheckout = () => {
    toast.success("Checkout successful", { toastId: "checkout" });
  };
  return (
    <div className="flex flex-col w-auto my-12">
      <div className="mb-8">
        <h1 className="font-bold text-4xl text-center">Shopping Cart</h1>
      </div>
      {!isAuthenticated ? (
        <div className="text-center">Please login to view cart</div>
      ) : cart.length === 0 ? (
        <div className="text-center text-3xl my-8">No items in cart</div>
      ) : (
        <>
          <table>
            <tr className="text-2xl">
              <th></th>
              <th>Product</th>
              <th>$ per kg</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
            {cart.map((item) => (
              <tr key={item.id} className="text-center text-xl">
                <td className="flex items-center justify-center">
                  <img src={item.image} className="w-[100px]" alt={item.name} />
                </td>
                <td
                  className="hover:underline underline-offset-0 hover:underline-offset-8 duration-300 ease-out cursor-pointer"
                  onClick={() => navigate(`/product/${item.name}`)}
                >
                  {item.name}
                </td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="font-bold px-2 text-3xl"
                    onClick={() => reduceQuantity(item)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="font-bold px-2 text-3xl"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button
                    className="  text-white font-bold py-2 px-4 rounded hover:animate-spin duration-300 ease-out"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    <img src="cancel.png" alt="" className="w-[25px]" />
                  </button>
                </td>
              </tr>
            ))}
            <tr className="text-center font-bold text-2xl">
              <td>{cart.length} items</td>
              <td></td>
              <td></td>
              <td>Total: </td>
              <td>
                $
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </td>
              <td></td>
            </tr>
          </table>
          <div className="flex items-center justify-center my-8">
            <button
              className="bg-black border-2 border-black hover:bg-white hover:text-black duration-300 ease-out text-white font-bold py-2 px-4 rounded w-[50%]"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
