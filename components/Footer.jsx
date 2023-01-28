import React, { Component } from 'react'
export default class Footer extends Component {
    render = () => {
        return (
            <React.Fragment>
                <footer className="bg-dark text-center text-light">
                    <div className="container p-4 pb-0">
                        <section className="">
                            <form action="">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-5 col-12">
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form5Example27" className="form-control" />
                                            <label className="form-label" for="form5Example27">Email address</label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2023 Copyright:
                        <a className="text-danger" href="mailto:premv0013@gmail.com">Prem Sagar Vishwakarma</a>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}