import { createContext, useContext, useReducer } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
const ProductContext = createContext();
const initialState = {
  cart: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id && item.name === action.payload.name
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}

function ProductProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [{ cart }, dispatch] = useReducer(reducer, initialState);
  function addToCart(product) {
    if (!isAuthenticated) {
      toast.error("Please login to add item to cart", { toastId: "toast" });
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
    console.log(cart);
  }
  function removeFromCart(product) {
    if (!isAuthenticated) {
      toast.error("Please login to remove item", { toastId: "toast" });
      return;
    }
    dispatch({ type: "REMOVE_FROM_CART", payload: product.name });
  }
  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }
  return (
    <ProductContext.Provider
      value={{ cart, dispatch, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
}
function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}
export { ProductProvider, useProduct };
