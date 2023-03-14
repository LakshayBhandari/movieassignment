import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Moviedetails from './pages/Moviedetails/Moviedetails';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movie/:id" element={<Moviedetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
