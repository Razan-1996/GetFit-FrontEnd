import React, { Component } from 'react';
  import './Myprofile.css';
class MyprofileInfo extends Component {
    render() {
        const style = {
            width: '200px',
            height: '200px' 
          }
        return (
            <div>
                 <div className="container5">
         <div className="row">
           <div className="col-md-7 ">
             <div className="panel panel-default">
               <div className="panel-heading">  <h4>My Profile</h4></div>
               <div className="panel-body">
                 <div className="box box-info">
                   <div className="box-body">
                     <div className="col-sm-6">
                       <div align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive" /> 
                         <input id="profile-image-upload" className="hidden" type="file" />
                         <div style={{color: '#999'}}>click here to change profile image</div>
                         {/*Upload Image Js And Css*/}
                       </div>
                       <br />
                       {/* /input-group */}
                     </div>
                     <div className="col-sm-6">
                       <h4 style={{color: '#00b1b1'}}></h4>
          
                     </div>
                     <div className="clearfix" />
                     <div className="bot-border" />
                     <div className="col-sm-5 col-xs-6 tital ">Name:</div><div className="col-sm-7">{this.props.name}</div>
                     <div className="clearfix" />
                     <div className="bot-border" />
                     <div className="col-sm-5 col-xs-6 tital ">Email:</div><div className="col-sm-7">{this.props.email}</div>
                     <div className="clearfix" />
                     <div className="bot-border" />
                     <div className="col-sm-5 col-xs-6 tital ">Date Of Birth:</div><div className="col-sm-7">{this.props.birthdate}</div>
                     <div className="clearfix" />
                     <div className="bot-border" />
                     <div className="col-sm-5 col-xs-6 tital ">Height:</div><div className="col-sm-7">{this.props.height}</div>
                     <div className="clearfix" />
                     <div className="bot-border" />
                     <div className="col-sm-5 col-xs-6 tital ">Weight:</div><div className="col-sm-7">{this.props.weight}</div>
                     <div className="clearfix" />
                     <div className="bot-border" />
                     <div className="col-sm-5 col-xs-6 tital ">Gender:</div><div className="col-sm-7">{this.props.gender}</div>
                     {/* /.box-body */}
                   </div>
                   {/* /.box */}
                 </div>
               </div> 
             </div>
           </div>  
         </div>
</div>
            </div>
        );
    }
}
export default MyprofileInfo;