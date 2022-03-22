import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from '../Home/Home';
import Perso from '../Pages/Perso';
import InfoPerso from '../Pages/InfoPerso';
import Starships from '../Pages/Starships';
import Planet from '../Pages/Planets';

function Chemin() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/personnages" element={<Perso />} />
                <Route exact path="/starships" element={<Starships />} />
                <Route exact path="/planets" element={<Planet />} />
                <Route exact path="/personnages/:name" element={<InfoPerso />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Chemin;