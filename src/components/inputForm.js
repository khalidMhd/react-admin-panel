import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link } from "react-router-dom";

const InputFormScreen = (props) => {

    return (
        <div className=" card ">
            <div className="card-header bg-primary text-white">
                <h3 className="card-title">Quick Example</h3>
            </div>

            <form>
                <div className="card-body">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputFile">File input</label>
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
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </div>

                <div className="card-footer text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default InputFormScreen;