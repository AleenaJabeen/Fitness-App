import Signup from './components/SignupComponent/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/LoginComponent/Login';
import Home from './components/HomeComponent/Home';
import Footer from './components/LayoutComponents/Footer';
import './index.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="footer" element={<Footer />} />
  
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
