import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <a className="navbar-brand" href="/">{this.props.options.brand}</a>
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">

                                {this.props.options.items.map(item =>
                                    <li className="nav-item"
                                        key={item.id}> {/* map require unique key. So, I just put. Nothing special */}
                                        <Link className="nav-link" to={item.url}>{item.name}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </nav>

                    {/* Everything will happen here. All other view will be added under navbar */}

                    {/* Defining Route */}
                    {this.props.options.items.map(item =>
                        <Route exact path={item.url} component={item.component} key={item.id}/>
                    )}

                    {/* Defining 404 url */}
                </div>
            </HashRouter>
        )
    }
}

export default NavigationBar;