import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/login';
import LoginSucesso from "./pages/sucesso";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sucesso" element={<LoginSucesso />} />
      </Routes>
    </Router>
  )
}

export default App;
