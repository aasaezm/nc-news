import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Users = ({ users }) => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      {users.map((user) => {
        return (
          <div className="userList" key={user.username}>
            <div className="container">
              <div className="usernameInList">
                <Link
                  to={`/users/${user.username}`}
                  onClick={() => {
                    setUser(user.username);
                  }}
                >
                  {user.username}
                </Link>
              </div>
              <img
                className="imageSignIn"
                src={user.avatar_url}
                alt="user profile avatar"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;
