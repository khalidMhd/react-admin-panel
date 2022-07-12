import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import CardScreen from "../components/cards";
import PreviousSceen from "../components/previous";
import image from "../assets/notfound.png";

const UsersScreen = (props) => {

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">
                    <PreviousSceen title={`Users`} path="/" pathTitle="Dashboard" />

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className=" card-header">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" name="table_search" className="form-control " placeholder="Search" />
                                        </div>
                                        <div className="col">
                                            <Link to="/add-users" className="btn btn-primary float-right">Add Users</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0" style={{ height: "330px" }}>
                                    <table className="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Khalid</td>
                                                <td>Khalid@gmail.com</td>
                                                <td>11-07-2022</td>
                                               
                                            </tr>
                                            <tr>
                                                <td>Khalid</td>
                                                <td>Khalid@gmail.com</td>
                                                <td>11-07-2022</td>
                                               
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )

}

export default UsersScreen;