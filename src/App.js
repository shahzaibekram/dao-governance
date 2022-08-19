import { Routes, Route, } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Proposal from './Proposal'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Proposal />} />
      </Routes>
    </>
  );
}

export default App;
