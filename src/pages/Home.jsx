import { Link } from "react-router-dom";

// Style components
import { StyledHomeUl } from "../styledComponents/StyledUl";
import { StyledHomeBtn } from "../styledComponents/StyledButtons";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to my fake e-shop</h1>
      <Link to={"/products"}>
        <StyledHomeBtn>Press here to begin</StyledHomeBtn>
      </Link>
      <h2>This e-shop is created using React js</h2>
      <h4>On this site you can:</h4>
      <StyledHomeUl>
        <li>Load products from https://fakestoreapi.com/</li>
        <li>View more info about a specific product.</li>
        <li>Open and close the shopping cart</li>
        <li>Add products to the shopping cart.</li>
        <li>Increase and decrease quantity/price of products in cart</li>
        <li>See how many products in current cart</li>
        <li>See total price of all products in cart</li>
        <li>Remove specific product from cart</li>
        <li>Go to checkout from cart</li>
        <li>Make a fake payment and order</li>
      </StyledHomeUl>
    </div>
  );
};
