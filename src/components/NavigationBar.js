import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';

class NavigationBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <a className="navbar-brand" href="/">{this.props.options.brand}</a>
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">

                                {this.props.options.items.map(item =>
                                    <li className="nav-item"
                                        key={item.id}> {/* map require unique key. So, I just put. Nothing special */}
                                        <Link className="nav-link" to={item.url}>{item.name}</Link>
                                    </li>
                                )}
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

                    {/* Everything will happen here. All other view will be added under navbar */}

                    {/* Defining Route */}
                    {this.props.options.items.map(item =>
                        <Route exact path={item.url} component={Home} key={item.id}/>
                    )}
                </div>
            </Router>
        )
    }
}

export default NavigationBar;