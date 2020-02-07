import React, { Component } from 'react';
import { Line }             from 'react-chartjs-2';
import axios                from 'axios';
import { NavLink, withRouter } from "react-router-dom";
import './show.scss'

class UserShow extends Component {
  constructor(props) {
     super(props);
     this.state = { user: [], name : '' };
  }

  componentDidMount() {
        axios.get('http://localhost:3001/users/'  + this.props.match.params.id)
          .then(res => {
            console.log(res);
              this.setState({user: res.data.statistic,
                name: `${res.data.filteredUsers[0]["first_name"]} ${res.data.filteredUsers[0]["last_name"]}`});
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  render() {
    const labels = [];
    const data = {
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(58,128,186,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(58,128,186,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(58,128,186,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1
    };
    const dataClicks = {
      labels,
      datasets: [
        {
          label: 'Clicks',
          ...data,
          data: []
        }
      ]
    };
    const dataViews = {
      labels,
      datasets: [
        {
          label: 'Views',
          ...data,
          data: []
        }
      ]
    };
    if(this.state.user.length !== 0) {
        this.state.user.map(temp => {
          dataClicks.datasets[0].data.push(temp.clicks)
          dataViews.datasets[0].data.push(temp.page_views)
          labels.push(temp.date);
          return temp;
        });
    }
    if(this.state.user.length !== 0) {
    return (
      <div className='show_user'>
          <div className="header_AppCo">
            <p>
              AppCo
            </p>
          </div>
          <nav>
            <NavLink to='/'>Main Page</NavLink>{" > "}
            <NavLink to='/users'>Statisctic Page</NavLink>{" > "}
            <NavLink to={"/user/"+ this.state.user[0].user_id} className='user_name_link'>{this.state.name}</NavLink>
          </nav>
          <h1>{this.state.name}</h1>
          <h2 className="chart_header">Clicks</h2>
          <div className="chart first_chart">
            <Line data={dataClicks} options={{responsive: true, maintainAspectRatio: false


}}/>
          </div>
          <h2 className="chart_header">Views</h2>
          <div className="chart second_chart">
            <Line data={dataViews} width={1134} height={500}/>
          </div>
            <div className="footer_user">
              <h2 className="logo">AppCo</h2>
              <p>All rights reserved by ThemeTags</p>
              <p className="copyright">Copyrights © 2019.</p>
            </div>
      </div>
    )} else {
      return (
        <div className='show_user'>
          <div className="header_AppCo">
            <p>
              AppCo
            </p>
          </div>
          <div className="footer_user">
            <h2 className="logo">AppCo</h2>
            <p>All rights reserved by ThemeTags</p>
            <p className="copyright">Copyrights © 2019.</p>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(UserShow)
