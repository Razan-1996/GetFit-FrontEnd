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
<ProductInfo name={item.name} 
picture={item.picture}
 price={item.price}
description={item.description}
 protein={item.protein} 
 carbohydrates={item.carbohydrates}
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
