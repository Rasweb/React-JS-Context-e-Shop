import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { StyledCartDiv } from "../styledComponents/StyledDiv";
import { StyledModalDiv } from "../styledComponents/StyledDiv";
import { StyledCartParagraph } from "../styledComponents/StyledParagraph";
import { StyledCartImg } from "../styledComponents/StyledImg";
import { StyledCartProduct } from "../styledComponents/StyledDiv";
import { StyledCartProductP } from "../styledComponents/StyledParagraph";
import { StyledCartContainer } from "../styledComponents/StyledDiv";
import { StyledCartButton } from "../styledComponents/StyledButtons";

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

  const carts = cart.map((item) => {
    return (
      <>
        <StyledCartContainer>
          <StyledCartProduct key={item.id}>
            <StyledCartImg src={item.image} alt={item.name} />
            <StyledCartProductP>{item.name}</StyledCartProductP>
          </StyledCartProduct>
          <StyledCartProduct>
            <button>+</button>
            <p>${item.price}</p>
            <button>-</button>
          </StyledCartProduct>
        </StyledCartContainer>
      </>
    );
  });

  return (
    <>
      {showCart ? (
        <StyledModalDiv>
          <StyledCartButton onClick={cartToggle}>Close Cart</StyledCartButton>
          <StyledCartDiv>{carts}</StyledCartDiv>
          <StyledCartDiv>
            <StyledCartParagraph>
              Items in cart: {cart.length}
            </StyledCartParagraph>
            <StyledCartParagraph>Total price: {totalPrice}</StyledCartParagraph>
          </StyledCartDiv>
        </StyledModalDiv>
      ) : (
        <div>
          <button onClick={cartToggle}>Open Cart {cart.length}</button>
          {/* align-self: end */}
        </div>
      )}
    </>
  );
};
