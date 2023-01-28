import React, { Component } from 'react'
import "./styles/header.css"
export default class Header extends Component {

    render = () => {
        return (
            <React.Fragment>
                <div className="mynav">
                    <div className="row bg-dark">
                        <div className="col-sm-3 text-danger fw-bold text-center pt-2 fs-3">Hello i m Prem</div>
                        <div className="col-sm-6">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary menu text-center">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                                            <a className="nav-link" href="#register">Register</a>
                                            <a className="nav-link" href="#showdata">ShowData</a>

                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-sm-3 text-light fw-bold text-center pt-2 fs-4">Crud Operation</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
