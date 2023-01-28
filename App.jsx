import React, { Component } from 'react';
import Createuser from './components/Createuser';
import Footer from './components/Footer'
import Header from './components/Header'
import Showuser from './components/Showuser'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Home from './components/Home';
import { route } from "./Router"
import "./app.css"
import Edituser from './components/Edituser';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.id = window.localStorage.getItem('hash').split('/')[1];
        this.view = {
            home: <Home />,
            register: <Createuser />,
            showdata: <Showuser />,
            ["edituser/" + this.id]: <Edituser userid={this.id} />
        }
    }
    render = () => {

        return (
            <React.Fragment>
                <Header />
                {this.loadPage()}
                <Footer />

            </React.Fragment>
        )


    }
    loadPage = () => {
        return this.view[route];
    }
}