import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ShowProducts } from "./ShowProducts";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  useEffect(() => {
    if (products.length !== 0) return;
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      setProducts(response.data);
      setIsLoading(false);
      console.log(response.data);
    });
  });

  let productsHtml = products.map((product) => {
    return <ShowProducts product={product} key={product.id}></ShowProducts>;
  });

  return (
    <>
      {isLoading ? (
        <>loading...</>
      ) : (
        <>
          <div>
            <p>Items in cart: {cart.length}</p>
            <p>Total price: {totalPrice}</p>
          </div>
          {productsHtml}
        </>
      )}
    </>
  );
};
