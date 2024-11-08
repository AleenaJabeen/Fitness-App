import Signup from "./components/SignupComponent/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginComponent/Login";
import Home from "./components/HomeComponent/Home";
import "./index.css";
import Layout from "./components/LayoutComponents/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
          <Route index  element={<Home />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
