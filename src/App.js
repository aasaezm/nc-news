import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import DetailedArticleCard from "./components/DetailedArticleCard";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import Nav from "./components/Nav";
import Users from "./components/Users";
import UserCard from "./components/UserCard";
import UserArticles from "./components/UserArticles";

function App() {
  const [user, setUser] = useState("Sign in");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);

  console.log(user, "User in App.js");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Nav />
          <Header />

          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/users" element={<Users users={users} />} />
            <Route path="/articles/:topic" element={<Articles />} />
            <Route
              path="/articles/article/:article_id"
              element={<DetailedArticleCard />}
            />
            <Route path="/users/:user" element={<UserCard users={users} />} />
            <Route
              path={`/users/${user}/articles`}
              element={<UserArticles />}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
