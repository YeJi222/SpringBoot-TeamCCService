import './index.css';
import Start from "./components/admin/Start";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import RegisterTeam from "./components/admin/RegisterTeam";
import Main from "./components/admin/Main";
import UserRank from "./components/user/UserRank";
import{ BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/registerTeam" element={<RegisterTeam />}> </Route>
        <Route path="/Main" element={<Main />}> </Route>

        <Route path="/user/rank/:id" element={<UserRank />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
