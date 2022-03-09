import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heading">
      <Link to="/">Home</Link>
      <h1>NC News</h1>
    </div>
  );
};
export default Header;
