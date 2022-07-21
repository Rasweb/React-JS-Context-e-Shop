import { StyledLayoutUl } from "../styledComponents/StyledUl";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLayoutUl>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </StyledLayoutUl>
        </nav>
      </header>
      <main>
        <StyledLayoutUl>
          <Outlet></Outlet>
        </StyledLayoutUl>
      </main>
      <footer>This is a footer</footer>
    </div>
  );
};
