import Signup from './components/SignupComponent/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/LoginComponent/Login';
import Home from './components/HomeComponent/Home'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
  
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
