import "./App.css";
import Profile from "./components/Profile/profile";
import Footer from "./components/Footer/footer";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/checkout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
