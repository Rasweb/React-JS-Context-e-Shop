import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./components/Products";
import { Product } from "./pages/Product";
import { Error } from "./pages/Error";
import { CartProvider } from "./contexts/CartContext";
import { Checkout } from "./pages/Checkout";
import { ThankYou } from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/products/" element={<Products />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
          <Route path="/thankyou" element={<ThankYou />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
