import './App.css';
import Profile from './components/Profile/profile';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MainComponent />}>
          <Route path="home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route> */}
        <Route path="/" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
