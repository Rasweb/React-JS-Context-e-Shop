import { Link } from "react-router-dom";
import { StyledProductsLi } from "../styledComponents/StyledLi";
import { StyledProductsImg } from "../styledComponents/StyledImg";
import { StyledProductsParagraph } from "../styledComponents/StyledParagraph";

export const ShowProducts = ({ product }) => {
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
    </StyledProductsLi>
  );
};
