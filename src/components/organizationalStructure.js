import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import '../App.css';
import '../style/Dashboard.css'
import { Link } from "react-router-dom";

const OrganizationalStructureScreen = (props) => {

    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div className="w-25 card shadow">CEO <br /> khalid</div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 right-line"></div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-3 right-line"></div>
                <div class="col-3 right-line top-line"></div>
                <div class="col-3 right-line top-line"></div>
                <div class="col-3"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-2">
                    <div className=" card shadow">Child <br /> khalid</div>
                </div>
                <div class="col-4 d-flex justify-content-center">
                    <div className="card shadow w-50">Child <br /> khalid</div>
                </div>
                <div class="col-2">
                <div className="card shadow ">Child <br /> khalid</div>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row">
                <div class="col-6 right-line"></div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-3 p-0">
                    <div class="halved right-line"></div>
                    <div class="halved top-line"></div>
                </div>
                <div class="col-3 p-0">
                    <div class="halved right-line top-line"></div>
                    <div class="halved top-line"></div>
                </div>
                <div class="col-3 p-0">
                    <div class="halved right-line top-line"></div>
                    <div class="halved top-line"></div>
                </div>
                <div class="col-3 p-0">
                    <div class="halved right-line top-line"></div>
                    <div class="halved"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">GrandChild</div>
                <div class="col-3">GrandChild</div>
                <div class="col-3">GrandChild</div>
                <div class="col-3">GrandChild</div>
            </div>
        </div>
    )

}

export default OrganizationalStructureScreen;