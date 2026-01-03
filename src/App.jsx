import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bgmi from "./bgmi/Bgmi";
import Mindscape from "./mindscape/Mindscape";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mindscape" element={<Mindscape />} />
      <Route path="/bgmi" element={<Bgmi />} />
    </Routes>
  );
}
