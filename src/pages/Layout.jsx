import { Link, Outlet } from "react-router-dom";

// Component
import { Cart } from "./Cart";

// Style components
import { StyledLayoutUl } from "../styledComponents/StyledUl";
import { StyledLayoutLi } from "../styledComponents/StyledLi";

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLayoutUl>
            <StyledLayoutLi>
              <Link to="/">Home</Link>
            </StyledLayoutLi>
            <StyledLayoutLi>
              <Link to="/products">Products</Link>
            </StyledLayoutLi>
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
