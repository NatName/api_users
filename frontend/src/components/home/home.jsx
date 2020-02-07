import React, { Component } from 'react';
import { withRouter } from 'react-router'
import clean_design from "./../img/clean_design.svg";
import retina_ready from "./../img/retina_ready.svg";
import secure_data from "./../img/secure_data.svg";
import basic from "./../img/basic.svg";
import standart from "./../img/standart.svg";
import unlimited from "./../img/unlimited.svg";
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.passToUsers = this.passToUsers.bind(this);
  }
  passToUsers () {
    this.props.history.push('/users');
  }
  render() {
    return (
      <div className="home">
        <header>
          <div className="container">
            <p className="logo">AppCo</p>
            <h1 className="title"><span className="bold">Brainstorming</span> for desired perfect Usability</h1>
            <p className="text">
            Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>
            <button onClick={this.passToUsers}>
              View Stats
            </button>
            <div className="phone"></div>
          </div>
        </header>
        <div className="about">
        <h2>
          Why <span className="bold">small business owners love</span> AppCo?
        </h2>
        <p>
          Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
        </p>
        </div>
        <div className="card-container">
          <div className="card clean-design">
            <img src={clean_design} alt="Vector"/>
            <h2 className="card-header">Clean Design</h2>
            <p>Increase sales by showing true dynamics of your website.</p>
          </div>
          <div className="card secure-data">
            <img src={secure_data} alt="secure_data"/>
            <h2 className="card-header">Secure Data</h2>
            <p>Build your online store’s trust using Social Proof & Urgency.</p>
          </div>
          <div className="card retina-ready">
            <img src={retina_ready}  alt="retina"/>
            <h2 className="card-header">Retina Ready</h2>
            <p>Realize importance of social proof in customer’s purchase decision.</p>
          </div>
        </div>
        <div className="managing">
          <div className="container">
            <h2>
              Start Managing your apps business, more faster
            </h2>
            <p>
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively
            </p>
            <button>
              Learn more
            </button>
            <div className="notebook"></div>
          </div>
        </div>
        <div className="pricing">
        <h2>
          <span className="bold">Afforadble Pricing and Packages</span> choose your best one
        </h2>
        <p>
          Monotonectally grow strategic process improvements vis-a-vis integrated resources.
        </p>
        </div>
        <div className="pay-container">
          <div className="card basic">
            <h2 className="card-header">Basic</h2>
            <img src={basic} alt="basic"/>
            <h2 className="price price-basic">$29</h2>
            <p>Push Notifications Data Transfer SQL Database Search & SEO Analytics
              24/7 Phone Support 2 months technical support 2+ profitable keyword
            </p>
            <button>
              Purchase now
            </button>
          </div>
          <div className="card standart">
            <h2 className="card-header">Standart</h2>
            <img src={standart} alt="standart"/>
            <h2 className="price price-standart">$149</h2>
            <p>
              Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7
               Phone Support 2 months technical support 2+ profitable keyword
            </p>
            <button>
              Purchase now
            </button>
          </div>
          <div className="card unlimited">
            <h2 className="card-header">Unlimited</h2>
            <img src={unlimited}  alt="unlimited"/>
            <h2 className="price price-unlimited">$39</h2>
            <p>Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7
               Phone Support 2 months technical support 2+ profitable keyword
             </p>
             <button>
               Purchase now
             </button>
          </div>
        </div>
        <div className="contact">
          <p>If you need custom services or Need more? <span className="bold">Contact us</span></p>
        </div>

        <footer>
          <div>
            <input type="text" placeholder="Enter your email"></input>
            <button>Subcribe</button>
          </div>
          <div className="footer-container">
            <p className="logo">AppCoo</p>
            <p>All rights reserved by ThemeTags</p>
            <p>Copyrights © 2019</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default withRouter(Home);
