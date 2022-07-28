import { Link } from "react-router-dom";
import { StyledProductsLi } from "../styledComponents/StyledLi";
import { StyledProductsImg } from "../styledComponents/StyledImg";
import { StyledProductsParagraph } from "../styledComponents/StyledParagraph";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export const ShowProducts = ({ product }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    };
    setCart((currCart) => [...currCart, tshirt]);
    if (cart) {
      console.log(cart);
    }
  };

  return (
    <StyledProductsLi key={product.id}>
      <h3>{product.title}</h3>
      <StyledProductsParagraph>
        Category: {product.category}
      </StyledProductsParagraph>
      <StyledProductsImg src={product.image} alt={product.title} />
      <StyledProductsParagraph>${product.price}</StyledProductsParagraph>
      <Link to={`/products/${product.id}`} key={product.id}>
        <button>More info</button>
      </Link>
      <button onClick={addToCart}>Add to cart</button>
    </StyledProductsLi>
  );
};
