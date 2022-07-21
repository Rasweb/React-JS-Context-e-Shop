import { StyledLayoutUl } from "../styledComponents/StyledUl";

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLayoutUl>
            <li>s</li>
            <li>s</li>
            <li>s</li>
          </StyledLayoutUl>
        </nav>
      </header>
      <main>
        <StyledLayoutUl></StyledLayoutUl>
      </main>
      <footer>This is a footer</footer>
    </div>
  );
};
