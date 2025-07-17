import axios from "axios";
import { useEffect, useState } from "react";


function Lista(){

const api = process.env.REACT_APP_API_URL

const [usuarios, setUsuarios] = useState([]);

useEffect(()=>{
    axios.get(api)
    .then(response=>{
        setUsuarios(response.data)
    })
}, [])

    return(
        <div>

        </div>
    )
}

export default Lista;