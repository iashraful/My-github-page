import React, {Component} from 'react';

import '../styles/App.css';

import NavigationBar from './NavigationBar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ashraful Islam',
            items: [
                {
                    id: 1,
                    name: 'Home',
                    url: '/home',
                    component: Home
                },
                {
                    id: 2,
                    name: 'About',
                    url: '/about',
                    component: About
                },
                {
                    id: 3,
                    name: 'Contact',
                    url: '/contact',
                    component: Contact
                },
                {
                    id: 4,
                    name: 'Portfolio',
                    url: '/portfolios',
                    component: Portfolio
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <NavigationBar options={this.state}/>
            </div>
        );
    }
}

export default App;
