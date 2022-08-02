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
import { StyledCartControllBtn } from "../styledComponents/StyledButtons";
import { StyledShowProductsBtn } from "../styledComponents/StyledButtons";
import { StyledCartControllBtnDisabled } from "../styledComponents/StyledButtons";

export const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useContext(CartContext);

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

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    console.log("Removed item from cart");
  };

  // Increase function, will always double the price.
  // More code is required
  const increase = (id) => {
    //    const increaseCart = cart.filter((item) => item.id === id);
    const incCart = cart.map((item) => {
      if (item.id === id) {
        const updateCart = {
          ...item,
          quantity: item.quantity + 1,
          price: item.price + item.price,
        };
        return updateCart;
      }
      return item;
    });
    setCart(incCart);
  };

  // Decrease function, can only decrease the current price.¨
  // More code is required.
  const decrease = (id) => {
    const decCart = cart.map((item) => {
      if (item.id === id) {
        if (item.price === 0) {
          const updateCart = {
            ...item,
            quantity: 0,
          };
          return updateCart;
        }
        if (item.quantity >= 1) {
          const updateCart = {
            ...item,
            quantity: item.quantity - 1,
            price: item.price - item.price,
          };
          return updateCart;
        }
      }
      return item;
    });
    setCart(decCart);
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
            {/* Minus symbol */}
            {item.quantity === 1 ? (
              <StyledCartControllBtnDisabled
                disabled
                onClick={() => decrease(item.id)}
              >
                &#8722;
              </StyledCartControllBtnDisabled>
            ) : (
              <StyledCartControllBtn onClick={() => decrease(item.id)}>
                &#8722;
              </StyledCartControllBtn>
            )}
            <p>&#8364;{item.price}</p>
            {/* Plus symbol */}
            <StyledCartControllBtn onClick={() => increase(item.id)}>
              &#43;
            </StyledCartControllBtn>
            <p>{item.quantity}</p>
            {/* Temporary button */}
            <StyledShowProductsBtn onClick={() => removeFromCart(item.id)}>
              Remove
            </StyledShowProductsBtn>
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
            <StyledCartParagraph>
              Total price: &#8364;{totalPrice}
            </StyledCartParagraph>
          </StyledCartDiv>
        </StyledModalDiv>
      ) : (
        <div>
          <button onClick={cartToggle}>Open Cart {cart.length}</button>
        </div>
      )}
    </>
  );
};
