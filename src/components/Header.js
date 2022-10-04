import { Link } from "react-router-dom";
import LogoImg from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <nav>
      <Link to="/" className="nav-logo" aria-current="page">
        <img src={LogoImg} alt="photosnap homepage" width={170} height={16} />
      </Link>
      <div className="nav-links">
        <Link to="/stories" className="nav-link">
          Stories
        </Link>
        <Link to="/features" className="nav-link">
          Features
        </Link>
        <Link to="/pricing" className="nav-link">
          Pricing
        </Link>
      </div>
    </nav>
  );
};

export default Header;
