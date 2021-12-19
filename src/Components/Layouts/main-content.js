import React from "react";
import { useParams } from "react-router-dom";
import { PEOPLE_QUERY } from "../../Querys/allPeople";
import { useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//  Informacion de la carta seleccionada

const MainContentLayout = () => {
    const { id } = useParams()
    const { data, loading, error } = useQuery(PEOPLE_QUERY,
        { variables: { personId: id } });
    if (loading) {
        return <div className="Loading"><FontAwesomeIcon icon={faSpinner} spin />Loading</div>
    }
    if (error) {
        return null //Error
    }
    return (
        <div>
            <div className="contenedor">
                <div className="box">
                    <h3>General Information</h3>
                    <div>
                        <div className="Item">
                            <div className="Item1">Eye Color</div>
                            <div className="Item2">{data.person.eyeColor}</div> 
                        </div>
                        <div className="Item">
                            <div className="Item1">Hair Color</div>
                            <div className="Item2">{data.person.hairColor}</div> 
                        </div>
                        <div className="Item">
                            <div className="Item1">Skin Color</div>
                            <div className="Item2">{data.person.skinColor}</div> 
                        </div>
                        <div className="Item">
                            <div className="Item1">Birth Year</div>
                            <div className="Item2">{data.person.birthYear}</div> 
                        </div>
                    </div>
                </div>
                {data.person.vehicleConnection.vehicles.length > 0 ? 
                <div className="box">
                    <h3>Vehicles</h3>
                    <div>
                        {data.person.vehicleConnection.vehicles.map((vehicle,index)=> (

                            <div className="Item" key={index}>
                            <div className="Item1">{vehicle.name}</div>
                        </div>
                        ))}
                    </div>
                </div>:null}
            </div>

        </div>
    )
}

export default MainContentLayout;