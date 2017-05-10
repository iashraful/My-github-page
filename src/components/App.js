import React, {Component} from 'react';

import '../styles/App.css';

import NavigationBar from './NavigationBar'
import Home from './Home'
import Resume from './Resume'
// import Contact from './Contact'
import Portfolio from './Portfolio'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Mohammad Ashraful Islam',
            items: [
                {
                    id: 1,
                    name: 'Home',
                    url: '/home',
                    component: Home
                },
                {
                    id: 2,
                    name: 'Resume',
                    url: '/resume',
                    component: Resume
                },
                /** Contact might be add in further versions  */
                // {
                //     id: 3,
                //     name: 'Contact',
                //     url: '/contact',
                //     component: Contact
                // },
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

                <Footer/>
            </div>
        );
    }
}

export default App;
