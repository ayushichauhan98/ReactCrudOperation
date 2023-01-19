import React ,{Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ShowUsers from './components/ShowUsers';
import Users from './components/Users';
import {route} from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Footer from './components/Footer';
import "./app.css";
import EditUser from './components/EditUser';
export default class App extends Component{
    constructor(props){
        super(props);
        this.id=window.localStorage.getItem('hash').split('/')[1];
        this.views={
            home:<Home/>,
            register:<Users/>,
            edituser:<EditUser/>,
            showuser:<ShowUsers/>,
            ["edituser/"+this.id]:<EditUser userId={this.id}/>
        }
        
    }
    componentDidMount(){
        console.log("this method is running from App.jsx")
    }
    //  views={
    //     home:<Home/>,
    //     showuser:<ShowUsers/>,
    //     register:<Users/>
          
       
    //  }
     renderViews=()=>{
       return this.views[route];
     }
    render =()=>{
        return(
            <React.Fragment>
                <Header/>
                {this.renderViews()}
                <Footer/>
            </React.Fragment>
        )
    }
    
}