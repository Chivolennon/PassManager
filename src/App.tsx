//Ahora se que puedo eliminar el import de react no es necesario.
import { Routes, Route } from "react-router-dom";
import Home from "./component/LOG/Home";
import { Login } from "./component/LOG/Login";
import { Register } from "./component/LOG/Register";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-white flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
