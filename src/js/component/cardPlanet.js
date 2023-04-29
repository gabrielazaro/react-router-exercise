import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from "../store/appContext";

export const CardPlanets = ({planets}) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container my-3">
    <div className="d-flex">
      <h1 className="text-danger justify-content-start">Planets</h1>
    </div>
    <div className="row flex-wrap overflow-auto">
      {planets.map((planet, index) => (
        <div key={index} className="col-3 container-planet">
          <img src="https://www.laopticadeantonio.es/wp-content/uploads/2013/12/150x150.gif" className="card-img-top d-flex mx-auto" alt="" style={{width:'150px', height: '150px' }}/>
          <div className="card my-3 container-datos">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">
              {planet.name}+
             </h5>
            <div className="d-flex justify-content-center">
            <Link to={`/planets/${index + 1}`}>
              {" "}
              <button href="#" className="btn btn-primary">
                Learn More!
              </button>
              </Link>
              <button className="btn btn-outline-dark ms-2" onClick={() => {actions.selectElement(planet) 
              actions.addElement()}}><i className="far fa-heart"></i></button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
