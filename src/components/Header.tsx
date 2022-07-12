import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    // using navigate would be used in form submission, not ever a click
    // use Link for clicks
    navigate("/details/l4KibWpBGWchSqCRy");
  };

  return (
    <div className="Header">
      <h1>
        <Link to="/">GIF App </Link>
      </h1>
      {/* <p onClick={clickHandler}>Click Me</p> */}
      <p>
        <Link to={"/favorites"}>Favorites</Link>
      </p>
      <p>
        Powered by{" "}
        <a className="link" href="https://developers.giphy.com/">
          GIPHY{" "}
        </a>
      </p>
    </div>
  );
};

export default Header;
