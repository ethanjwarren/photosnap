import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Photosnap</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
