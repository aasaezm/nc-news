import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Link id="home" to="/">
        Home
      </Link>
      <Link id="user" to="/users">
        {user}
      </Link>
    </div>
  );
};

export default Nav;
