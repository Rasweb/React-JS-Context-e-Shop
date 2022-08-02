import { Link } from "react-router-dom";
import { StyledProductsLi } from "../styledComponents/StyledLi";
import { StyledProductsImg } from "../styledComponents/StyledImg";
import { StyledProductsParagraph } from "../styledComponents/StyledParagraph";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { StyledShowProductsBtn } from "../styledComponents/StyledButtons";
import { StyledHeadlineThree } from "../styledComponents/StyledHeadline";

export const ShowProducts = ({ product }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    setCart((currCart) => [...currCart, tshirt]);
    if (cart) {
      console.log(cart);
    }
  };

  return (
    <StyledProductsLi key={product.id}>
      <StyledHeadlineThree>{product.title}</StyledHeadlineThree>
      <StyledProductsParagraph>
        Category: {product.category}
      </StyledProductsParagraph>
      <StyledProductsImg src={product.image} alt={product.title} />
      {/* &#8364; euro sign */}
      <StyledProductsParagraph>&#8364;{product.price}</StyledProductsParagraph>
      <Link to={`/products/${product.id}`} key={product.id}>
        <StyledShowProductsBtn>More info</StyledShowProductsBtn>
      </Link>
      <StyledShowProductsBtn onClick={addToCart}>
        Add to cart
      </StyledShowProductsBtn>
    </StyledProductsLi>
  );
};
