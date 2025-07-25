import React from "react";
import './index.css'

function DeleteUser({nome, sobrenome, onCancel, onConfirm}){
    return(
        <div className="modal-overlay">
            <div className="modal">
                <p>Tem Certeza que deseja exluir o usuario: {nome} {sobrenome}? </p>
                <div className="buttons">
                <button onClick={onConfirm}>Confirmar</button>
                <button onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteUser;