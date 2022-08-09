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
import { Link } from "react-router-dom";

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

  // Increase quantity in cart using index.
  const increase = (index, id) => {
    const increaseCart = [...cart];

    increaseCart[index].quantity++;

    setCart(increaseCart);

    const ne = cart.map((item) => {
      if ((item.id === id) & (item.quantity >= 1)) {
        const ls = {
          ...item,
          price: item.price + item.orgPrice,
        };
        return ls;
      }
      return item;
    });
    setCart(ne);
  };

  // decrease quantity in cart using index.
  const decrease = (index, id) => {
    const decreaseCart = [...cart];

    decreaseCart[index].quantity--;

    setCart(decreaseCart);

    const decreasePrice = cart.map((decItem) => {
      if ((decItem.id === id) & (decItem.quantity >= 1)) {
        const decCart = {
          ...decItem,
          price: decItem.price - decItem.orgPrice,
        };
        return decCart;
      }
      return decItem;
    });
    setCart(decreasePrice);
  };

  const carts = cart.map((item, index) => {
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
                onClick={() => decrease(index)}
              >
                &#8722;
              </StyledCartControllBtnDisabled>
            ) : (
              <StyledCartControllBtn onClick={() => decrease(index, item.id)}>
                &#8722;
              </StyledCartControllBtn>
            )}
            <p>&#8364;{item.price}</p>
            {/* Plus symbol */}
            <StyledCartControllBtn onClick={() => increase(index, item.id)}>
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
            <Link to={`/checkout`}>
              <StyledShowProductsBtn onClick={cartToggle}>
                To checkout
              </StyledShowProductsBtn>
            </Link>
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
