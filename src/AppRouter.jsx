// AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import App from "./App";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
