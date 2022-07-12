import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link } from "react-router-dom";

const CardScreen = (props) => {

    return (
        <div className="row">
            <div className="col-sm text-white">
                <div className="small-box bg-info">
                    <div className="inner">
                        <h3>150</h3>
                        <p>Ongoing Projects</p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-building " ></i>
                    </div>
                    <Link to="/projects/Ongiong" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div>

            <div className="col-sm text-white">
                <div className="small-box bg-success">
                    <div className="inner">
                        <h3>150</h3>
                        <p>Pending Projects</p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-building " ></i>
                    </div>
                    <Link to="/projects/Pending" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div>

            <div className="col-sm text-white">
                <div className="small-box bg-warning">
                    <div className="inner">
                        <h3>150</h3>
                        <p>Completed Projects</p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-building " ></i>
                    </div>
                    <Link to="/projects/Completed" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div>

            <div className="col-sm text-white">
                <div className="small-box bg-danger">
                    <div className="inner">
                        <h3>150</h3>
                        <p>Future Projects</p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-building " ></i>
                    </div>
                    <Link to="/projects/Future" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div>

        </div>
    )

}

export default CardScreen;