import React from 'react'
import PreviousSceen from '../components/previous'
import '../style/Login.css'
import Navbar from './Navbar'

const AddFilesScreen = (props) => {

    return (
        <div className="containerMain">
            <Navbar />
            <main >
                <div className="m-4">
                    <PreviousSceen title={`Upload File`} path="/" pathTitle="Dashboard" />

                    <div class="hold-transition register-page">
                        <div class="login-box">
                            <div class="card card-outline card-primary">
                                <div class="card-header bg-primary text-center">
                                    {/* <h3 className='text-primary'>WMGB</h3>
                                    <p >Register a new membership</p> */}
                                </div>
                                <div class="card-body">
                                    {/* <p class="login-box-msg">Sign in to start your session</p> */}

                                    <form >
                                    <div className="form-group">
                                        <label for="Title">File Title</label>
                                        <input type="text" className="form-control" id="Title" placeholder="Enter File Title" />
                                    </div>
                                        <div className="form-group ">
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
                                        <div class="row">
                                            <div class="col">
                                                <button type="submit" class="btn btn-primary btn-block">Submit</button>
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

export default AddFilesScreen


