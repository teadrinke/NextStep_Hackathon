import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import { Route, Router, Routes } from "react-router-dom";
import Result from "./components/Result";

function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
