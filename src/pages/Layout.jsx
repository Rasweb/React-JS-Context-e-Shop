import { StyledLayoutUl } from "../styledComponents/StyledUl";
import { Link, Outlet } from "react-router-dom";
import { Cart } from "./Cart";

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
              <Cart></Cart>
            </li>
          </StyledLayoutUl>
        </nav>
      </header>
      <main>
        <StyledLayoutUl>
          <Outlet></Outlet>
        </StyledLayoutUl>
      </main>
    </div>
  );
};
