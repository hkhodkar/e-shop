import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Checkout from "./components/check-out/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>
          <Route path="/" element={[<Header />, <Home />]}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
