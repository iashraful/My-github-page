/**
 * Created by ashraful on 4/26/17.
 */

import React, {Component} from 'react';

import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';

import '../styles/index.css';

class NavigationBar extends Component {
    render() {
        // Registering plugins
        const plugins = [pushStateLocationPlugin];

        return (
            <UIRouter plugins={plugins} states={this.props.options.items}>
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
                                {/* Navbar items will be iterate here */}
                                {this.props.options.items.map(item =>
                                    <li className="nav-item" key={item.id}>
                                        {/* map require unique key. So, I just put. Nothing special */}
                                        <UISrefActive class="active nav-link">
                                            <UISref to={item.url}>
                                                <a>{item.name}</a>
                                            </UISref>
                                        </UISrefActive>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </nav>

                    {/* A ContentView will be include here */}
                    <UIView/>
                </div>

            </UIRouter>

        )
    }
}

export default NavigationBar;