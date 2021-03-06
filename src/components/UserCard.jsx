import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const UserCard = ({ users }) => {
  const { user } = useContext(UserContext);

  const specficUser = users.filter((person) => person.username === user);
  return (
    <div>
      {specficUser.map((user) => {
        return (
          <section className="userCard" key={user.username}>
            <h2>{`Welcome back ${user.name}! We've missed you!`}</h2>
            <img
              className="userImage"
              src={user.avatar_url}
              alt="user profile avatar"
            />
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <Link to={`/users/${user.username}/articles`}>My articles</Link>
          </section>
        );
      })}
    </div>
  );
};

export default UserCard;
