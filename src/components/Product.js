import React, { Component } from 'react';
import axios from 'axios' ;
import ProductInfo from './ProductInfo';
class Product extends Component {
  constructor(){
    super()
    this.state ={
        arr: [],
        picture: "",
        name: "",
        description: "",
        protein: "",
        carbohydrates:"",
        fat:"",
        price: 0

    }
}

componentDidMount(){
  axios.get(`https://cors-anywhere.herokuapp.com/https://ifit-ga.herokuapp.com/products.json`)
   .then(data =>{
   console.log("Ssssss")
   console.log(data.data)
   this.setState({
        arr:  data.data
   })
}) }



    render() {

        return (
          <div >
          <section className="bg-light page-section" id="portfolio">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">products</h2>
      <h3 className="section-subheading text-muted">All avilable products.</h3>
    </div>
  </div>
  <div className="row container" >
      {this.state.arr.map((item)=>(
<ProductInfo name={item.name} picture={item.picture} price={item.price}
description={item.description} protein={item.protein} carbohydrates={item.carbohydrates}
fat={item.fat}  
></ProductInfo>
      ))}
 
  </div>
          </div>
          </section>
      </div>
  );
}
}

export default Product;

      //       <div className="col-lg-9">
      //   <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      //     <ol className="carousel-indicators">
      //       <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      //       <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      //       <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      //     </ol>
      //     <div className="carousel-inner" role="listbox">
      //       <div className="carousel-item active">
      //         <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
      //       </div>
      //       <div className="carousel-item">
      //         <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
      //       </div>
      //       <div className="carousel-item">
      //         <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
      //       </div>
      //     </div>
      //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      //       <span className="carousel-control-prev-icon" aria-hidden="true" />
      //       <span className="sr-only">Previous</span>
      //     </a>
      //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      //       <span className="carousel-control-next-icon" aria-hidden="true" />
      //       <span className="sr-only">Next</span>
      //     </a>
      //   </div>
      //   <div className="row">
      //     <div className="col-lg-4 col-md-6 mb-4">
      //       <div className="card h-100">
      //         <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
      //         <div className="card-body">
      //           <h4 className="card-title">
      //             <a href="#">Item One</a>
      //           </h4>
      //           <h5>$24.99</h5>
      //           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      //         </div>
      //         <div className="card-footer">
      //           <small className="text-muted">★ ★ ★ ★ ☆</small>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-lg-4 col-md-6 mb-4">
      //       <div className="card h-100">
      //         <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
      //         <div className="card-body">
      //           <h4 className="card-title">
      //             <a href="#">Item Two</a>
      //           </h4>
      //           <h5>$24.99</h5>
      //           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
      //         </div>
      //         <div className="card-footer">
      //           <small className="text-muted">★ ★ ★ ★ ☆</small>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-lg-4 col-md-6 mb-4">
      //       <div className="card h-100">
      //         <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
      //         <div className="card-body">
      //           <h4 className="card-title">
      //             <a href="#">Item Three</a>
      //           </h4>
      //           <h5>$24.99</h5>
      //           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      //         </div>
      //         <div className="card-footer">
      //           <small className="text-muted">★ ★ ★ ★ ☆</small>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-lg-4 col-md-6 mb-4">
      //       <div className="card h-100">
      //         <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
      //         <div className="card-body">
      //           <h4 className="card-title">
      //             <a href="#">Item Four</a>
      //           </h4>
      //           <h5>$24.99</h5>
      //           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      //         </div>
      //         <div className="card-footer">
      //           <small className="text-muted">★ ★ ★ ★ ☆</small>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-lg-4 col-md-6 mb-4">
      //       <div className="card h-100">
      //         <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
      //         <div className="card-body">
      //           <h4 className="card-title">
      //             <a href="#">Item Five</a>
      //           </h4>
      //           <h5>$24.99</h5>
      //           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
      //         </div>
      //         <div className="card-footer">
      //           <small className="text-muted">★ ★ ★ ★ ☆</small>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-lg-4 col-md-6 mb-4">
      //       <div className="card h-100">
      //         <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
      //         <div className="card-body">
      //           <h4 className="card-title">
      //             <a href="#">Item Six</a>
      //           </h4>
      //           <h5>$24.99</h5>
      //           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      //         </div>
      //         <div className="card-footer">
      //           <small className="text-muted">★ ★ ★ ★ ☆</small>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      //   );
        
//     }
// }

// export default Product;