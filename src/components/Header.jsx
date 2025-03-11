import logoYfitops from "../assets/logo/y-fitops.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoYfitops} alt="Logo do Yfitops" />
      </Link>
      <Link to="/" className="header__link">
        <h1>Yfitops</h1>
      </Link>
    </div>
  );
};

export default Header;
