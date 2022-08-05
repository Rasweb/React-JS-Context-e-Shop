import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { StyledCheckoutImg } from "../styledComponents/StyledImg";
import { StyledCheckoutLi } from "../styledComponents/StyledLi";
import { StyledCheckoutUl } from "../styledComponents/StyledUl";

export const Checkout = () => {
  const [cart, setCart] = useContext(CartContext);

  const checkoutCart = cart.map((product) => {
    return (
      <StyledCheckoutLi key={product.id}>
        <StyledCheckoutImg src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.quantity}</p>
        <p>&#8364;{product.price}</p>
      </StyledCheckoutLi>
    );
  });

  // export const StyledCartControllBtnDisabled = styled(StyledCartControllBtn)`

  return (
    <>
      <div>
        <h2>Checkout</h2>
        <StyledCheckoutUl>{checkoutCart}</StyledCheckoutUl>
      </div>
    </>
  );
};
