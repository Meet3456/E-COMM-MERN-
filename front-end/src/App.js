import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h2>Product Listing component</h2>} />
          <Route path='/add' element={<h2>Product Adding component</h2>} />
          <Route path='/update' element={<h2>Product Updating component</h2>} />
          <Route path='/logout' element={<h2>Logout component</h2>} />
          <Route path='/profile' element={<h2>Profile component</h2>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
