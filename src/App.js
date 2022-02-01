import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import ViewClient from "./pages/ViewClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="nuevo" element={<NewClient />} />
          <Route path="clientes/editar/:id" element={<EditClient />} />
          <Route path="clientes/:id" element={<ViewClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
