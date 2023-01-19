import React ,{Component} from 'react';
import {route,redirect } from "../Router";
export default class User extends Component{
       //lifecycle :mounting state
 constructor(props){
  super(props);
     this.state={
         name:"",
        email:"",
        password:"",
        mobile:"",
        users:[],
        msg:"",
       }
    }
    render =()=>{
      return(
       <div>
        <h1>User Register Here</h1>
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
          <input type="button" value="save" onClick={this.saveData}/>
        </form>
       </div>
      )
    }
    saveData=()=>{
      //console.clear();  //
      //console.log();
      const url='http://localhost:5000/users/';
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
        method:"POST",
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
       
      //  render =()=>{
      //   let mystyle ={
      //     background:"url('/images/hgk.jpg')",
      //     backgroundSize:"cover",
      //     padding:"10px",
      //   }
      //     return(
      //       <div className="register" style={mystyle}>
      //     <div className="form">
      //       <form>
      //      {this.state.msg}
  
      //       Name:<input className="form-control" type="text" value={this.state.name} onChange={(event)=>
      //         {this.setState({name:event.target.value})}} /><br/>
      //       Email:<input className="form-control" type="email"  value={this.state.email} onChange={(event)=>
      //         {this.setState({email:event.target.value})}}/><br/>
      //       Password:<input className="form-control" type="pass" value={this.state.password} onChange={(event)=>
      //         {this.setState({password:event.target.value})}} /><br/>
      //       Mobile:<input className="form-control" type="mobile" value={this.state.mobile} onChange={(event)=>
      //         {this.setState({mobile:event.target.value})}} /><br/>
      //       File:<input className="form-control" type="file" value={this.state.file} onChange={(event)=>
      //         {this.setState({file:event.target.value})}} /><br/>
      //       <input className="form-control btn" type="Register" value="Submit" onClick={this.saveData}/>
            
      //       </form>        
      //     </div>
      //     </div>
      //     )
      // }
      //  saveData=()=>{
      //   const url='http://localhost:5000/users/';
      //   let newObject={
  
      // name:this.state.name,
      // email:this.state.email,
      // password:this.state.password,
      // mobile:this.state.mobile,
      //   }
      //  let promise= fetch (url,{
      //     headers:{
      //       "Content-Type":"application/json",
      //     },
      //     method:"POST",
      //     body:JSON.stringify(this.state)
  
      //   } );
      //   Promise.then((response)=>{
      //     if(response.ok){
      //       this.setState({
      //         name:"",
      //         mobile:"",
      //         password:"",
      //         email:"",
      //         msg:<span className="success">User Created Successfully</span>
      //       });
      //       return redirect('ShowUser'); //get
      //     }
      //     return response.json();
  
      //   }).then((data)=>{
      //     console.log(data)
      //   }).catch((error)=>{
      //     console.log(error);
  
      //     this.setState({
      //       msg:<span className="error">OOPs Try Again Later</span>
      //     });
      //     let ID1= setTimeout(()=>{
      //       this.setState({
      //         msg:"",
      //       });
      //     },5000);
      //     }
        
      // }).then((data)=>{
        
      // })
    
    

    
  
