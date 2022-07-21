import { Link } from "react-router-dom";

export const ShowProducts = ({ product }) => {
  return (
    <li key={product.id} className="productsCont">
      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <img src={product.image} alt={product.title} />
      <p>{product.price}</p>
      <Link to={`/products/${product.id}`} key={product.id}>
        <button>More info</button>
      </Link>
    </li>
  );
};
