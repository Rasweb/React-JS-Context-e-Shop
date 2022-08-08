import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { StyledCheckoutImg } from "../styledComponents/StyledImg";
import { Link } from "react-router-dom";

export const ThankYou = () => {
  const [cart, setCart] = useContext(CartContext);

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const boughtCart = cart.map((product) => {
    return (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>&#8364;{product.price}</p>
        <StyledCheckoutImg src={product.image} alt={product.name} />
      </div>
    );
  });

  return (
    <>
      <h1>Thank you for your order</h1>
      <h2>Total price: &#8364;{totalPrice}</h2>
      {boughtCart}
      <Link to={"/"}>
        <button onClick={clearCart}>Back to home</button>
      </Link>
    </>
  );
};
