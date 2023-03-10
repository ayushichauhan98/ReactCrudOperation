import React, { Component } from 'react'
import './styles/register.css'
import { redirect, route } from '../Router'
import config from "../config/config.json"
export default class Edituser extends Component {
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
                                <div className="head text-center fs-2 fw-bold text-light ">Edit Data</div>
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
                                        <input type="button" value='Update' onClick={this.updateData} className="btn btn-success form-control fs-5 fw-bold" />
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
    componentDidMount() {
        //Get data from API
        let id = this.props.userid
        const url = 'http://localhost:5000/users/' + id;
        // console.log(this.props)
        let promise = fetch(url)
        promise.then((response) => {
            if (response.ok) {
                return response.json()
            }
        }).then((data) => {
            this.setState({
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                password: data.password,
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    //update data
    updateData = () => {
        // console.log(this.state)
        let id = this.props.userid

        const url = config.LOCAL_URL + id;
        // const site_url = "https://myhisab.seeksolution.in/api/getusers.php/";
        let updateUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile
        }
        let promise = fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(updateUser)
        })

        promise.then((response) => {
            if (response.ok) {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    mobile: "",
                    users: [],
                    msg: <span className='alert alert-success text-center'>Update Successfully</span>


                })
                setTimeout(() => {
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