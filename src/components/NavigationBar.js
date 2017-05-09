/**
 * Created by ashraful on 4/26/17.
 */

import React, {Component} from 'react';

import ContentView from './ContentView'

class NavigationBar extends Component {
    render() {
        return (
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
                                    <a className="nav-link" href={item.url}>{item.name}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>

                {/* A ContentView will be include here */}
                <ContentView states={this.props.options.items}/>
            </div>

        )
    }
}

export default NavigationBar;