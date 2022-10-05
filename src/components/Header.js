import { Link } from "react-router-dom";
import LogoImg from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-logo" aria-current="page">
        <img src={LogoImg} alt="photosnap homepage" width={170} height={16} />
      </Link>
      <nav className="header-nav">
        <Link to="/stories" className="header-link">
          Stories
        </Link>
        <Link to="/features" className="header-link">
          Features
        </Link>
        <Link to="/pricing" className="header-link">
          Pricing
        </Link>
      </nav>
    </header>
  );
};

export default Header;
