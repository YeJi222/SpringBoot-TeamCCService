import './index.css';
import Start from "./components/admin/Start";
import Login from "./components/admin/Login";
import Main from "./components/admin/Main";
import{ BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/Main" element={<Main />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
