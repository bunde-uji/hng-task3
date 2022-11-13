import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Places from './pages/Places';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place-to-stay' element={<Places />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
