import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Home from "./Components/Home";
import MyCourses from "./Components/MyCourses";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/my-courses" element={<MyCourses />} />
    </Routes>
  </BrowserRouter>
);

export default App;
