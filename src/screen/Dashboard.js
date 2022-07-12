import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import CardScreen from "../components/cards";
import PreviousSceen from "../components/previous";
import BarChart from "../components/barChart";
import MapView from "../components/mapView/MapView";
const DashboardScreen = (props) => {

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">

                    <PreviousSceen title="Dashboard" path="/" pathTitle="Home" />

                    <CardScreen />
                    <BarChart />
                    <div className="my-3">
                        <MapView />
                    </div>
                </div>
            </main>
        </div>
    )

}

export default DashboardScreen;