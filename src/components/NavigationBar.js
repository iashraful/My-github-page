import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    NavLink,
    Redirect,
    Switch
} from 'react-router-dom';

import NotFound from './NotFound';

class NavigationBar extends Component {
    render() {
        return (
            <HashRouter>
                <div className="nav-content">
                    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <a className="navbar-brand" href="/">{this.props.options.brand}</a>
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto mr-auto">

                                {this.props.options.items.map(item =>
                                    <li className="nav-item"
                                        key={item.id}> {/* map require unique key. So, I just put. Nothing special */}
                                        <NavLink className="nav-link" activeClassName="active" to={item.url}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <a className="nav-link" href="http://blog.iashraful.me" target="_blank">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Everything will happen here. All other view will be added under navbar */}

                    {/* Always start with /home */}
                    <Redirect from="/" to="/home"/>

                    {/* Defining Route */}
                    <Switch>
                        {this.props.options.items.map(item =>
                            <Route exact path={item.url} component={item.component} key={item.id}/>
                        )}
                        {/* Defining 404 url */}
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default NavigationBar;