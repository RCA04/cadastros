import React from "react";
import { BrowserRouter as Router , Routes, Route, redirect } from "react-router-dom";

import Registro from "./registro";
import Lista from "./lista"

function App(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/usuarios" element={<Lista/>}/>
            <Route path="*" element={<Registro/>}/>
        </Routes>
    </Router>
    )

};

export default App;