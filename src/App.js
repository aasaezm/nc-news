import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SingleArticleCard from "./components/SingleArticleCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:topic" element={<Articles />} />
          <Route
            path="/articles/article/:article_id"
            element={<SingleArticleCard />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
