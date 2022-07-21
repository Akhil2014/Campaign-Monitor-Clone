
import { Spacer } from '@chakra-ui/react';
import AllRoutes from './AllRoutes/Routes';
import './App.css';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      
      <Navbar />
      <AllRoutes />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

