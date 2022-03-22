import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <h1 className="text-3xl font-bold underline text-center">Find StarWars</h1>
            <br />
            <div className="grid grid-cols-3 justify-items-center">
                    <Link to="/personnages/"><button className="hover:underline text-white">Personnages</button></Link>
                    <Link to="/starships/"><button className="hover:underline text-white">Vaisseaux</button></Link>
                    <Link to="/planets/"><button className="hover:underline text-white">Planètes</button></Link>
            </div>
        </>
    )

}

export default Home;