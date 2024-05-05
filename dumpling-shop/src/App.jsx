
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-3">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default App;
