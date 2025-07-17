import axios from "axios";


function Lista(){

const api = process.env.REACT_APP_API_URL
axios.get(api);

console.log(api);


    return(
        <div>

        </div>
    )
}

export default Lista;