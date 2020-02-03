import React, { Component } from 'react';
import './App.css';
class ProductInfo extends Component {
    render() {
        const style = {
            width: '200px',
            height: '200px' 
          }
        return (
                <div className="ProductInfo" >
              <div id="Product12">
           <img src={this.props.picture} alt=""  style={{style}}  ></img>     
           <p>{this.props.name}</p>
           <p>{this.props.description}</p>
           <p>{this.props.price}</p>
           <p>{this.props.protein}</p>
           <p>{this.props.carbohydrates}</p>
           <p>{this.props.fat}</p>
          
           </div>
            </div>
        );
    }
}
export default ProductInfo;

        