import logo from './logo.svg';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Proposal from './Proposal'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Proposal />} />
        {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </>
  );
}

export default App;
