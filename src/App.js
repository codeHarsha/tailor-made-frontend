import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/start/start';
import Customer from './components/customer/customer';
import Tailor from './components/tailor/tailor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/tailor" element={<Tailor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
