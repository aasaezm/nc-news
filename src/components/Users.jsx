import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

const Users = ({ users }) => {
  const { user, setUser } = useContext(UserContext);
  //   console.log(users, "users from Users component");
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.username}>
            <Link
              to="/"
              onClick={() => {
                setUser(user.username);
              }}
            >
              {user.username}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Users;
