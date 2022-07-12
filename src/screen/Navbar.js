import React, { useState } from "react";
import { Link, NavLink, } from "react-router-dom";
import Cookie from 'js-cookie'
import ProfileImg from '../assets/profile.png'
import '../style/Navbar.css'
import '../style/Sidebar.css'


const Navbar = () => {

    const [sidebarOpen, setsidebarOpen] = useState(false);
    const [projectArrow, setProjectArrow] = useState(false);
    const [userArrow, setUserArrow] = useState(false);
    const [fileArrow, setFileArrow] = useState(false);

    const openSidebar = () => {
        setsidebarOpen(true);
    };
    const closeSidebar = () => {
        setsidebarOpen(false)
    };

    const logoutHandler = () => {
        Cookie.remove("userInfo");
        window.location.href = "/signin"
    };


    return (
        <>
            <nav className="navbar shadow">
                <div className="nav_icon" onClick={() => openSidebar()}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="navbar__left">
                    {/* <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a className="active_link" href="#">
                Admin
                </a> */}
                </div>
                <div className="navbar__right">
                    {/* <a href="#">
                <i className="fa fa-search" aria-hidden="true"></i>
                </a>
                <a href="#">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                </a> */}
                    <div className='chip'>
                        <span className="dropdown">
                            <img alt='image' src={ProfileImg} style={{ cursor: 'pointer' }} className="rounded-circle dropdown-toggle navImg" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <div style={{ width: '200px', margin: 'auto' }}>
                                    <img src={ProfileImg} className="card-img-top rounded-circle" style={{ width: '100px', display: "block", margin: 'auto' }} alt="Card image cap" />
                                    <h5 className="card-title text-center">Name</h5>
                                    <div className="card-body text-center">
                                        {/* <Link to='/profile' className=" btn btn-info shadow rounded mr-2"> <i className="fas fa-user"></i></Link> */}
                                        <button onClick={() => { if (window.confirm('Are you sure you want to log out?')) { logoutHandler() }; }} className=" btn btn-danger shadow rounded"> <i className="fas fa-sign-out-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="text-dark mx-2 h6">Name</span>
                    </div>
                </div>
            </nav>

            <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
                <div className="sidebar__title " style={{ borderBottom: "1px solid" }}>
                    <div style={{ marginLeft: "30%", paddingTop: '9px' }}>
                        <p className='text-center'>WMGB</p>
                    </div>
                    <i
                        onClick={() => closeSidebar()}
                        className="fa fa-times"
                        id="sidebarIcon"
                        aria-hidden="true"
                    ></i>
                </div>

                <div>
                    <NavLink className='d-flex sidebar__link mt-3' exact={true} to='/' activeClassName='text-primary'>
                        <i className="fa fa-home mx-3 " style={{ fontSize: "15px", marginTop: "6px" }} />
                        <p>Dashboard</p>
                    </NavLink>

                    <div >
                        <a onClick={() => setProjectArrow(!projectArrow)} className="d-flex sidebar__link" data-toggle="collapse" href="#answer" aria-expanded="false" aria-controls="answer">
                            <i className="fa-solid fa-hands-holding-circle mx-3" style={{ fontSize: "15px", marginTop: "6px" }} />
                            <p>Projects</p>
                            <i className={`${projectArrow ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-left"} ml-5`} style={{ fontSize: "14px", marginTop: "9px" }} />
                        </a>
                        <div className="collapse" id="answer" style={{ paddingLeft: "13%" }}>
                            <div className="card" style={{ backgroundColor: "#223545" }}>
                                <NavLink exact={true} activeClassName="text-primary" to="/projects/Ongoing" className="text-white my-1" style={{ textDecoration: "none" }}>Ongoing Projects</NavLink>
                                <NavLink exact={true} activeClassName="text-primary" to="/projects/Pending" className="text-white my-1" style={{ textDecoration: "none" }}>Pending Projects</NavLink>
                                <NavLink exact={true} activeClassName="text-primary" to="/projects/Completed" className="text-white my-1" style={{ textDecoration: "none" }}>Completed Projects</NavLink>
                                <NavLink exact={true} activeClassName="text-primary" to="/projects/Future" className="text-white my-1" style={{ textDecoration: "none" }}>Future Projects</NavLink>
                                <NavLink exact={true} activeClassName="text-primary" to="/add-project" className="text-white my-1" style={{ textDecoration: "none" }}>Add Projects</NavLink>

                            </div>
                        </div>
                    </div>

                    <div >
                        <a onClick={() => setFileArrow(!fileArrow)} className="d-flex sidebar__link" data-toggle="collapse" href="#file" aria-expanded="false" aria-controls="file">
                            <i className="fa-solid fa-file-arrow-down mx-3" style={{ fontSize: "20px", marginTop: "5px" }} />
                            <p>Files</p>
                            <i className={`${fileArrow ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-left"}`} style={{ fontSize: "15px", marginTop: "9px", marginLeft:"80px"}} />
                        </a>
                        <div className="collapse" id="file" style={{ paddingLeft: "13%" }}>
                            <div className="card" style={{ backgroundColor: "#223545" }}>
                                <NavLink exact={true} activeClassName="text-primary" to="/files" className="text-white my-1" style={{ textDecoration: "none" }}>List File</NavLink>
                                <NavLink exact={true} activeClassName="text-primary" to="/add-files" className="text-white my-1" style={{ textDecoration: "none" }}>Upload File</NavLink>
                               
                            </div>
                        </div>
                    </div>

                    <div >
                        <a onClick={() => setUserArrow(!userArrow)} className="d-flex sidebar__link" data-toggle="collapse" href="#user" aria-expanded="false" aria-controls="user">
                            <i className="fa-solid fa-users mx-3" style={{ fontSize: "14px", marginTop: "6px" }} />
                            <p>Users</p>
                            <i className={`${userArrow ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-left"}`} style={{ fontSize: "15px", marginTop: "9px", marginLeft:"69px"}} />
                        </a>
                        <div className="collapse" id="user" style={{ paddingLeft: "13%" }}>
                            <div className="card" style={{ backgroundColor: "#223545" }}>
                                <NavLink exact={true} activeClassName="text-primary" to="/users" className="text-white my-1" style={{ textDecoration: "none" }}>List User</NavLink>
                                <NavLink exact={true} activeClassName="text-primary" to="/add-users" className="text-white my-1" style={{ textDecoration: "none" }}>Add User</NavLink>
                               
                            </div>
                        </div>
                    </div>

                    <NavLink className='d-flex sidebar__link' exact={true} to='/complaints' activeClassName='text-primary'>
                        <i className="fa-solid fa-list mx-3 " style={{ fontSize: "17px", marginTop: "6px" }} />
                        <p>Complaints</p>
                    </NavLink>

                </div>
            </div>

        </>
    )
}

export default Navbar;