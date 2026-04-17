import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import Account from './pages/account/Account';
import MyOrders from './pages/my-orders/MyOrders';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Welcome from './pages/welcome/Welcome';
import FoodDetails from './pages/account/FoodDetails';

function App() {
  const location = useLocation();
  // Define routes where you want to hide the component
  const hideOnRoutes = ['/login', '/signup', '/welcome'];
  const showNavbar = !hideOnRoutes.includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/account" element={<Account />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/item/:category/:itemId" element={<FoodDetails />} />
        <Route
          path="/explore/item/:category/:itemId"
          element={<FoodDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
