import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { StyledProductDiv } from "../styledComponents/StyledDiv";
import { StyledProductsImg } from "../styledComponents/StyledImg";

export const Product = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    quantity: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useContext(CartContext);

  let params = useParams();

  useEffect(() => {
    if (Product.length !== 0) return;
    axios.get("https://fakestoreapi.com/products/" + params.id).then((data) => {
      setIsLoading(false);
      setProduct(data.data);
    });
  });

  const addToCart = () => {
    const tshirt = {
      id: product.id,
      name: product.title,
      price: product.price,
      orgPrice: product.price,
      image: product.image,
      quantity: 1,
    };

    setCart((currCart) => [...currCart, tshirt]);
    if (cart) {
      console.log(cart);
    }
  };

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div>
          <StyledProductDiv>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <StyledProductsImg src={product.image} alt={product.name} />
            <p>&#8364;{product.price}</p>
            <p className="descCont">{product.description}</p>
            <Link to="/checkout">
              <button>To checkout</button>
            </Link>
            <button onClick={addToCart}>Add to Cart</button>
          </StyledProductDiv>
        </div>
      )}
    </>
  );
};
