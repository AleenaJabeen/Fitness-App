import Signup from "./components/SignupComponent/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginComponent/Login";
import Home from "./components/HomeComponent/Home";
import "./index.css";
import Layout from "./components/LayoutComponents/Layout"; 
import About from "./components/AboutComponent/About";
import Contact from './components/ContactComponent/Contact';
import Blogs from "./components/BlogsComponent/Blogs";
import FAQs from "./components/FAQComponent/FAQs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
