import React ,{Component} from 'react';
import {route,redirect } from "../Router";
export default class ShowUsers extends Component{


	//mounting state
    
	constructor(props){
		
		console.log('This is mouting state : 1st Cycle');
		super(props);
		this.state = {
            name:"",
            email:"",
            mobile:"",
            password:"",
            users:[],
            msg:""
		}
		
	}
	
	componentDidMount(){
		
		console.log('This is Update state : 2nd Cycle');
		
		const url = 'http://localhost:5000/users';
		
		/************Start of Promise Fetch Api ***************/
		
		let promise = fetch(url);
		promise.then((response)=>{
			return response.json();
		}).then((data)=>{
			//Object Json
			if(Array.isArray(data)){
				console.log('chal rha hai');
				
				this.setState({
					users:data	
				})
			}

		}).catch((error)=>{
			console.log(error);
		})
		
		/************End of Promise Fetch Api ***************/
		
		
	}
	
	componentWillMount(){		
		console.log("Unmounted is 3rd cycle");
	}
	
    render = () =>{
		console.log(this.state.users,"render");
        return (
            <div>
               <h1>User Records</h1>
               {this.state.msg}
			   <table class="table table-bordered">
			   <thead>
			   <tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Mobile</th>
					<th>Edit</th>
					<th>Delete</th>

				</tr>
			   </thead>
			   <tbody>
						{this.getRecords()}
			   </tbody>
			   </table>
			   
            </div>
        )
    }
	
	getRecords = () =>{
		
		return this.state.users.map((item,index)=>{
			return (
			<tr key={item.id}>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.mobile}</td>
				<td>{item.email}</td>
                {/* <td><a href={"#edit/"+item.id}>Edit</a></td>
                <td><a href={"#delete/"+item.id}>Delete</a></td> */}
                <td><button class="btn btn-warning" type="button" onClick={()=>{
                    this.editUser(item.id)
                }}>Edit</button></td>
                <td>
                    <button class="btn btn-danger" type="button"
                    onClick={()=>{this.deleteUser(item.id,index)}}>
                        Delete
                    </button>
                    </td>
                    </tr>            
			)
		})		
	}
    deleteUser=(id,index)=>{
        if(window.confirm("Are you sure to delete")){
            //fetch api//
            console.log("id");
            const url='http://localhost:5000/users/'+id;
            let promise =fetch(url,{
                headers:{
                    "Content-Type":"application/json",
                },
                method:"DELETE",
            });
            promise.then((response)=>{
                if(response.ok){

                    let userData=[...this.state.users];
                    userData.splice(index,1);                    
                    this.setState({
                        msg:<span className="success">User Deleted Successfully</span>
                    });

                    setTimeout(()=>{
                        this.setState({
                            msg:""
                        });
                    },3000);
                    return redirect('showuser');
                }
            }).then((data)=>{
                console.log(data)
            }).catch((error)=>{
                console.log(error);
                this.setState({
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
    editUser=(id)=>{
        //console.log(id);
        return redirect('edituser/'+id);
    }
	
}
    // render =()=>{
    //   let foto ={
    //     background:"url('/images/a6.png')"
    //   }
    //     return(
    //     <div style={foto}>
    //       <table class="table table-bordered text-bg- m-auto mt-5" style={{height:"80px",width:"400px"}}>
    //         <thead class="bg-secondary m-auto mt-5" style={{height:"50px",width:"400px"}}>

    //         <tr>
    //           <th scope="col">Id</th>
    //           <th scope="col">Name</th>
    //           <th scope="col">Email</th>
    //           <th scope="col">Password</th>
    //           <th scope="col">Mobile</th>
    //           <th scope="col">File</th>            
    //         </tr>
    //         </thead>
    //         <tbody>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>

    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>

    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>

    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>

    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td>Ayushi</td>
    //           <td>ayushispn18@gmail.com</td>
    //           <td>12349590</td>
    //           <td>7563482544</td>
    //           <td>file</td>
               
    //         </tr>
    //         </tbody>
    //       </table>

    //     </div>
    //     )
    //}
    