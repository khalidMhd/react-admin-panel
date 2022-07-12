import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link } from "react-router-dom";

const PreviousSceen = (props) => {
    const { title, path, pathTitle } = props
    return (
        <div className="row">
            <div className="col-sm-6">
                <h3 className="m-0 text-secondary">{title}</h3>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link className="text-decoration-none" to={path}>{pathTitle}</Link></li>
                    <li className="breadcrumb-item active">{title}</li>
                </ol>
            </div>
        </div>
    )

}

export default PreviousSceen;