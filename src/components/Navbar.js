import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <a className="navbar-brand" href="https://www.facebook.com/manal.mansour.1654">
          ContactUS
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
