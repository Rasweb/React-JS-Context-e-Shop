import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { StyledCheckoutImg } from "../styledComponents/StyledImg";
import { StyledCheckoutLi } from "../styledComponents/StyledLi";
import { StyledCheckoutUl } from "../styledComponents/StyledUl";
import { StyledCheckoutHeadline } from "../styledComponents/StyledHeadline";
import { StyledCartButtonDiv } from "../styledComponents/StyledDiv";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [cart] = useContext(CartContext);
  const [validation, setValidation] = useState(false);

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
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Email Address
                <input
                  type="email"
                  name="Eaddr"
                  placeholder="johndoe@example.com"
                  required
                  onChange={(event) => handleUserInput(event)}
                />
              </label>
              <br />
              <label>
                Postal Number
                <input
                  type="number"
                  name="postNum"
                  placeholder="123 45"
                  required
                  onChange={(event) => handleUserInput(event)}
                />
              </label>
            </div>
            <StyledCartButtonDiv>
              <p>All delivery options 4&#8364;, 1 - 3 days shipping</p>
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
            {validation ? (
              <Link to={`/thankyou`}>
                <input type="submit" value="Confirm order" />
              </Link>
            ) : (
              <b>Don't leave the input fields empty</b>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
