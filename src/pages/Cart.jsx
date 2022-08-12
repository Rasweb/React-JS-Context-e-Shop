import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Context
import { CartContext } from "../contexts/CartContext";

// Style components
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
import { StyledCartPriceP } from "../styledComponents/StyledParagraph";
import { StyledCartCheckoutBtn } from "../styledComponents/StyledButtons";
import { StyledCartBtn } from "../styledComponents/StyledButtons";

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

  useEffect(() => {
    console.log("New item added to cart");
    setShowCart(true);
    if (cart.length === 0) {
      setShowCart(false);
    }
  }, [cart]);

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
          price: Math.round(item.price) + Math.round(item.orgPrice),
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
          price: Math.round(decItem.price) - Math.round(decItem.orgPrice),
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
            <StyledCartPriceP>&#8364;{Math.round(item.price)}</StyledCartPriceP>
            {/* Plus symbol */}
            <StyledCartControllBtn onClick={() => increase(index, item.id)}>
              &#43;
            </StyledCartControllBtn>
            <StyledCartPriceP>Quantity: {item.quantity}</StyledCartPriceP>
          </StyledCartProduct>
          <StyledShowProductsBtn onClick={() => removeFromCart(item.id)}>
            Remove
          </StyledShowProductsBtn>
        </StyledCartContainer>
      </>
    );
  });

  return (
    <>
      {showCart ? (
        <StyledModalDiv>
          <StyledCartButton onClick={cartToggle}>Close</StyledCartButton>
          <StyledCartDiv>{carts}</StyledCartDiv>
          <StyledCartDiv>
            {cart.length >= 1 ? (
              <>
                <StyledCartParagraph>
                  Items in cart: {cart.length}
                </StyledCartParagraph>
                <StyledCartParagraph>
                  Total price: &#8364;{totalPrice}
                </StyledCartParagraph>
                <Link to={`/checkout`}>
                  <StyledCartCheckoutBtn onClick={cartToggle}>
                    To checkout
                  </StyledCartCheckoutBtn>
                </Link>
              </>
            ) : (
              <Link to={`/products`}>
                <p>Cart is empty</p>
                <StyledCartCheckoutBtn onClick={cartToggle}>
                  Add products
                </StyledCartCheckoutBtn>
              </Link>
            )}
          </StyledCartDiv>
        </StyledModalDiv>
      ) : (
        <>
          {cart.length >= 1 ? (
            <div>
              <StyledCartBtn onClick={cartToggle}>
                Cart, {cart.length}
              </StyledCartBtn>
            </div>
          ) : (
            <div>
              <StyledCartBtn onClick={cartToggle}>Cart</StyledCartBtn>
            </div>
          )}
        </>
      )}
    </>
  );
};
