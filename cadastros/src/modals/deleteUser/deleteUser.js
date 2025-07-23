import React from "react";


function deleteUSer(user){
    return(
        <div>
        <p>Tem Certeza que deseja exluir o usuario: {user.nome} {user.sobrenome}? </p>
        <div className="buttons">
            <button className="delete">Confirmar</button>
            <button className="cancel">Cancelar</button>
        </div>

        </div>
    );

}

export default deleteUSer;