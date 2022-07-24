import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { StyledCartDiv } from "../styledComponents/StyledDiv";
import { StyledModalDiv } from "../styledComponents/StyledDiv";
import { StyledCartParagraph } from "../styledComponents/StyledParagraph";

export const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const cartToggle = () => {
    if (showCart) {
      setShowCart(false);
      console.log("Cart closed");
    } else {
      setShowCart(true);
      console.log("Cart open");
    }
  };

  return (
    <>
      {showCart ? (
        <StyledModalDiv>
          <button onClick={cartToggle}>Close Cart</button>
          <StyledCartDiv>
            <StyledCartParagraph>
              Items in cart: {cart.length}
            </StyledCartParagraph>
            <StyledCartParagraph>Total price: {totalPrice}</StyledCartParagraph>
          </StyledCartDiv>
        </StyledModalDiv>
      ) : (
        <div>
          <button onClick={cartToggle}>Open Cart</button>
        </div>
      )}
    </>
  );
};
