import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import { BrowserRouter } from "react-router-dom";
import ArticlesByTopic from "./components/ArticlesByTopic";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:topic" element={<ArticlesByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
