
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Lista from "./Lista";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
