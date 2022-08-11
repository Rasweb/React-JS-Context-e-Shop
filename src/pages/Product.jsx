import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { StyledProductDiv } from "../styledComponents/StyledDiv";
import { StyledProductsImg } from "../styledComponents/StyledImg";
import { StyledProductBtn } from "../styledComponents/StyledButtons";
import { StyledProductBtnDiv } from "../styledComponents/StyledDiv";
import { StyledProductBackBtn } from "../styledComponents/StyledButtons";

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
      title: product.title,
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
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <StyledProductsImg src={product.image} alt={product.title} />
            <p>&#8364;{Math.round(product.price)}</p>
            <p className="descCont">{product.description}</p>
            {cart.length >= 1 ? (
              <Link to="/checkout">
                <StyledProductBtn>To checkout</StyledProductBtn>
              </Link>
            ) : (
              <></>
            )}
            <StyledProductBtn onClick={addToCart}>Add to Cart</StyledProductBtn>
          </StyledProductDiv>
          <StyledProductBtnDiv>
            <Link to="/products">
              <StyledProductBackBtn>Back</StyledProductBackBtn>
            </Link>
          </StyledProductBtnDiv>
        </div>
      )}
    </>
  );
};
