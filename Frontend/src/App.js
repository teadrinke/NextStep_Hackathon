import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import { Route, Router, Routes } from "react-router-dom";
import Result from "./components/Result";
import About from "./components/About";

function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
