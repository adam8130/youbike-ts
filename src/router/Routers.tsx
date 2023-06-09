import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import StationInfo from '../views/StationInfo'
import Guide from '../views/Guide'
import Pricing from '../views/Pricing'
import News from '../views/News'
import Event from '../views/Event'


function Routers () {

    return (
        <Routes>
            <Route path="/guide" element={<Guide />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/stationinfo" element={<StationInfo />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="*" element={<Navigate to="/stationinfo" />} />
        </Routes>
    )
}

export default Routers
