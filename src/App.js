import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PujaBooking from './pages/Puja';
import AllRoutes from './router/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <PujaBooking /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
