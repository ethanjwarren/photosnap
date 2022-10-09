import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogoImg from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="l-container">
        <Link to="/" className="header-logo" aria-current="page">
          <img src={LogoImg} alt="photosnap homepage" width={170} height={16} />
        </Link>

        <nav className="header-nav">
          <NavLink
            to="/stories"
            className="header-link"
            activeClassName="header-link__active"
          >
            Stories
          </NavLink>
          <NavLink
            to="/features"
            className="header-link"
            activeClassName="header-link__active"
          >
            Features
          </NavLink>
          <NavLink
            to="/pricing"
            className="header-link"
            activeClassName="header-link__active"
          >
            Pricing
          </NavLink>
        </nav>
        <Link to="#" className="button button-one">
          Get an invite
        </Link>
      </div>
    </header>
  );
};

export default Header;
