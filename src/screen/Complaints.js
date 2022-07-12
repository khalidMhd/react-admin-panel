import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import CardScreen from "../components/cards";
import PreviousSceen from "../components/previous";
import image from "../assets/notfound.png";
const CompalintsScreen = (props) => {

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">
                    <PreviousSceen title={`Compalints`} path="/" pathTitle="Dashboad" />

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className=" card-header ">
                                    <input type="text" name="table_search" className="form-control w-50 " placeholder="Search" />
                                </div>
                                <div className="card-body table-responsive p-0" style={{ height: "330px" }}>
                                    <table className="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>District</th>
                                                <th>Tehsil</th>
                                                <th>Union Council</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Muhammad Arif</td>
                                                <td>arif@gmail.com</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>11-07-2022</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm mx-1" data-toggle="modal" data-target="#exampleModal">
                                                        Details
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Muhammad Arif</td>
                                                <td>arif@gmail.com</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>Peshawar</td>
                                                <td>11-07-2022</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm mx-1" data-toggle="modal" data-target="#exampleModal">
                                                        Details
                                                    </button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Muhammad Arif</h5>
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

export default CompalintsScreen;