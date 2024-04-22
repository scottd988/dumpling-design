
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-3">
        <Outlet /> 
      </main>
    </>
  );
}

export default App;
