import './index.css';
import Start from "./components/admin/Start";
import{ BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
