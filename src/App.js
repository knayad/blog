import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import SingleArticle from "./pages/Articles/SingleArticle";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
