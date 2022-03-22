import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Info = () => {

    let { name } = useParams();
    let searchName = name.replace("name=", "")

    const [perso, setPerso] = useState();
    const [persoObject, setPersoObject] = useState();
    const [vehicleHere, setVehicleHere] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let a = []
        fetch(`https://swapi.dev/api/people/?search=${searchName}`)
            .then(res => res.json())
            .then(data => {
                setPerso(data.results)
                data.results.map(element => {
                    if (element.vehicles.length >= 1) {
                        setVehicleHere(true)
                        fetch(element.vehicles[0])
                            .then(res => res.json())
                            .then(data => {
                                const info = {
                                    name_vehicle: data.name,
                                    model_vehicle: data.model,
                                    class_vehicle: data.vehicle_class,
                                    passengers_vehicle: data.passengers,
                                    cost_vehicle: data.cost_in_credits,
                                    capacity_vehicle: data.cargo_capacity,
                                    atmo_speed_vehicle: data.max_atmosphering_speed,
                                    name_perso: element.name,
                                    eye_color: element.eye_color,
                                    height: element.height,
                                    gender: element.gender
                                }
                                a.push(info)
                                setPersoObject([...a])
                            })
                    }
                })
            })
    }, []);

    return (
        <>
            <Link to="/"><button className="hover:underline ml-5 mt-2 text-white">Accueil</button></Link>
            <h1 className="text-center text-2xl">Informations du personnage</h1>
            {
                vehicleHere ?
                    <>
                        {
                            persoObject?.map((e, i) => (
                                <div key={i} className="flex flex-col text-center">
                                    <div className="border rounded w-[30%] m-auto my-4">
                                        <h1 className="text-2xl mb-2">Personnage</h1>
                                        <p>Nom : {e.name_perso}</p>
                                        <p>Yeux : {e.eye_color}</p>
                                        <p>Taille : {e.height}</p>
                                        <p>Genre : {e.gender}</p>
                                    </div>
                                    <div className="border rounded w-[30%] m-auto my-4">
                                        <h1 className="text-2xl mb-2">Véhicules Principal</h1>
                                        <p>Vehicule : {e.name_vehicle}</p>
                                        <p>Model : {e.model_vehicle}</p>
                                        <p>Classe : {e.class_vehicle}</p>
                                        <p>Nombres de passagers : {e.passengers_vehicle}</p>
                                        <p>Prix en crédit : {e.cost_vehicle}</p>
                                        <p>Capacité de chargement : {e.capacity_vehicle}</p>
                                        <p>Vitesse atmosphérique : {e.atmo_speed_vehicle}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                    :
                    <>
                        {
                            perso?.map((e, i) => (
                                <div key={i} className="flex justify-center text-center">
                                    <div className="border rounded w-[30%] m-auto my-4">
                                        <h1 className="text-2xl mb-2">Personnage</h1>
                                        <p>Nom : {e.name}</p>
                                        <p>Yeux : {e.eye_color}</p>
                                        <p>Taille : {e.height}</p>
                                        <p>Genre : {e.gender}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </>
            }
        </>
    )

}

export default Info