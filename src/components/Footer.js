import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogoImg from "../assets/shared/desktop/footer-logo.svg";
import FacebookImg from "../assets/shared/desktop/facebook.svg";
import YoutubeImg from "../assets/shared/desktop/youtube.svg";
import TwitterImg from "../assets/shared/desktop/twitter.svg";
import PinterestImg from "../assets/shared/desktop/pinterest.svg";
import InstagramImg from "../assets/shared/desktop/instagram.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  const SocialLinks = [
    { title: "Facebook", image: { FacebookImg }, link: "#" },
    { title: "Youtube", image: { YoutubeImg }, link: "#" },
    { title: "Twitter", image: { TwitterImg }, link: "#" },
    { title: "Pinterest", image: { PinterestImg }, link: "#" },
    { title: "Instagram", image: { InstagramImg }, link: "#" },
  ];

  return (
    <footer className="footer">
      <div className="l-container">
        <div className="footer-column">
          <Link to="/" className="footer-logo" aria-current="page">
            <img src={LogoImg} alt="photosnap" width={170} height={16} />
          </Link>
          <div className="footer-social">
            <Link to="#">
              <img
                src={FacebookImg}
                alt="Photosnap Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link to="#">
              <img
                src={YoutubeImg}
                alt="Photosnap Youtube"
                width={20}
                height={20}
              />
            </Link>
            <Link to="#">
              <img
                src={TwitterImg}
                alt="Photosnap Twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link to="#">
              <img
                src={PinterestImg}
                alt="Photosnap Pinterest"
                width={20}
                height={20}
              />
            </Link>
            <Link to="#">
              <img
                src={InstagramImg}
                alt="Photosnap Instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className="footer-column"></div>
      </div>
    </footer>
  );
};

export default Footer;
