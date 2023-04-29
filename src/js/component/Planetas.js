import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import React from "react";

export const Planetas = () => {
  const { store, actions } = useContext(Context);
  const [planetDetail, setPlanetDetail] = useState({}); // Variable de estado para guardar la información de los personajes
  const params = useParams();
  useEffect(() => {
    fetch(`https://swapi.tech/api/planets/${params.idPlanet}`)
      .then((response) => response.json())
      .then((data) => {
        setPlanetDetail(data.result.properties),
          console.log(data.result.properties);
      })
      .catch((error) => {
        console.log("¡Oh no! Hubo un problema: \n", error);
      });
  }, []);

  return (
    <div className="container row container-details">
      <h1>{planetDetail.name}</h1>
      <div className="d-flex">
        <img src="https://i.pinimg.com/originals/96/8b/1f/968b1fae91c3ccca9f4a9fdef4a48082.jpg" style={{width: '300px'}}></img>
        <h4 className="mx-3 text-center">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h4>
      </div>
      <div className="row m-3 bg-light ">
        <div className="col bg-warning">
            Gravity: 
            <p>{planetDetail.gravity}</p>
        </div>
        <div className="col">
            Diameter:
            <p>{planetDetail.diameter}</p>
        </div>
        <div className="col bg-warning">
            Climate: 
            <p>{planetDetail.climate}</p>
        </div>
        <div className="col">
            Terrain: 
            <p>{planetDetail.terrain}</p>
        </div>
      </div>
    </div>
  );
};
