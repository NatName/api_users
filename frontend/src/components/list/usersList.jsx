import React, {Component} from 'react';
import List               from './list.jsx';
import { NavLink }        from "react-router-dom";
import './list.scss'

export default class ListApp extends Component {
    render() {
          return (
            <div>
              <div className="header_AppCo">
                <p>
                  AppCo
                </p>
              </div>
              <nav>
                <NavLink to='/'>Main Page</NavLink>{" > "}
                <NavLink to='/users' className="users_statistic">User statistic</NavLink>
              </nav>
              <h3 className="header_user">Users statistic</h3>
              <div className="list_users">
                    <List />
              </div>
                <div className="footer_users">
                  <h2 className="logo">AppCo</h2>
                  <p>All rights reserved by ThemeTags</p>
                  <p className="copyright">Copyrights © 2019.</p>
                </div>
            </div>
          )
    }
}
