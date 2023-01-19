import React ,{Component} from 'react';
import {route,redirect } from "../Router";
import config from "../Config/config.json"
export default class EditUser extends Component{
       //lifecycle :mounting state
 constructor(props){
  super(props);
     this.state={
         name:"",
        email:
        "",
        password:"",
        mobile:"",
        users:[],
        msg:"",
       }
    }
    render =()=>{
      return(
       <div>
        <h1>EditUser Here</h1>
        <hr/>
        {this.state.msg}
        <form>
          <p>Name:<input type="text"
          value={this.state.name}
          onChange={(event)=>
            {this.setState({name:event.target.value})}
          }/>
          </p>
          <p>Email:<input type="email"
          value={this.state.email}
          onChange={(event)=>
            {this.setState({email:event.target.value})}
          }/>
          </p>
          <p>Mobile:<input type="mobile"
          value={this.state.mobile}
          onChange={(event)=>
            {this.setState({mobile:event.target.value})}
          }/>
          </p>
          <p>Password:<input type="password"
          value={this.state.password}
          onChange={(event)=>
            {this.setState({password:event.target.value})}
          }/>
          </p>
          <input type="button" value="save" onClick={this.updateData}/>
        </form>
       </div>
      )
    }
    componentDidMount(){
      //Api se data ko le kar aange
      let id=this.props.userId;
      const url="http://localhost:5000/users/"+id;
      let promise =fetch(config.LOCAL_URL+id).then((response)=>{
        if (response.ok){
          return response.json();
        }
      }).then((data)=>{
      this.setState({
        name:data.name,
        email:data.email,
        mobile:data.mobile,
        password:data.password,
      });
    }).catch((error)=>{
      console.log(error);
    });
    
}
updateData=()=>{
  //console.clear();  //
  //console.log();
  let id=this.props.userId;
  const url=config.LOCAL_URL+id;
  let newObject={
    name:this.state.name,
    email:this.state.email,
    password:this.state.password,
    mobile:this.state.mobile,

  }
  //const site_url=''https://myhisab.seeksolution.in/api/createuser.php/';
  let promise=fetch(url,{
    headers:{
      "Content-Type":"application/json",
    },
    method:"PUT",
    body:JSON.stringify(newObject),
  });
  promise.then((response)=>{
    if(response.ok){
      this.setState({
        name:"",
        email:"",
        password:"",
        mobile:"",
       msg:<span className="success">USER CREATED SUCCESSFULLY</span>
      });
      return redirect('showuser');
    }
  }).then((data)=>{
    console.log(data)
  }).catch((error)=>{
    console.log(error);
    this.setState({
         name:"",
        email:"",
        password:"",
        mobile:"",
         msg:<span className="error">OOps Try Again Later</span>
    });
    let ID1=setTimeout(()=>{
      this.setState({
        msg:"",
      });
    },5000);
  });
}
}
