import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../contexts/CartContext";

// Style components
import { StyledThankYouImg } from "../styledComponents/StyledImg";
import { StyledThankYouBtn } from "../styledComponents/StyledButtons";
import { StyledThankYouDiv } from "../styledComponents/StyledDiv";
import { StyledThankYouH4 } from "../styledComponents/StyledHeadline";
import { StyledThankYouH1 } from "../styledComponents/StyledHeadline";
import { StyledThankYouH2 } from "../styledComponents/StyledHeadline";

export const ThankYou = () => {
  const [cart, setCart] = useContext(CartContext);

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const boughtCart = cart.map((product) => {
    return (
      <StyledThankYouDiv key={product.id}>
        <StyledThankYouImg src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <StyledThankYouH4>&#8364;{product.price}</StyledThankYouH4>
      </StyledThankYouDiv>
    );
  });

  return (
    <>
      <StyledThankYouH1>Thank you for your order</StyledThankYouH1>
      <StyledThankYouH2>Total price: &#8364;{totalPrice}</StyledThankYouH2>
      <Link to={"/"}>
        <StyledThankYouBtn onClick={clearCart}>Back to home</StyledThankYouBtn>
      </Link>
      {boughtCart}
    </>
  );
};
