import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
import Menu from "./pages/Menu";
import { ToastContainer } from "react-toastify";
import Products from "./data/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/cart" element={<Cart />} />
              {Products.map((product) => (
                <Route
                  key={product.name}
                  path={`/product/${product.name}`}
                  element={<ProductDetail product={product} />}
                />
              ))}
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}

export default App;
