import React from "react";
import Template from "../layout/mainTemplate/template";
import Home from "../screen/home";
import Login from "../screen/login";
import ListaBooks from "../screen/listaBooks";
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
   
        <Router>
          <Template>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/listaBooks" element={<ListaBooks/>}/>
            </Routes>
          </Template>
        </Router>
      
  );
}

export default App;
