import React, { Component } from 'react'
import "./styles/showuser.css"
import { redirect, route } from '../Router'
export default class Showuser extends Component {
    //mounting
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            mobile: "",
            password: "",
            users: [],
            msg: ""
        }
    }
    componentDidMount() {
        // var arr = this.state.users
        const url = 'http://localhost:5000/users';
        let promise = fetch(url);

        promise.then((response) => {
            return response.json();
        }).then((data) => {
            // console.log(data)
            // console.log(Array.isArray(data))
            if (Array.isArray(data)) {
                this.setState({
                    users: data
                })

            }
        }).catch((error) => {
            console.log(error)
        })

        // this.setState({
        //     users: arr
        // })
    }
    componentWillMount() {
        console.log("Unmounted is 3rd")
    }
    render = () => {
        // console.log(this.state.users)
        return (
            <React.Fragment>
                <div className="show py-5">

                    <div className="row">
                        {this.state.msg}
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className='fw-bold fs-1 text-center text-light'>User Data</div><br />
                            <table className='table table-bordered text-center'>
                                <thead>
                                    <tr>
                                        <th >id.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Password</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getRecords()}

                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
    getRecords = () => {
        // var arr = this.state.users;
        // console.log(arr)

        // this.setState({
        //     users: arr
        // })
        // console.log(this.state.users)
        return this.state.users.map((item, index) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    {/* <td><a href={"#edit/" + item.id}>Edit</a> | <a href={"#delete/" + item.id}>Delete</a></td> */}
                    <td><button onClick={() => { this.edituser(item.id) }} className='btn btn-outline-warning'>Edit</button></td>
                    <td>
                        <button className='btn btn-outline-danger' onClick={() => { this.deleteuser(item.id, index) }}>Delete</button></td>
                </tr>
            )
        });

    }
    edituser = (id) => {
        // console.log(id)
        return redirect('edituser/' + id)
    }
    deleteuser = (id, index) => {
        // console.log(index)
        if (window.confirm('Are You sure to delete ?')) {
            //fetch api
            const url = 'http://localhost:5000/users/' + id;
            let promise = fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "DELETE",
            })

            promise.then((response) => {
                if (response.ok) {
                    let userData = [...this.state.users]
                    userData.splice(index, 1)
                    this.setState({
                        users: userData,
                        msg: <span className='alert alert-success text-center'>User Delete Successfully</span>
                    })
                    setTimeout(() => {
                        this.setState({
                            msg: "",
                        })
                    }, 2000)

                    return redirect('showdata')

                }
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
        }
    }
}