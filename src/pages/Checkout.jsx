import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Checkout = () => {
  const [cart, setCart] = useContext(CartContext);

  const checkoutCart = cart.map((product) => {
    return (
      <ul>
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.quantity}</p>
          <p>&#8364;{product.price}</p>
        </li>
        ;
      </ul>
    );
  });

  return (
    <>
      <div>
        <h1>Checkout</h1>
        {checkoutCart}
      </div>
    </>
  );
};
