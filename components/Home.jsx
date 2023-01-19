import React ,{Component} from 'react';
import "./Styles/home.css"
export default class Home extends Component{
    render =()=>{
        return(
            
                <React.Fragment>
                   <div className="row">
            <div className="col-sm-12 slider">
                <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="500">
                  <img src="images/dd7.jpg" className="d-block w-100" alt="..."style={{maxHeight:"680px"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>This is first image</h5>
                    <p>Desert</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="500">
                  <img src="images/dd6.jpg" className="d-block w-100"alt="..." style={{maxHeight:"680px"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>This is second image</h5>
                    <p>Dark image</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="500">
                  <img src="images/dd3.jpg"className="d-block w-100" alt="..."style={{maxHeight:"680px"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>This is third image</h5>
                    <p>Tulips</p>
                  </div>
                </div>
                <div className="carousel-item"data-bs-interval="500">
                  <img src="images/ft.jpg"className="d-block w-100" alt="..."style={{maxHeight:"680px"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>This is Fourth image</h5>
                    <p>Tulips</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            </div>
            </div>
            </div>
            </React.Fragment>
            )
            }
            }
         
        