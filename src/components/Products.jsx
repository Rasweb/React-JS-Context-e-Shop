import axios from "axios";
import { useEffect, useState } from "react";
import { ShowProducts } from "./ShowProducts";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return <>{isLoading ? <>loading...</> : <>{productsHtml}</>}</>;
};
