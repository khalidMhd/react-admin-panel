import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import CardScreen from "../components/cards";
import PreviousSceen from "../components/previous";
import image from "../assets/notfound.png";
const ProjectsScreen = (props) => {
    const params = useParams()

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">
                    <PreviousSceen title={`${params.type} Projects`} path="/" pathTitle="Dashboard" />

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className=" card-header">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" name="table_search" className="form-control " placeholder="Search" />
                                        </div>
                                        <div className="col">
                                            <Link to="/add-project" className="btn btn-primary float-right">Add Projects</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0" style={{ height: "330px" }}>
                                    <table className="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Budget</th>
                                                <th>District</th>
                                                <th>Tehsil</th>
                                                <th>Union Council</th>
                                                <th>Started At</th>
                                                <th>Completed At</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Build Wells</td>
                                                <td>200000</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>11-07-2021</td>
                                                <td>11-07-2022</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm mx-1" data-toggle="modal" data-target="#exampleModal">
                                                        Details
                                                    </button>
                                                    <Link to='/update-project' className="btn btn-info btn-sm mx-1" data-toggle="modal" data-target="#exampleModal">
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Small Dams</td>
                                                <td>200000</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>11-07-2021</td>
                                                <td>11-07-2022</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm mx-1" data-toggle="modal" data-target="#exampleModal">
                                                        Details
                                                    </button>
                                                    <Link to='/update-project' className="btn btn-info btn-sm mx-1" data-toggle="modal" data-target="#exampleModal">
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Build Wells</h5>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='text-center justify-content-center'>
                                                        <img src={image} alt="Not Found" width='70%' height='70%' />
                                                        <p>providing reliable water projects to communities, who suffer needlessly from a lack of access to clean water and proper sanitation.</p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )

}

export default ProjectsScreen;