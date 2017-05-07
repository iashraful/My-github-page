import React, {Component} from 'react';

import '../styles/App.css';

import NavigationBar from './NavigationBar'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ashraful Islam',
            items: [
                {
                    id: 1,
                    name: 'Home',
                    url: '/home'
                },
                {
                    id: 2,
                    name: 'About',
                    url: '/about'
                },
                {
                    id: 3,
                    name: 'Contact',
                    url: '/contact'
                },
                {
                    id: 4,
                    name: 'Portfolio',
                    url: '/portfolios'
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <NavigationBar options={this.state}/>
                <div className="jumbotron">
                    <h1 className="text-center">Hello, World</h1>
                </div>
            </div>
        );
    }
}

export default App;
