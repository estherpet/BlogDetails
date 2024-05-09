import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Next from './pages/Project';

function App() {
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Project" element={<Next/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
