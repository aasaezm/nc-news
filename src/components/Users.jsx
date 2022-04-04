import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Users = ({ users }) => {
  const { user, setUser } = useContext(UserContext);
  // console.log(user, "User");

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.username}>
            <Link
              to={`/users/${user.username}`}
              onClick={() => {
                setUser(user.username);
              }}
            >
              {user.username}
            </Link>
            <img src={user.avatar_url} alt="user profile avatar" />
          </div>
        );
      })}
    </>
  );
};

export default Users;
