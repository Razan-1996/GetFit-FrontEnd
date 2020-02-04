import React, { Component } from 'react';
import '../App.css';
class ProductInfo extends Component {
    render() {
        const style = {
            width: '200px',
            height: '200px' 
          }
        return (

<div>
<div className="col-lg-9">
   <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
     <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
       <li data-target="#carouselExampleIndicators" data-slide-to={1} />
     <li data-target="#carouselExampleIndicators" data-slide-to={2} />
     </ol>
   
     </div>
     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true" />
       <span className="sr-only">Previous</span>
     </a>
     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true" />
       <span className="sr-only">Next</span>
     </a>
   </div>
   <div className="row">
     <div className="col-lg-4 col-md-6 mb-4">
       <div className="card h-auto">
         <a href="#"><img className="card-img-top" src={this.props.picture} alt="" /></a>
         <div className="card-body">
           <h4 className="card-title">
             <a href="#">{this.props.name}</a>
           </h4>
           <div className="card-footer">
           <p className="card-text">Prics: {this.props.price}</p>
           <p className="card-text">Rate: ★ ★ ★ ★ ☆</p>
           <h1 className="card-text">Nutrition Facts </h1>
           <p className="card-text">Protein: {this.props.protein}</p>
           <p className="card-text">Carbohydrates: {this.props.carbohydrates}</p>
           <p className="card-text">Fat: {this.props.fat}</p>
         </div>
         </div>
         
     

       </div>
       </div>
       </div>
       </div>
    );
  }
}
export default ProductInfo;

        