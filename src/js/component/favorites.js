// Crear componente de favorites y vincularlo e invocarlo en el dropdown para que abra nueva vista.
// Recorres el array store.favorites con un map para obtener informacion de tus fav
// Para mostrar la informacion accedes a la propiedad de tu personaje/ elemento 
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Context } from "../store/appContext";
import React from "react";

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container row container-details">
            {store.favorites.map((favorito, index) => (
                <div>
                <p>{favorito.name}</p>
                <button className='btn btn-danger' onClick={() => actions.deleteElement(favorito)}> Eliminar</button>
                </div>    
            ))}
        
        </div>
    )
}