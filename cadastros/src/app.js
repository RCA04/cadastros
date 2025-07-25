import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import Registro from "./registro";
import Lista from "./lista";
import UserDetails from './pages/userDetails';

function App(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/usuarios" element={<Lista/>}/>
            <Route path="/usuarios/:id" element={<UserDetails/>}/>
            <Route path="*" element={<div> <h1>ERROR 404</h1></div>}/>
        </Routes>
    </Router>
    )

};

export default App;