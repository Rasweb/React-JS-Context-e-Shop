import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Context
import { CartContext } from "../contexts/CartContext";

// Style components
import { StyledProductDiv } from "../styledComponents/StyledDiv";
import { StyledProductImg } from "../styledComponents/StyledImg";
import { StyledProductBtn } from "../styledComponents/StyledButtons";
import { StyledProductBtnDiv } from "../styledComponents/StyledDiv";
import { StyledProductBackBtn } from "../styledComponents/StyledButtons";
import { StyledProductH3 } from "../styledComponents/StyledHeadline";
import { StyledCartPriceP } from "../styledComponents/StyledParagraph";
import { StyledProductP } from "../styledComponents/StyledParagraph";

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
            <StyledProductH3>{product.title}</StyledProductH3>
            <StyledProductP>Category: {product.category}</StyledProductP>
            <StyledProductImg src={product.image} alt={product.title} />
            <StyledCartPriceP>
              &#8364;{Math.round(product.price)}
            </StyledCartPriceP>
            <StyledProductP className="descCont">
              {product.description}
            </StyledProductP>
            {cart.length >= 1 ? (
              <>
                <Link to="/checkout">
                  <StyledProductBtn>To checkout</StyledProductBtn>
                </Link>
                <Link to="/products">
                  <StyledProductBtn>Products</StyledProductBtn>
                </Link>
              </>
            ) : (
              <>
                <StyledProductBtn onClick={addToCart}>
                  Add to Cart
                </StyledProductBtn>
              </>
            )}
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
