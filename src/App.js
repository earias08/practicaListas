import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Inicio from "./components/pages/Inicio";
import Tareas from "./components/pages/Tareas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";
import {useState, useEffect} from 'react'

function App() {

 //State
 const [tareas, setTareas] = useState([]);
 //Variable de entorno
 const URL = process.env.REACT_APP_API_CAFETERIA;

 useEffect(() => {
  getApi();
}, []);


  const getApi = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setTareas(datos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-light">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<Inicio tareas={tareas}></Inicio>}></Route>
          <Route exact path="/tareas" element={<Tareas tareas={tareas} getApi={getApi}></Tareas>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
