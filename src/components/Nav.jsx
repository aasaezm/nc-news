import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { AiFillHome } from "react-icons/ai";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="top">
      <div className="top_page">
        <Link id="home" to="/">
          <AiFillHome color="black" size="2.5em" />
        </Link>
        <Link id="user" to="/users">
          {user}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
