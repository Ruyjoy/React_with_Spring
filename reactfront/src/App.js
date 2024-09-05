import ListClientesComponet from "./components/ListClientesComponet";
import AddClienteComponent from "./components/AddClienteComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListClientesComponet />}></Route>
            <Route exact path="/clientes" element={<ListClientesComponet />}></Route>
            <Route exact path="/add-cliente" element={< AddClienteComponent />}></Route>
            <Route exact path="/edit-cliente/:id" element={< AddClienteComponent />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
