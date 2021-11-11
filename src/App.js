import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Pages/00Home/Home";
import Destination from "./Components/Pages/01Destination/Destination";
import Crew from "./Components/Pages/02Crew/Crew";
import Technology from "./Components/Pages/03Technology/Technology";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
