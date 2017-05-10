/**
 * Created by ashraful on 5/7/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import me from '../images/me.jpg';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-5 col-sm-6 text-center profile-image">
                        <img className="rounded" src={me} width="240" height="240" alt="Profile showcase"/>
                    </div>
                    <div className="col-md-7 col-sm-6 profile-details">
                        <h4><i className="fa fa-user-o p-r-10" aria-hidden="true"/>Mohammad Ashraful Islam</h4>
                        <p>
                            <i className="fa fa-sitemap p-r-10" aria-hidden="true"/>
                            Junior Software Engineer at <a href="https://field.buzz/" target="_blank">Field Information
                            Solutions Ltd.</a>
                        </p>
                        <p>
                            <i className="fa fa-home p-r-10" aria-hidden="true"/>
                            Ashkona Road, Airport, Uttara, Dhaka 1230 <br/>
                            <i className="fa fa-envelope-open-o p-r-10" aria-hidden="true"/>
                            ashrafulrobin3@gmail.com <br/>
                            <i className="fa fa-phone p-r-10" aria-hidden="true"/> 01757722681 <br/>
                            <i className="fa fa-github p-r-10" aria-hidden="true"/>
                            <a href="https://github.com/iamashraful" target="_blank">
                                Github Profile
                            </a> <br/>
                            <i className="fa fa-stack-overflow p-r-10" aria-hidden="true"/>
                            <a href="http://stackoverflow.com/users/5527679/ashraful-islam" target="_blank">
                                Stack Overflow Profile
                            </a> <br/>

                        </p>

                        <Link className="btn btn-outline-success p-l-r-50" to="/resume" role="button">View Resume</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
