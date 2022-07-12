import React from 'react'
import PreviousSceen from '../../components/previous'
import '../../style/Login.css'
import Navbar from '../Navbar'

const SignupScreen = (props) => {

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">
                <PreviousSceen title={`Add Users`} path="/" pathTitle="Dashboard" />

                    <div class="hold-transition register-page">
                        <div class="login-box">
                            <div class="card card-outline card-primary">
                                <div class="card-header text-center">
                                    <h3 className='text-primary'>WMGB</h3>
                                    <p >Register a new membership</p>
                                </div>
                                <div class="card-body">
                                    {/* <p class="login-box-msg">Sign in to start your session</p> */}

                                    <form >
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="Full name" />
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-user"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="email" class="form-control" placeholder="Email" />
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-envelope"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="password" class="form-control" placeholder="Password" />
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-lock"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="password" class="form-control" placeholder="Retype password" />
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-lock"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <button type="submit" class="btn btn-primary btn-block">Register</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SignupScreen


