import React,{Component} from "react";
    import "bootstrap/dist/js/bootstrap.min.js";
    import "bootstrap/dist/css/bootstrap.min.css";
    
         
    export default class Footer extends Component{
    render=()=>{
    return(
        <React.Fragment>
           <div class="container-fluid pt-4 pb-3">
        <div class="row text-light bg-dark p-5">
          <div class="col-sm-4  justify-content-center align-items-center" style={{fontSize:"13px",lineHeight:"30px"}}>
            <span class="fs-4">Desire<b style={{color: "#61b400"}}>Cart <i class="fa-solid fa-cart-shopping"></i></b></span><br/>
            Address: Lucknow, Uttar Pradesh, 226061<br/>
            Phone: +91 8679752345<br/>
            E-mail: ayushiggp7@gmail.com<br/>
            <div class="row ms-2 mt-1">
            <div class="me-1 rounded-circle d-flex justify-content-center align-items-center"style={{background:"#61b400", width:"30px", height:"30px"}}>
              
              <i class="fa-brands fa-facebook-f "></i>
            </div>
            <div class="me-1 rounded-circle d-flex justify-content-center align-items-center"style={{background:"#61b400", width:"30px", height:"30px"}}>
              
              <i class="fa-brands fa-square-twitter "></i>
            </div>
              
            <div class="me-1 rounded-circle d-flex justify-content-center align-items-center"style={{background:"#61b400", width:"30px", height:"30px"}}>  
              <i class="fa-brands fa-instagram "></i>
              </div>
              <div class="me-1 rounded-circle d-flex justify-content-center align-items-center"style={{background:"#61b400", width:"30px", height:"30px"}}>
              <i class="fa-brands fa-youtube "></i>
            </div>
            </div>
          </div>
          <div class="col-sm-2" style={{lineHeight:"30px", fontSize:"14px"}}>
           <span class="fs-5"> Information</span><br/>
            About Us<br/>
            Checkout<br/>
            Contact<br/>
            services
          </div>
          <div class="col-sm-2" style={{lineHeight:"30px", fontSize:"14px"}}>
            <span class="fs-5">My Account</span><br/>
            My Account<br/>
            Contact<br/>
            Shopping Cart<br/>
            Shop<br/>
          </div>
          <div class="col-sm-4">
            <span class="fs-5">Join Our Newsletter Now</span><br/>
            Get E-mail updates about our latest shop and<br/>
            special offers.<br/>
            <div class="input-group">
      
      <input type="email" class="form-control" placeholder="Enter Your Mail"/>
      <span class="input-group-text text-white" style={{background: "#61b400"}}>SUBSCRIBE</span>
    </div>
    
          </div>
        </div>
        <div class="row text-bg-dark text-center mt-1 p-2" style={{fontSize:"14px"}}>
          <div class="col-sm-8">
            Copyright &copy; 2022 All rights reserved | This template is made by <i>Ayushi Chauhan</i>
          </div>
          <div class="col-sm-4">
           <i class="fa-brands fa-instagram" ></i>mohit
          </div>
        </div>
      </div>
         
        </React.Fragment>
    )
    
    
    }
}