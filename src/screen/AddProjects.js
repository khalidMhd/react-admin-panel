import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import Navbar from "./Navbar";
import PreviousSceen from "../components/previous";

const AddProjectsScreen = (props) => {

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">
                    <PreviousSceen title={`Add New Project`} path="/" pathTitle="Dashboard" />

                    <div className=" card ">
                        <div className="card-header bg-primary text-white">
                            <h3 className="card-title"></h3>
                        </div>

                        <form>
                            <div className="card-body">

                                <div className="row">
                                    <div className="form-group col">
                                        <label>Project Type</label>
                                        <select className="form-control" >
                                            <option selected="selected">Select Project Type</option>
                                            <option>Ongiong Projects</option>
                                            <option>Pending Projects</option>
                                            <option>Completed Projects</option>
                                            <option>Future Projects</option>
                                        </select>
                                    </div>

                                    <div className="form-group col">
                                        <label for="Title">Title</label>
                                        <input type="text" className="form-control" id="Title" placeholder="Enter Title" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col">
                                        <label for="Budget">Budget</label>
                                        <input type="number" className="form-control" id="Budget" placeholder="Enter Budget" />
                                    </div>

                                    <div className="form-group col">
                                        <label for="District">District</label>
                                        <input type="text" className="form-control" id="District" placeholder="Enter District" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col">
                                        <label for="Tehsil">Tehsil</label>
                                        <input type="text" className="form-control" id="Tehsil" placeholder="Enter Tehsil" />
                                    </div>

                                    <div className="form-group col">
                                        <label for="Union Council">Union Council</label>
                                        <input type="text" className="form-control" id="Union Council" placeholder="Enter Union Council" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col">
                                        <label for="Started At">Started At</label>
                                        <input type="date" className="form-control" id="Started At" placeholder="Enter Started At" />
                                    </div>

                                    <div className="form-group col">
                                        <label for="Completed At">Completed At</label>
                                        <input type="date" className="form-control" id="Completed At" placeholder="Enter Completed At" />
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="form-group col-6">
                                        <label for="exampleInputFile">Uplaod Image</label>
                                        <div className="input-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="exampleInputFile" />
                                                <label className="custom-file-label" for="exampleInputFile">Choose file</label>
                                            </div>
                                            <div className="input-group-append">
                                                <span className="input-group-text">Upload</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col">
                                        <label for="Description">Description</label>
                                        <textarea class="form-control" id="Description" rows="3" placeholder="Enter Description"/>
                                    </div>
                                </div>


                            </div>

                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-primary w-25">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    )

}

export default AddProjectsScreen;