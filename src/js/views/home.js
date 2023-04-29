import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanets } from "../component/cardPlanet";
import { CardVehicles } from "../component/cardVehicle";

import { Context } from "../store/appContext";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);


  useEffect(() => {
    fetch('https://swapi.tech/api/people/')
      .then(response => response.json())
      .then(data => {setCharacters(data.results);})
      .catch(error => {
        console.log('Oh No! There was a problem: \n', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://swapi.tech/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(error => {
        console.log('Oh No! There was a problem: \n', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://swapi.tech/api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data.results))
      .catch(error => {
        console.log('Oh No! There was a problem: \n', error);
      });
  }, []);

  return (
    <div className="text-center mt-5">
      <CardCharacter characters={characters} />
      <CardPlanets planets={planets} />
      <CardVehicles vehicles={vehicles} />
    </div>
  );
};

