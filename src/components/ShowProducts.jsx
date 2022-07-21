import { Link } from "react-router-dom";
import { StyledProductsLi } from "../styledComponents/StyledLi";
import { StyledProductsImg } from "../styledComponents/StyledImg";
import { StyledProductsParagraph } from "../styledComponents/StyledParagraph";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ShowProducts = ({ product }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = {
      id: product.id,
      name: product.name,
      price: product.price,
    };
    setCart((currCart) => [...currCart, tshirt]);
  };

  return (
    <StyledProductsLi key={product.id}>
      <h3>{product.title}</h3>
      <StyledProductsParagraph>
        Category: {product.category}
      </StyledProductsParagraph>
      <StyledProductsImg src={product.image} alt={product.title} />
      <StyledProductsParagraph>{product.price}</StyledProductsParagraph>
      <Link to={`/products/${product.id}`} key={product.id}>
        <button>More info</button>
      </Link>
      <button onClick={addToCart}>Add to Cart</button>
    </StyledProductsLi>
  );
};
