import React, { Component } from 'react'
import './styles/register.css'
import { redirect, route } from '../Router'
export default class Createuser extends Component {
    //react lifeCycle  
    //mounting state first lifecycle
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            mobile: "",
            password: "",
            users: [],
            msg: "",
        }
    }
    render = () => {
        // console.log(this.state)
        return (
            <React.Fragment>
                <div className="register">
                    <div className="row">
                        {this.state.msg}
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 py-5">
                            <div id="container">
                                <div className="head text-center fs-2 fw-bold text-light ">Create Data</div>
                                <div id="inner" className='py-2 px-4'>
                                    <form className="my-4">
                                        <div className="input-group">
                                            <div className="input-group-text"><b>Name</b></div>
                                            <input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} placeholder='Enter Your name' className="form-control" />
                                        </div> <br />
                                        <div className="input-group">
                                            <div className="input-group-text"><b>Email</b></div>
                                            <input type="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} placeholder='Enter Your email' className="form-control" />
                                        </div><br />
                                        <div className="input-group">
                                            <div className="input-group-text"><b>Mobile</b></div>
                                            <input type="number" value={this.state.mobile} onChange={(event) => this.setState({ mobile: event.target.value })} placeholder='Enter Your mobile no.' className="form-control" />
                                        </div> <br />
                                        <div className="input-group">
                                            <div className="input-group-text"><b>Password</b></div>
                                            <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder='Enter Your password...' className="form-control" />
                                        </div> <br />
                                        <input type="button" value='Save' onClick={this.saveData} className="btn btn-success form-control fs-5 fw-bold" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    // https://json-server.seeksolution.in/users/
    saveData = () => {
        // console.log(this.state)
        const url = 'http://localhost:5000/users';
        // const site_url = "https://myhisab.seeksolution.in/api/getusers.php/";
        let newobject = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile
        }
        let promise = fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newobject)
        })

        promise.then((response) => {
            if (response.ok) {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    users: [],
                    msg: <span className='alert alert-success text-center'>User Create Successfully</span>


                })
                let id1 = setTimeout(() => {
                    this.setState({
                        msg: "",
                    })
                    return redirect('showdata')
                }, 3000)
                // return redirect('showdata')

            }
            // return response.json();
        }).then((data) => {
            console.log(data)
        }).catch((error) => {
            // console.log(error)
            this.setState({
                name: "",
                email: "",
                password: "",
                users: [],
                msg: <span className='alert alert-danger text-center'>Oops try again later</span>
            })
            let id1 = setTimeout(() => {
                this.setState({
                    msg: "",
                })
            }, 5000)
        })
        // window.location.reload()
    }
}