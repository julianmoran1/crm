import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import ViewClient from "./pages/ViewClient";

function App() {

console.log(process.env.REACT_APP_API_URL)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="new" element={<NewClient />} />
          <Route path="clients/edit/:id" element={<EditClient />} />
          <Route path="clients/:id" element={<ViewClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
