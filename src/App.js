import './App.css';
import Index from './components/Index';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;