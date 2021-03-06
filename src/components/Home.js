import React, { Component } from 'react';
import '../Home.css'
import Quote from './Quote';
import Before from './Before';
import Contactus from './Contactus';


class Home extends Component {

    render() {
        return (

            <div>
            <header className="masthead header">
              <div className="container h-100">
              
                <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">"FITNESS IS NOT ABOUT BEING BETTER THAN SOMEONE ELSE.. 
                    IT'S ABOUT BEING BETTER THAN YOU USED TO BE"</h1>
                    <hr className="divider my-4" />
                  </div>
                  <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 font-weight-light mb-5">Change Your Life With Us ..!</p>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                  </div>
                </div>
              </div>
              
            </header>
            <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
            
          
              
              <h2 className="text-white mt-0">MACRO CALCULATOR</h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4">This macro calculator shows your optimal macronutrients and calories based on your age, height, weight, gender, and activity level. Use your results with macro counting or flexible dieting/IIFYM to lose fat or gain muscle.</p>
              <a className="btn btn-light btn-xl js-scroll-trigger" href="MacroCalculator">Get Started!</a>
            </div>
          </div>
        </div>
      </section>
   

      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-list-alt text-primary mb-4" />
                <h3 className="h4 mb-2">Diet</h3>
                <p className="text-muted mb-0">No foods are off-limits! As long as it fits your macro requirements, you can eat whatever you like.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-heartbeat text-primary mb-4" />
                <h3 className="h4 mb-2">WorkOut</h3>
                <p className="text-muted mb-0">If you’re new to working out or interested in getting started, it’s useful to understand the different ways you can exercise. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-shopping-basket text-primary mb-4" />
                <h3 className="h4 mb-2">Product</h3>
                <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-trophy text-primary mb-4" />
                <h3 className="h4 mb-2">Goal</h3>
                <p className="text-muted mb-0">If your goal is to lose weight, we guarantee you will achieve this EASILY if you follow your unique plan. You’ll enjoy delicious food as you watch the pounds melt away!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa fa-calculator text-primary mb-4" />
                <h3 className="h4 mb-2">Macro calculator</h3>
                <p className="text-muted mb-0">Step-by-step instructions to calculate your optimal macro ratios to lose fat or build muscle without starving yourself.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa fa-leaf text-primary mb-4" />
                <h3 className="h4 mb-2">Meditation</h3>
                <p className="text-muted mb-0">Learn meditation for stress relief, mindfulness, anxiety & more </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa fa-calendar text-primary mb-4" />
                <h3 className="h4 mb-2">Planner</h3>
                <p className="text-muted mb-0">You track the times you eat, the foods you eat, portion sizes, and notes about what you were doing or feeling at the time using most of these methods. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa fa-thumbs-up text-primary mb-4" />
                <h3 className="h4 mb-2">Motivation</h3>
                <p className="text-muted mb-0">Starting and sticking to a healthy weight loss plan can sometimes seem impossible. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Before></Before>
      <Quote></Quote>
      <Contactus></Contactus>
            </div>
        );
      }
    };



export default Home;