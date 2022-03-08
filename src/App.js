import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics />
        <Articles />
      </div>
    </BrowserRouter>
  );
}

export default App;
