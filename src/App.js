import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./components/Products";
import { Product } from "./pages/Product";
import { Error } from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/products/" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
