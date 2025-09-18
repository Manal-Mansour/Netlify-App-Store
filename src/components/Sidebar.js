import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/products">Get All Products</Link>
        </li>
        <li>
          <Link to="/products/add">Add Product</Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
