import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Product = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();

  useEffect(() => {
    if (Product.length !== 0) return;
    axios.get("https://fakestoreapi.com/products/" + params.id).then((data) => {
      setIsLoading(false);
      setProduct(data.data);
    });
  });

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div>
          <div className="productCont">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <img src={product.image} alt={product.name} />
            <p>{product.price}</p>
            <p className="descCont">{product.description}</p>
            <button>Add to cart</button>
            <Link to="/checkout">
              <button>To checkout</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
