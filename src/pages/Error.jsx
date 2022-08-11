import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>Error</h1>
      <h2>Page not found</h2>
      <Link to={"/products"}>
        <button>Browse our products</button>
      </Link>
    </div>
  );
};
