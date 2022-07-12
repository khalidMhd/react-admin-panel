import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import PreviousSceen from "../components/previous";

const FilesScreen = (props) => {

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">
                    <PreviousSceen title={`Files`} path="/" pathTitle="Dashboard" />

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className=" card-header">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" name="table_search" className="form-control " placeholder="Search" />
                                        </div>
                                        <div className="col">
                                            <Link to="/add-files" className="btn btn-primary float-right">Upload File</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0" style={{ height: "330px" }}>
                                    <table className="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Date</th>
                                                <th>File</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>File Title</td>
                                                <td>11-07-2022</td>
                                                <td>
                                                    <button className="btn btn-primary btn-sm" >Download</button>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>File Title</td>
                                                <td>11-07-2022</td>
                                                <td>
                                                    <button className="btn btn-primary btn-sm" >Download</button>
                                                </td>
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

export default FilesScreen;