import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { StyledCheckoutImg } from "../styledComponents/StyledImg";
import { StyledCheckoutLi } from "../styledComponents/StyledLi";
import { StyledCheckoutUl } from "../styledComponents/StyledUl";
import { StyledCheckoutHeadline } from "../styledComponents/StyledHeadline";
import { StyledCartButtonDiv } from "../styledComponents/StyledDiv";
import { Link } from "react-router-dom";
import { StyledCheckoutSubmitInput } from "../styledComponents/StyledInputs";
import { StyledCartProductP } from "../styledComponents/StyledParagraph";
import { StyledCartProduct } from "../styledComponents/StyledDiv";
import { StyledCheckoutDiv } from "../styledComponents/StyledDiv";
import { StyledCheckoutInputs } from "../styledComponents/StyledInputs";
import { StyledCheckoutForm } from "../styledComponents/StyledForms";
import { StyledCheckoutProductP } from "../styledComponents/StyledParagraph";
import { StyledCartPriceP } from "../styledComponents/StyledParagraph";
import { StyledCheckoutLabel } from "../styledComponents/StyledLabels";

export const Checkout = () => {
  const [cart] = useContext(CartContext);
  const [validation, setValidation] = useState(false);

  const checkoutCart = cart.map((product) => {
    return (
      <StyledCheckoutLi key={product.id}>
        <StyledCartProduct>
          <StyledCheckoutImg src={product.image} alt={product.name} />
          <StyledCartProductP>{product.name}</StyledCartProductP>
        </StyledCartProduct>
        <StyledCheckoutDiv>
          <StyledCheckoutProductP>
            Cost: &#8364;{Math.round(product.price)}
          </StyledCheckoutProductP>
          <StyledCheckoutProductP>
            Quantity: {product.quantity}
          </StyledCheckoutProductP>
        </StyledCheckoutDiv>
      </StyledCheckoutLi>
    );
  });

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleUserInput = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "") {
      console.log(" email", value);
      setValidation(false);
    } else if (value) {
      console.log("s", value);
      setValidation(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <StyledCheckoutHeadline>Checkout</StyledCheckoutHeadline>
        <StyledCheckoutUl>{checkoutCart}</StyledCheckoutUl>
        <div>
          <StyledCheckoutForm onSubmit={handleSubmit}>
            <div>
              <StyledCheckoutLabel>
                Email Address
                <StyledCheckoutInputs
                  type="email"
                  name="Eaddr"
                  placeholder="johndoe@example.com"
                  required
                  onChange={(event) => handleUserInput(event)}
                />
              </StyledCheckoutLabel>
              <br />
              <StyledCheckoutLabel>
                Postal Number
                <StyledCheckoutInputs
                  type="number"
                  name="postNum"
                  placeholder="123 45"
                  required
                  onChange={(event) => handleUserInput(event)}
                />
              </StyledCheckoutLabel>
            </div>
            <StyledCartButtonDiv>
              <StyledCartPriceP>
                All delivery options 4&#8364;, 1 - 3 days shipping
              </StyledCartPriceP>
              <StyledCheckoutLabel htmlFor="home">
                Home delivery
                <input type="radio" id="home" name="shipping" />
              </StyledCheckoutLabel>
              <StyledCheckoutLabel htmlFor="point">
                Delivery point
                <input type="radio" id="point" name="shipping" defaultChecked />
              </StyledCheckoutLabel>
              <StyledCheckoutLabel htmlFor="parcel">
                Parcel locker
                <input type="radio" id="parcel" name="shipping" />
              </StyledCheckoutLabel>
            </StyledCartButtonDiv>
            <StyledCartPriceP>
              Total price: &#8364;{Math.round(totalPrice + 4)}
            </StyledCartPriceP>
            {validation ? (
              <Link to={`/thankyou`}>
                <StyledCheckoutSubmitInput
                  type="submit"
                  value="Confirm order"
                />
              </Link>
            ) : (
              <b>Don't leave the input fields empty</b>
            )}
          </StyledCheckoutForm>
        </div>
      </div>
    </>
  );
};
