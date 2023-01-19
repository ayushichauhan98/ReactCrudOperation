import React ,{Component} from 'react';
export default class Header extends Component{
    render =()=>{
        return(
     
             <React.Fragment>
          <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand text-dark" href="#">Fashion</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#home">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link text-dark" href="#showuser">Show_User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#register">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </React.Fragment>

        )
    }
}