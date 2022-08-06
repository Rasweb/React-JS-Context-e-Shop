import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { StyledCheckoutImg } from "../styledComponents/StyledImg";
import { StyledCheckoutLi } from "../styledComponents/StyledLi";
import { StyledCheckoutUl } from "../styledComponents/StyledUl";
import { StyledCheckoutHeadline } from "../styledComponents/StyledHeadline";
import { StyledCartButtonDiv } from "../styledComponents/StyledDiv";

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

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  // export const StyledCartControllBtnDisabled = styled(StyledCartControllBtn)`

  return (
    <>
      <div>
        <StyledCheckoutHeadline>Checkout</StyledCheckoutHeadline>
        <StyledCheckoutUl>{checkoutCart}</StyledCheckoutUl>
        <div>
          <div>
            <label>
              Email Address
              <input
                type="email"
                name="Email addresss"
                placeholder="johndoe@example.com"
                required
              />
            </label>
            <br />
            <label>
              Postal Number
              <input
                type="number"
                name="postalNum"
                placeholder="123 45"
                required
              />
            </label>
          </div>
          <StyledCartButtonDiv>
            <p>All delivery options 4&#8364;</p>
            <label htmlFor="home">
              Home delivery
              <input type="radio" id="home" name="shipping" />
            </label>
            <label htmlFor="point">
              Delivery point
              <input type="radio" id="point" name="shipping" defaultChecked />
            </label>
            <label htmlFor="parcel">
              Parcel locker
              <input type="radio" id="parcel" name="shipping" />
            </label>
          </StyledCartButtonDiv>
          <p> Total price: &#8364;{totalPrice + 4}</p>
          <input type="submit" value="Confirm order" />
        </div>
      </div>
    </>
  );
};
