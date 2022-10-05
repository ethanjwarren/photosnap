import { Link } from "react-router-dom";
import LogoImg from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="l-container">
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
        <Link to="#">
          <button className="button button-one">Get an invite</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
